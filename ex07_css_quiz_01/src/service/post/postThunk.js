import { createAsyncThunk } from "@reduxjs/toolkit";
import { service_path } from "../service_ip_port";

const path = service_path;

export const postThunk = createAsyncThunk(
  "postThunk",
  async ( _, thunkAPI ) => {
    const token = thunkAPI.getState().auth.token;
    const headers = {
      "Content-Type": "application/json"
    };
    if(token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const res = await fetch(path + "/post", { headers })
    if( res.ok )
      return res.json();
    if( res.status === 404 )
      throw new Error("저장된 데이터가 없습니다")
  }
);