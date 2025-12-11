import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { Main } from './pages/Main';
import { RootLayout } from './components/RootLayout';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: 'signup', element: <Signup /> },
      { path: 'signin', element: <Signin /> },
    ],
  },
]);

export default routers;
