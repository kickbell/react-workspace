import { createAsyncThunk } from "@reduxjs/toolkit";
import { service_path } from "../service_ip_port";

const path = service_path;

export const postThunk = createAsyncThunk(
  "postThunk",
  async ( _, thunkAPI ) => {
    const tokenFromState = thunkAPI.getState().auth?.token;
    const tokenFromSession = JSON.parse(sessionStorage.getItem("auth") || "{}").token;
    const token = tokenFromState || tokenFromSession;
    const headers = {
      "Content-Type": "application/json"
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
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
    const tokenFromState = thunkAPI.getState().auth?.token;
    const tokenFromSession = JSON.parse(sessionStorage.getItem("auth") || "{}").token;
    const token = tokenFromState || tokenFromSession;
    if (!token) {
      throw new Error("로그인 먼저 하세요");
    }
    const headers = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
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