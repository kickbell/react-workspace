import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostDetailCom from "../../components/post/PostDetailCom";
import { postOneThunk } from "../../service/post/postThunk";

function PostDetailCon() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { dataOne, loading, error } = useSelector((state) => state.postData);

  useEffect(() => {
    if (id) {
      dispatch(postOneThunk({ id }));
    }
  }, [dispatch, id]);

  return <PostDetailCom post={dataOne} loading={loading} error={error} />;
}

export default PostDetailCon;
