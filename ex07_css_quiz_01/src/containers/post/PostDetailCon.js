import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostDetailCom from "../../components/post/PostDetailCom";
import { postDeleteThunk, postOneThunk } from "../../service/post/postThunk";

function PostDetailCon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { dataOne, loading, error } = useSelector((state) => state.postData);

  useEffect(() => {
    if (id) {
      dispatch(postOneThunk({ id }));
    }
  }, [dispatch, id]);

  const onDelete = async () => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (!ok) return;
    await dispatch(postDeleteThunk({ id })).unwrap();
    navigate("/post/list");
  };

  return <PostDetailCom post={dataOne} loading={loading} error={error} onDelete={onDelete} />;
}

export default PostDetailCon;
