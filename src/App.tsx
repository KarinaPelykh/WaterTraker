import './index.css';
import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from './components/RootLayout';
import { HydrationDashboard } from './pages/dashboard/ui/HydrationDashboard';
import { Signin } from './pages/signin/Signin';
import { Signup } from './pages/signup/Signup';
import { Welcome } from './pages/welcome/Welcome';
import { ProtectedRout } from './providers/ProtectedRoute';

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
