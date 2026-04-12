import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostRegisterCom from "../../components/post/PostRegisterCom";
import { changeInput as changePostInput, initInput as initPostInput } from "../../redux/post/postInputSlice";
import { postRegisterThunk } from "../../service/post/postThunk";

function PostRegisterCon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, content } = useSelector((state) => state.postInput.register);
  const { username } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.postData);

  useEffect(() => {
    dispatch(initPostInput());
  }, [dispatch]);

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changePostInput({ form: "register", name, value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Backend register API expects member PK number (not username string).
    const number = 1;

    try {
      await dispatch(postRegisterThunk({ number, title, content })).unwrap();
      navigate("/post/list");
    } catch (err) {
      // The slice stores error message, so this catch only prevents uncaught promise noise.
      console.error("[postRegister] failed:", err);
    }
  };

  return (
    <PostRegisterCom
      title={title}
      content={content}
      loading={loading}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default PostRegisterCon;
