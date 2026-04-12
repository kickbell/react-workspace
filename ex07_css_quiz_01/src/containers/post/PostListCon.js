import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PostListCom from "../../components/post/PostListCom";
import { postLikedThunk, postThunk } from "../../service/post/postThunk";

function PostListCon(){
  const dispatch = useDispatch();
  const postData = useSelector( state => state.postData );

  useEffect(() => {
    dispatch(postThunk());
  }, [dispatch]);

  useEffect(() => {
    if (!postData.data) return;
    console.log("[PostListCon] posts payload:", postData.data);
  }, [postData.data]);

  const onToggleLike = async (post) => {
    try {
      await dispatch(postLikedThunk({ postId: post.id ?? post.postId, liked: !!post.liked })).unwrap();
    } catch (err) {
      console.error("[postLike] failed:", err);
    }
  };

  return <PostListCom posts={postData.data} onToggleLike={onToggleLike} />
}
export default PostListCon;