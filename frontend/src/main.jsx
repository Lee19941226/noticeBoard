import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import LoginPage from './pages/LoginPage.jsx';
import BoardListPage from './pages/BoardListPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';
import PostWritePage from './pages/PostWritePage.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Navigate to="/board" replace />} />
            <Route path="login" element={<LoginPage />} />
            <Route
              path="board"
              element={
                <ProtectedRoute>
                  <BoardListPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="board/write"
              element={
                <ProtectedRoute>
                  <PostWritePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="board/:postId"
              element={
                <ProtectedRoute>
                  <PostDetailPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
