import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header style={{ display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid #ddd' }}>
      <Link to="/board">NoticeBoard</Link>
      <div style={{ marginLeft: 'auto' }}>
        {user ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    </header>
  );
}
