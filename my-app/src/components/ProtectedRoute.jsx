import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // Still checking auth — don't redirect yet
  if (loading) {
    return <p>Loading...</p>;
  }

  // No user found — send to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User is logged in — render the actual page
  return children;
}

export default ProtectedRoute;