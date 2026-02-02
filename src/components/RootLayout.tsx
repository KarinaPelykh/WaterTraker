import { Outlet } from 'react-router-dom';
import { Header } from '../widget/Header';

export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
