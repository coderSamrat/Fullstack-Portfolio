import React, { useState, useEffect } from 'react';
import { useMobile } from '../common/useMobileHook';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from './sidebar';
import AdminHeader from './header';
import { adminSidebarMenu } from '@/config/menu';


const AdminLayout = () => {
      const [isSidebarOpen, setSidebarOpen] = useState(false);
      const isMobile = useMobile();
      const location = useLocation();

      const currentPage = adminSidebarMenu.find(item => item.path === location.pathname) || { label: 'Admin' };

      useEffect(() => {
            if (!isMobile) {
                  setSidebarOpen(false);
            }
      }, [isMobile]);

      return (
            <div className="min-h-screen w-full">
                  <div className={`fixed inset-y-0 left-0 z-20 w-64 transform transition-transform duration-300 ${isMobile ? (isSidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'md:translate-x-0'}`.trim()}>
                        <AdminSidebar onLinkClick={() => isMobile && setSidebarOpen(false)} />
                  </div>

                  <div className="md:ml-64">
                        <AdminHeader
                              onMenuClick={() => setSidebarOpen(true)}
                              isMobile={isMobile}
                              pageTitle={currentPage.label}
                        />
                        <main className="p-4 md:p-8">
                              <Outlet />
                        </main>
                  </div>

                  {isMobile && isSidebarOpen && (
                        <div className="fixed inset-0 bg-black/60 z-10" onClick={() => setSidebarOpen(false)}></div>
                  )}
            </div>
      );
};

export default AdminLayout;