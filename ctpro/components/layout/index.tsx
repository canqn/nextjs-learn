import React, { Children } from 'react';
import Header from '../header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mt-6">{children}</main>
    </>
  );
}

export default Layout;
