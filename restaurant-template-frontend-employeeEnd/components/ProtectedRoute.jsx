import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/" />;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (!allowedRoles.includes(payload.level)) {
      return <Navigate to="/" />;
    }
    return <Outlet />;
  } catch {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;