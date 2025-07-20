import { navigationMenu } from '@/config/menu';
import { faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Label } from '@radix-ui/react-label';
import React, { useState } from 'react';
import { useMobile } from '../common/useMobileHook';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const UserHeader = () => {
      const navigate = useNavigate();
      const location = useLocation();
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const isMobile = useMobile();

      const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
      };

      const handleNavigation = (path) => {
            if (isMobile && isMenuOpen) {
                  toggleMenu();
            }
            navigate(path);
            window.scrollTo(0, 0);
      };

      return (
            <header className='w-full border-b-2 border-b-base-secondary bg-base-primary fixed left-0 right-0 top-0 z-50'>
                  <div className='flex items-center justify-between flex-wrap h-20 px-4 md:px-6'>
                        <Link
                              to={'/home'}
                              className='flex items-center gap-2 select-none'
                              aria-label="Go to home page"
                        >
                              <span className='text-4xl font-bold text-base-secondary flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faJediOrder} /> Samrat
                              </span>
                        </Link>
                        {!isMobile ? (
                              <nav className='flex items-center gap-10'>
                                    {navigationMenu.map((menu) => (
                                          <Label
                                                key={menu.name}
                                                onClick={() => handleNavigation(menu.path)}
                                                className={`
                                                            cursor-pointer text-base-secondary hover:text-base-tertiary transition-colors duration-300 ease-in-out text-lg font-bold lg:px-10 ${location.pathname === menu.path ? 'text-base-tertiary underline underline-offset-4' : ''}`
                                                }
                                                aria-current={location.pathname === menu.path ? 'page' : undefined}
                                          >
                                                {menu.label}
                                          </Label>
                                    ))}
                              </nav>
                        ) : (
                              <>
                                    <button
                                          onClick={toggleMenu}
                                          className='text-base-secondary hover:text-base-tertiary transition-colors duration-300 ease-in-out font-bold cursor-pointer'
                                          aria-label="Open navigation menu"
                                    >
                                          <Menu className='w-8 h-8' />
                                    </button>
                                    {isMenuOpen && (
                                          <div className='fixed inset-0 bg-base-primary/90 z-50 flex flex-col items-center justify-center'>
                                                <nav className='flex flex-col items-center justify-center gap-5'>
                                                      {navigationMenu.map((menu) => (
                                                            <Label
                                                                  key={menu.name}
                                                                  onClick={() => handleNavigation(menu.path)}
                                                                  className={`
                                                                        cursor-pointer text-base-secondary hover:text-base-tertiary transition-colors duration-300 ease-in-out text-lg font-bold ${location.pathname === menu.path ? 'text-base-tertiary underline underline-offset-4' : ''}`
                                                                  }
                                                                  aria-current={location.pathname === menu.path ? 'page' : undefined}
                                                            >
                                                                  {menu.label}
                                                            </Label>
                                                      ))}
                                                </nav>
                                                <button
                                                      className='absolute top-5 right-3 text-base-secondary hover:text-base-tertiary transition-colors duration-300 ease-in-out'
                                                      onClick={toggleMenu}
                                                      aria-label="Close navigation menu"
                                                >
                                                      <X className='w-8 h-8' />
                                                </button>
                                          </div>
                                    )}
                              </>
                        )}
                  </div>
            </header>
      );
}

export default UserHeader;