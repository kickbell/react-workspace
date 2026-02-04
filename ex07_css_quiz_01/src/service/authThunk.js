import { createAsyncThunk } from "@reduxjs/toolkit";
import { service_path } from "./service_ip_port";
let data_set = [
    {username:"aaa",password :"react-aaa", role : "USER"},
    {username:"bbb",password :"bbb", role : "USER"},
    {username:"ccc",password :"ccc", role : "USER"},
]
const path = service_path;

export const loginThunk = createAsyncThunk(
  "loginThunk", 
  async ( user ) => {
    const res = await fetch(path + "/members/login",{
      method : "post",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify( user )
    } )
    //const resResult = await res.json();
    //console.log( "resResult : ", resResult)
    return {result:await res.json(), username:user.username};
    
    //return (await res.json())
                    //?{result:0, username:user.username}:
                    //{result:1, username:user.username}; //성공 0, 실패 1

    /*
    const data = data_set.filter(data => data.username === user.username )[0]
    let result = 1;
    if(data?.password === user.password ){
      result = 0;
    }
    return {result, username:user.username}; //성공 0, 실패 1
    */
  }
);
export const registerThunk = createAsyncThunk(
  "registerThunk", 
  async ( user ) => {
    data_set = data_set.concat( user )
    return { result : 0 }
  }
);

export const memberThunk = createAsyncThunk(
  "memberThunk", 
  async ( ) => {
    const res = await fetch(path + "/members", {method:"get"} );
    console.log( res )
    //if( res.ok )
    return await res.json()
    //throw new Error();
    //return data_set;
  }
);
export const memberOneThunk = createAsyncThunk(
  "memberOneThunk", 
  async ( user ) => { //{username : aaa}
    const res = await fetch(path + "/members/"+user.username )
    return await res.json();
    /*
    console.log("one thunk : ", user )
    const data = data_set.filter(d => d.username === user.username)[0]
    console.log("one thunk data : ", data )
    return data
    */
  }
);
export const memberDeleteThunk = createAsyncThunk(
  "memberDeleteThunk", 
  async ( user ) => { //{username : aaa}
    const res = await fetch(path+"/members/"+user.username, {
      method : "delete"
    } )
    if( res.ok )
      return 1;
    //console.log( "res : ", res )
    //data_set = data_set.filter( d => d.username !== user.username)
    //return 1;
  }
);
export const memberModifyThunk = createAsyncThunk(
  "memberModifyThunk", 
  async ( {id, formData} ) => { //{username : aaa}
    const res = await fetch(path+"/members/"+id, {
      method : "put",
      body : formData
    })
    //data_set = data_set.filter( d => d.username !== user.username)
    //data_set = data_set.concat( user )
    if(res.ok)
      return 1;
    throw new Error("수정 중 문제 발생");
  }
);
