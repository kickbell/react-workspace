import { Link } from "react-router-dom";

const formatDateTime = (value) => {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString();
};

function PostListCom({ posts }) {
  if (!posts || posts.length === 0) {
    return <div style={{ padding: "20px", textAlign: "center" }}>저장된 게시물이 없습니다.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2>게시물 목록</h2>
        <Link to="/post/register">게시글 추가하기</Link>
      </div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "12px",
          backgroundColor: "#fff",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f7fa" }}>
            <th style={{ border: "1px solid #d9dde3", padding: "10px" }}>번호</th>
            <th style={{ border: "1px solid #d9dde3", padding: "10px" }}>제목</th>
            <th style={{ border: "1px solid #d9dde3", padding: "10px" }}>작성자</th>
            <th style={{ border: "1px solid #d9dde3", padding: "10px" }}>userId</th>
            <th style={{ border: "1px solid #d9dde3", padding: "10px" }}>조회수</th>
            <th style={{ border: "1px solid #d9dde3", padding: "10px" }}>작성시간</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id ?? post.postId ?? index}>
              <td style={{ border: "1px solid #e2e6ec", padding: "10px", textAlign: "center", width: "90px" }}>
                {post.id ?? post.postId ?? index + 1}
              </td>
              <td style={{ border: "1px solid #e2e6ec", padding: "10px", width: "220px" }}>
                <Link to={`/post/detail/${post.id ?? post.postId}`}>
                  {post.title ?? "-"}
                </Link>
              </td>
              <td style={{ border: "1px solid #e2e6ec", padding: "10px", width: "150px", textAlign: "center" }}>
                {post.memberUserName ?? post.username ?? post.writer ?? "-"}
              </td>
              <td style={{ border: "1px solid #e2e6ec", padding: "10px", textAlign: "center", width: "90px" }}>
                {post.memberUserId ?? "-"}
              </td>
              <td style={{ border: "1px solid #e2e6ec", padding: "10px", textAlign: "center", width: "90px" }}>
                {post.postCount ?? 0}
              </td>
              <td style={{ border: "1px solid #e2e6ec", padding: "10px", width: "180px" }}>
                {formatDateTime(post.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostListCom;
