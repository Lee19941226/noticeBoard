import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPost, deletePost } from '../api/postApi.js';

export default function PostDetailPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(postId).then(setPost);
  }, [postId]);

  const handleDelete = async () => {
    await deletePost(postId);
    navigate('/board');
  };

  if (!post) return <div>로딩 중...</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <div>
        <span>{post.author}</span> · <span>{post.createdAt}</span>
      </div>
      <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>
      <button onClick={handleDelete}>삭제</button>
    </article>
  );
}
