import { Link } from 'react-router-dom';

export default function PostItem({ post }) {
  return (
    <tr>
      <td>{post.id}</td>
      <td>
        <Link to={`/board/${post.id}`}>{post.title}</Link>
      </td>
      <td>{post.author}</td>
      <td>{post.createdAt}</td>
    </tr>
  );
}
