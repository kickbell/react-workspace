function PostListCom({ posts }) {
  if (!posts || posts.length === 0) {
    return <div style={{ padding: "20px", textAlign: "center" }}>저장된 게시물이 없습니다.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>게시물 목록</h2>
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
            <th style={{ border: "1px solid #d9dde3", padding: "10px" }}>내용</th>
            <th style={{ border: "1px solid #d9dde3", padding: "10px" }}>작성자</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id ?? post.postId ?? index}>
              <td style={{ border: "1px solid #e2e6ec", padding: "10px", textAlign: "center", width: "90px" }}>
                {post.id ?? post.postId ?? index + 1}
              </td>
              <td style={{ border: "1px solid #e2e6ec", padding: "10px", width: "220px" }}>
                {post.title ?? "-"}
              </td>
              <td style={{ border: "1px solid #e2e6ec", padding: "10px" }}>
                {post.content ?? "-"}
              </td>
              <td style={{ border: "1px solid #e2e6ec", padding: "10px", width: "150px", textAlign: "center" }}>
                {post.username ?? post.writer ?? "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostListCom;
