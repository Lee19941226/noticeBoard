import { useState } from 'react';

export default function PostForm({ initial = {}, onSubmit }) {
  const [title, setTitle] = useState(initial.title ?? '');
  const [content, setContent] = useState(initial.content ?? '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8 }}>
      <input
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용"
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">저장</button>
    </form>
  );
}
