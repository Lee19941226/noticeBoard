import { useNavigate } from 'react-router-dom';
import PostForm from '../components/board/PostForm.jsx';
import { createPost } from '../api/postApi.js';

export default function PostWritePage() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const created = await createPost(data);
    navigate(`/board/${created.id}`);
  };

  return (
    <div>
      <h1>글쓰기</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}
