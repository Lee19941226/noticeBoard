import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostList from '../components/board/PostList.jsx';
import Pagination from '../components/board/Pagination.jsx';
import { fetchPosts } from '../api/postApi.js';

export default function BoardListPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPosts({ page }).then((res) => {
      setPosts(res.content ?? []);
      setTotalPages(res.totalPages ?? 1);
    });
  }, [page]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>자유 게시판</h1>
        <Link to="/board/write">글쓰기</Link>
      </div>
      <PostList posts={posts} />
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
