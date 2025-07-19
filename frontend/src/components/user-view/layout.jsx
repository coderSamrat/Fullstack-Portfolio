import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from './header';
import UserFooter from './footer';

const UserPagelayout = () => {
      return (
            <div className='flex flex-col overflow-hidden gap-2 w-full'>
                  <UserHeader />
                  <main className='flex flex-col w-full mt-20'>
                        <Outlet />
                  </main>
                  <UserFooter />
            </div>
      );
}

export default UserPagelayout;
