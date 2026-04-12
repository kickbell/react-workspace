function PostListCom({ posts }) {
  if (!posts || posts.length === 0) {
    return <div style={{ padding: "20px", textAlign: "center" }}>저장된 게시물이 없습니다.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>게시물 목록</h2>
      <div style={{ display: "grid", gap: "20px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{post.title}</h3>
            <p style={{ color: "#666", marginBottom: "10px" }}>{post.content}</p>
            <small style={{ color: "#999" }}>작성자: {post.username}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostListCom;
