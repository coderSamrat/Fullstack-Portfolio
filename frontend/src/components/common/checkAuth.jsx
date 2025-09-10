import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthCheck = ({ user, isAuthenticated, children }) => {
      const location = useLocation();

      if (!isAuthenticated && location.pathname.includes('/admin')) {
            return <Navigate to="/auth/login" replace />;
      }

      if (user.role === 'admin' && location.pathname.includes('/portfolio')) {
            return <Navigate to="/admin/dashboard" replace />;
      }

      if (user.role !== 'admin' && location.pathname.includes('/admin')) {
            return <Navigate to="/portfolio/home" replace />;
      }

      return <>{children}</>;
};

export default AuthCheck;