import React from 'react';
import { adminSidebarMenu } from '@/config/menu';
import { NavLink as RouterNavLink } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Button } from '../ui/button';

const AdminSidebar = ({ onLinkClick }) => {
      return (
            <aside className="h-full flex flex-col overflow-y-auto relative" style={{ backgroundColor: 'var(--sidebar)', borderRight: '1px solid var(--sidebar-border)' }}>
                  <div className="flex items-center justify-between h-20 py-8 px-2 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ borderBottom: '1px solid var(--sidebar-border)' }}>
                        <div className='flex items-center flex-col justify-center'>
                              <div className='flex items-end px-4 select-none'>
                                    <span className='text-5xl font-bold text-green-600'>S</span>
                                    <span className='font-bold text-3xl'>amrat.</span>
                              </div>
                              <span className='text-xs'>Admin Panel</span>
                        </div>
                        <div className='absolute top-0 right-0 p-4 md:hidden'>
                              <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={onLinkClick}
                                    className="bg-background/80 backdrop-blur-sm"
                              >
                                    <Icons.X className="h-6 w-6" />
                              </Button>
                        </div>
                  </div>
                  <nav className="flex-1 p-4 space-y-2 mt-20">
                        {adminSidebarMenu.map(item => {
                              const Icon = Icons[item.icon];
                              return (
                                    <RouterNavLink
                                          key={item.name}
                                          to={item.path}
                                          onClick={onLinkClick}
                                          className={({ isActive }) =>
                                                `flex items-center px-3 py-2 rounded-lg transition-colors text-sm font-medium ${isActive
                                                      ? 'bg-[var(--sidebar-active)] text-[var(--sidebar-active-foreground)]'
                                                      : 'text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-hover)] hover:text-[var(--sidebar-hover-foreground)]'
                                                }`
                                          }
                                    >
                                          {Icon && <Icon className="h-5 w-5" />}
                                          <span className="ml-3">{item.label}</span>
                                    </RouterNavLink>
                              );
                        })}
                  </nav>
                  <div className="p-4 mt-auto" style={{ borderTop: '1px solid var(--sidebar-border)' }}>
                        <Button variant="ghost" className="w-full justify-start text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-hover)] hover:text-[var(--sidebar-hover-foreground)]">
                              <Icons.LogOut className="mr-3 h-5 w-5" /> Logout
                        </Button>
                  </div>
                  <footer className="p-4 text-center text-xs text-muted-foreground">
                              © {new Date().getFullYear()} Samrat Mallick. All Rights Reserved.
                  </footer>
            </aside>
      );
}

export default AdminSidebar;
