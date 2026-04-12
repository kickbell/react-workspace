import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostModifyCom from "../../components/post/PostModifyCom";
import { postModifyThunk, postOneThunk } from "../../service/post/postThunk";

function PostModifyCon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const { dataOne, loading, error } = useSelector((state) => state.postData);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (postId) {
      dispatch(postOneThunk({ id: postId }));
    }
  }, [dispatch, postId]);

  useEffect(() => {
    if (dataOne) {
      setTitle(dataOne.title ?? "");
      setContent(dataOne.content ?? "");
    }
  }, [dataOne]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "content") setContent(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postModifyThunk({ id: postId, title, content })).unwrap();
      navigate(`/post/detail/${postId}`);
    } catch (err) {
      console.error("[postModify] failed:", err);
    }
  };

  return (
    <PostModifyCom
      title={title}
      content={content}
      loading={loading}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
      postId={postId}
    />
  );
}

export default PostModifyCon;
