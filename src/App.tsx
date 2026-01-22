import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { Main } from './pages/Main';
import { RootLayout } from './components/RootLayout';
import { Signup } from './pages/signup/Signup';
import { Signin } from './pages/signin/Signin';
import { HydrationDashboard } from './pages/account/ui/HydrationDashboard';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: 'signup', element: <Signup /> },
      { path: 'signin', element: <Signin /> },
      { path: 'main', element: <HydrationDashboard /> },
    ],
  },
]);

export default routers;
