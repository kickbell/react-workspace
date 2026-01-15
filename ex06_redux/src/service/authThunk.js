import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:4000/login"
export const loginThunk = createAsyncThunk(
    "loginThunk",
    async (user) => {
        //method : post => 데이터를 보내는 경우 또는 데이터를 저장
        //post 방식은 대용량의 데이터 처리 가능
        //console.log("login thunk user : ", user)
        //user : {id:"",pwd:""}=> js object타입
        const res = await fetch(url, {
             method : "post",
             headers : {"Content-Type":"application/json"} , //데이터 처리 방식 지정
             body : JSON.stringify(user) //header에 지정된 방식으로 데이터를 포장해서 보냄
        })
        //throw new Error("로그인 중 에러 발생")
        return await res.json();
    }
)