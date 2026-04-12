import { Link } from "react-router-dom";
import { postButtonDangerStyle, postButtonPrimaryStyle, postButtonSecondaryStyle } from "./postStyles";

const formatDateTime = (value) => {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString();
};

function PostDetailCom({ post, loading, error, onDelete }) {
  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center" }}>불러오는 중...</div>;
  }

  if (error) {
    return <div style={{ padding: "20px", textAlign: "center", color: "crimson" }}>{error}</div>;
  }

  if (!post) {
    return <div style={{ padding: "20px", textAlign: "center" }}>게시글 정보가 없습니다.</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "16px" }}>게시글 상세</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff" }}>
        <tbody>
          <tr>
            <th style={{ width: "120px", border: "1px solid #d9dde3", padding: "10px", backgroundColor: "#f5f7fa" }}>번호</th>
            <td style={{ border: "1px solid #e2e6ec", padding: "10px" }}>{post.id ?? post.postId ?? "-"}</td>
          </tr>
          <tr>
            <th style={{ border: "1px solid #d9dde3", padding: "10px", backgroundColor: "#f5f7fa" }}>제목</th>
            <td style={{ border: "1px solid #e2e6ec", padding: "10px" }}>{post.title ?? "-"}</td>
          </tr>
          <tr>
            <th style={{ border: "1px solid #d9dde3", padding: "10px", backgroundColor: "#f5f7fa" }}>작성자</th>
            <td style={{ border: "1px solid #e2e6ec", padding: "10px" }}>
              {post.memberUserName ?? post.username ?? post.writer ?? "-"}
            </td>
          </tr>
          <tr>
            <th style={{ border: "1px solid #d9dde3", padding: "10px", backgroundColor: "#f5f7fa" }}>userId</th>
            <td style={{ border: "1px solid #e2e6ec", padding: "10px" }}>{post.memberUserId ?? "-"}</td>
          </tr>
          <tr>
            <th style={{ border: "1px solid #d9dde3", padding: "10px", backgroundColor: "#f5f7fa" }}>조회수</th>
            <td style={{ border: "1px solid #e2e6ec", padding: "10px" }}>{post.postCount ?? 0}</td>
          </tr>
          <tr>
            <th style={{ border: "1px solid #d9dde3", padding: "10px", backgroundColor: "#f5f7fa" }}>작성시간</th>
            <td style={{ border: "1px solid #e2e6ec", padding: "10px" }}>{formatDateTime(post.createdAt)}</td>
          </tr>
          <tr>
            <th style={{ border: "1px solid #d9dde3", padding: "10px", backgroundColor: "#f5f7fa" }}>수정시간</th>
            <td style={{ border: "1px solid #e2e6ec", padding: "10px" }}>{formatDateTime(post.updatedAt)}</td>
          </tr>
          <tr>
            <th style={{ border: "1px solid #d9dde3", padding: "10px", backgroundColor: "#f5f7fa" }}>내용</th>
            <td style={{ border: "1px solid #e2e6ec", padding: "10px", minHeight: "220px", whiteSpace: "pre-wrap" }}>
              {post.content ?? "-"}
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: "16px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <Link to={`/post/modify/${post.id ?? post.postId}`} style={postButtonPrimaryStyle}>수정</Link>
        <button
          type="button"
          onClick={onDelete}
          style={postButtonDangerStyle}
        >
          삭제
        </button>
        <Link to="/post/list" style={postButtonSecondaryStyle}>목록</Link>
      </div>
    </div>
  );
}

export default PostDetailCom;
