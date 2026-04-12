import { createAsyncThunk } from "@reduxjs/toolkit";
import { service_path } from "../service_ip_port";

const path = service_path;
const getToken = (thunkAPI) => {
  const tokenFromState = thunkAPI.getState().auth?.token;
  const tokenFromSessionAuth = JSON.parse(sessionStorage.getItem("auth") || "{}").token;
  const tokenFromSessionRaw = sessionStorage.getItem("token");
  return tokenFromState || tokenFromSessionAuth || tokenFromSessionRaw;
};
const withBearer = (token) => {
  if (!token) return "";
  return token.startsWith("Bearer ") ? token : `Bearer ${token}`;
};

export const postThunk = createAsyncThunk(
  "postThunk",
  async ( ) => {
    const res = await fetch(path + "/post")
    if( res.ok )
      return res.json();
    if( res.status === 404 )
      throw new Error("저장된 데이터가 없습니다")
  }
);

export const postOneThunk = createAsyncThunk(
  "postOneThunk",

  async ( post, thunkAPI ) => { // { id: 번호 }
    const token = getToken(thunkAPI);
    if (!token) {
      throw new Error("로그인 먼저 하세요");
    }
    const headers = {};
    if (token) {
      headers["Authorization"] = withBearer(token);
    }
    const res = await fetch(path + "/post/{id}?postId=" + post.id , {
      headers
    } )
    if( res.ok )
      return res.json();
    if( res.status === 404 )
      throw new Error("저장된 데이터가 없습니다")
    if( res.status === 401 )
      throw new Error("로그인 먼저 하세요")
  }
);


export const postDeleteThunk = createAsyncThunk(
  "postDeleteThunk",
  async ( post, thunkAPI ) => { // { id : postId }
    const token = getToken(thunkAPI);
    if (!token) {
      throw new Error("로그인 먼저 하세요");
    }
    const res = await fetch(path + "/post/" + post.id , {
      method : "delete",
      headers : {
        "accept": "*/*",
        "Authorization" : withBearer(token)
      }
    } )
    console.log("[postDeleteThunk] status:", res.status);
    if( res.ok )
      return { result: 1, id: post.id };
    if( res.status === 404 )
      throw new Error("저장된 데이터가 없습니다")
    if( res.status === 401 )
      throw new Error("로그인 먼저 하세요")
  }
);


export const postRegisterThunk = createAsyncThunk(
  "postRegisterThunk",
  async ( post, thunkAPI ) => { // post : { number, title, content }
    const token = getToken(thunkAPI);
    if (!token) {
      throw new Error("로그인 먼저 하세요");
    }
    const params = new URLSearchParams({
      number: String(post.number ?? 1),
      title: String(post.title ?? ""),
      content: String(post.content ?? "")
    });

    const res = await fetch(path + "/post?" + params.toString(), {
      method : "post",
      headers : {
        "accept": "*/*",
        "Authorization" : withBearer(token)
      },
      body : ""
    } );

    if (res.status === 401) {
      throw new Error("로그인 먼저 하세요");
    }
    if (res.status === 403) {
      throw new Error("회원만 글 등록 가능합니다");
    }
    if (res.status === 404) {
      throw new Error("게시글 등록 실패: number(회원 번호) 또는 API 매핑을 확인하세요");
    }
    if( res.ok ) {
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        return await res.json();
      }
      return { result: 1 };
    }

    const errorText = await res.text();
    throw new Error(errorText || "게시글 등록 실패");
  }
);

export const postModifyThunk = createAsyncThunk(
  "postModifyThunk",
  async ( { id, title, content }, thunkAPI ) => {
    const token = getToken(thunkAPI);
    if (!token) {
      throw new Error("로그인 먼저 하세요");
    }

    const query = new URLSearchParams({
      title: String(title ?? ""),
      content: String(content ?? "")
    }).toString();

    const endpoints = [
      `/post/${id}?${query}`,
      `/post/{id}?postId=${id}&${query}`,
      `/post?postId=${id}&${query}`
    ];

    for (const endpoint of endpoints) {
      const res = await fetch(path + endpoint, {
        method : "put",
        headers : {
          "accept": "*/*",
          "Authorization" : withBearer(token)
        },
        body : ""
      } );

      if (res.status === 404) {
        continue;
      }
      if (res.status === 401) {
        throw new Error("로그인 먼저 하세요");
      }
      if (res.status === 403) {
        throw new Error("수정 권한 없음");
      }
      if (res.ok) {
        return { result: 1, id };
      }

      const errorText = await res.text();
      throw new Error(errorText || "게시글 수정 실패");
    }

    throw new Error("게시글 수정 API 경로를 찾지 못했습니다");
  }
);


export const postLikedThunk = createAsyncThunk(
  "postLikedThunk",
  async ( like, thunkAPI ) => { // { postId: 번호, liked: boolean }
    const token = getToken(thunkAPI);
    if (!token) {
      throw new Error("로그인 먼저 하세요");
    }

    const endpoint = `${path}/post/${like.postId}/like`;
    const callLikeApi = async (method) => {
      const options = {
        method,
        headers: {
          "accept": "*/*",
          "Authorization": withBearer(token),
        },
      };
      if (method === "post") {
        options.body = "";
      }
      return fetch(endpoint, options);
    };

    // 기본: false(미좋아요) -> POST(추가), true(좋아요) -> DELETE(취소)
    const primaryMethod = like.liked ? "delete" : "post";
    const fallbackMethod = primaryMethod === "post" ? "delete" : "post";

    let res = await callLikeApi(primaryMethod);
    // 일부 백엔드는 메서드 의미를 반대로 구현할 수 있어 1회 재시도
    if (!res.ok && (res.status === 401 || res.status === 404 || res.status === 405)) {
      res = await callLikeApi(fallbackMethod);
    }

    if (res.status === 401) {
      throw new Error("로그인 먼저 하세요");
    }
    if (res.status === 403) {
      throw new Error("좋아요 권한이 없습니다");
    }
    if (res.status === 404) {
      throw new Error("게시글이 없습니다");
    }
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "좋아요 처리 실패");
    }

    return {
      postId: Number(like.postId),
      liked: !like.liked,
      delta: like.liked ? -1 : 1,
    };
  }
);