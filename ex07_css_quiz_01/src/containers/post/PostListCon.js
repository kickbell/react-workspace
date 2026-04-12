import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PostListCom from "../../components/post/PostListCom";
import { postThunk } from "../../service/post/postThunk";

function PostListCon(){
  const dispatch = useDispatch();
  const postData = useSelector( state => state.postData );

  useEffect(() => {
    dispatch(postThunk());
  }, [dispatch]);

  return <PostListCom posts={postData.data} />
}
export default PostListCon;