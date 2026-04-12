import { Link } from "react-router-dom";
import { postButtonLinkStyle } from "./postStyles";
import "./PostListCom.css";

const formatDateTime = (value) => {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString();
};

function PostListCom({ posts }) {
  if (!posts || posts.length === 0) {
    return <div className="post-list-page"><div className="post-list-empty">저장된 게시물이 없습니다.</div></div>;
  }

  return (
    <div className="post-list-page">
      <div className="post-list-header">
        <h2>게시물 목록</h2>
        <Link to="/post/register" style={postButtonLinkStyle}>글 등록</Link>
      </div>
        <div className="post-list-table-wrap">
          <table className="post-list-table">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성시간</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post.id ?? post.postId ?? index}>
                  <td>{post.id ?? post.postId ?? index + 1}</td>
                  <td>
                    <Link className="post-list-title-link" to={`/post/detail/${post.id ?? post.postId}`}>
                      {post.title ?? "-"}
                    </Link>
                  </td>
                  <td>{formatDateTime(post.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default PostListCom;
