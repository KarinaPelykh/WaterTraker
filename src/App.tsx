import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { Main } from './pages/Main';
import { RootLayout } from './components/RootLayout';
import { Signup } from './pages/Signup';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
]);

export default routers;
