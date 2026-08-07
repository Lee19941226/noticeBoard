import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

export default function Layout() {
  return (
    <div>
      <Header />
      <main style={{ padding: '16px' }}>
        <Outlet />
      </main>
    </div>
  );
}
