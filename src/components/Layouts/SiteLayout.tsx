import { Outlet } from 'react-router';

import Header from '../Header/Header';

function SiteLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SiteLayout;
