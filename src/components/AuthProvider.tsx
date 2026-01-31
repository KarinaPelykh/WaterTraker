import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { useIsAuthenticated } from '../shared/hooks/useIsAuthenticated';
import { removeAuthToken, setAuthToken } from '../shared/lib/Api';

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContext = {
  token: string;
  setToken: (token: string) => void;
  data: { email: string };
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used withing a AuthProvide');
  }

  return authContext;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState('');

  const { data } = useIsAuthenticated(token);

  useEffect(() => {
    if (token) {
      setAuthToken(token);
    } else {
      removeAuthToken();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, data }}>
      {children}
    </AuthContext.Provider>
  );
}
