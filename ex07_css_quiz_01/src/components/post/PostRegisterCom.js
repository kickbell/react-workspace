import { Link } from "react-router-dom";
import { postButtonPrimaryStyle, postButtonSecondaryStyle } from "./postStyles";

function PostRegisterCom({ title, content, loading, error, onChange, onSubmit }) {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "16px" }}>게시글 등록</h2>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: "12px" }}>
        <div>
          <label htmlFor="title" style={{ display: "block", marginBottom: "6px" }}>제목</label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={onChange}
            required
            style={{ width: "100%", padding: "10px", border: "1px solid #d9dde3", borderRadius: "6px" }}
          />
        </div>

        <div>
          <label htmlFor="content" style={{ display: "block", marginBottom: "6px" }}>내용</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={onChange}
            required
            rows={10}
            style={{ width: "100%", padding: "10px", border: "1px solid #d9dde3", borderRadius: "6px", resize: "vertical" }}
          />
        </div>

        {error ? <div style={{ color: "crimson" }}>{error}</div> : null}

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <Link to="/post/list" style={postButtonSecondaryStyle}>취소</Link>
          <button
            type="submit"
            disabled={loading}
            style={{
              ...postButtonPrimaryStyle,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.8 : 1,
            }}
          >
            {loading ? "등록 중..." : "등록"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostRegisterCom;
