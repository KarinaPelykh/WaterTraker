import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { useEffect, type ReactNode } from 'react';

type ProtectedRout = {
  children: ReactNode;
};

export const ProtectedRout = ({ children }: ProtectedRout) => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token === '') {
      navigate('/signin', { replace: true });
    }
  }, [navigate, auth]);
  return <>{children}</>;
};
