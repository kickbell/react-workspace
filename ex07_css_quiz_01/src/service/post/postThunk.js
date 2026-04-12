import { createAsyncThunk } from "@reduxjs/toolkit";
import { service_path } from "../service_ip_port";

const path = service_path;
const getToken = (thunkAPI) => {
  const tokenFromState = thunkAPI.getState().auth?.token;
  const tokenFromSession = JSON.parse(sessionStorage.getItem("auth") || "{}").token;
  return tokenFromState || tokenFromSession;
};
const withBearer = (token) => {
  if (!token) return "";
  return token.startsWith("Bearer ") ? token : `Bearer ${token}`;
};

export const postThunk = createAsyncThunk(
  "postThunk",
  async ( _, thunkAPI ) => {
    const token = getToken(thunkAPI);
    const headers = {
      "Content-Type": "application/json"
    };
    if (token) {
      headers["Authorization"] = withBearer(token);
    }
    const res = await fetch(path + "/post", { headers })
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