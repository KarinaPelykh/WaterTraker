import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { Welcome } from './pages/welcome/Welcome';
import { RootLayout } from './components/RootLayout';
import { Signup } from './pages/signup/Signup';
import { Signin } from './pages/signin/Signin';
import { ProtectedRout } from './providers/ProtectedRoute';
import { HydrationDashboard } from './pages/account/ui/HydrationDashboard';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Welcome /> },
      { path: 'signup', element: <Signup /> },
      { path: 'signin', element: <Signin /> },
      {
        path: 'main',
        element: (
          <ProtectedRout>
            <HydrationDashboard />
          </ProtectedRout>
        ),
      },
    ],
  },
]);

export default routers;
