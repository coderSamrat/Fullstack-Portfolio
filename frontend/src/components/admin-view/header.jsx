import React, { Fragment } from 'react';
import { Button } from '../ui/button';
import * as Icons from 'lucide-react';
import { ThemeToggle } from '../common/theme-toggle';
import { Link } from 'react-router-dom';

const AdminHeader = ({ onMenuClick, isMobile, pageTitle }) => (
      <header className="backdrop-blur-sm" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className='container mx-auto flex items-center justify-between h-20 px-4 md:px-6'>
                  {
                        isMobile ? (
                              <Fragment>
                                    <Link to={'/'} className='flex items-end select-none'>
                                          <span className='text-5xl font-bold text-green-600'>S</span>
                                          <span className='font-bold text-3xl'>amrat.</span>
                                    </Link>
                                    <div className="flex items-center justify-between gap-2">
                                          <ThemeToggle />
                                          <Button
                                                variant="outline"
                                                size="icon"
                                                className="bg-background/80 backdrop-blur-sm"
                                                onClick={onMenuClick}
                                          >
                                                <Icons.Menu className="h-6 w-6" />
                                          </Button>
                                    </div>
                              </Fragment>
                        ) : (
                              <Fragment>
                                    <div className='w-full flex items-center justify-between'>
                                          <h1>Admin Panel - {pageTitle}</h1>
                                          <ThemeToggle />
                                    </div>
                              </Fragment>
                        )
                  }
            </div>
      </header>
);
export default AdminHeader;
