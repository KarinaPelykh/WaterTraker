import { useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './AuthProvider';

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
