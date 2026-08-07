import PostItem from './PostItem.jsx';

export default function PostList({ posts }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </tbody>
    </table>
  );
}
