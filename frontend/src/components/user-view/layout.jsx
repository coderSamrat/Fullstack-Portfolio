import React from 'react';
import { Outlet } from 'react-router-dom';
import MyPortfolioHeader from './header';
import Footer from './footer';

const MyPortfoliopageLayout = () => {
      return (
            <div className='flex flex-col overflow-hidden bg-background'>
                  <MyPortfolioHeader />
                  <main className='flex flex-col w-full'>
                        <Outlet />
                  </main>
                  <Footer />
            </div>
      );
}

export default MyPortfoliopageLayout;
