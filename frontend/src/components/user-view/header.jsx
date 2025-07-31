import React, { useEffect, useState } from 'react';
import { useMobile } from '../common/useMobileHook';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { navigationMenu } from '@/config/menu';
import ContactMeBtn from './contact-btn';



const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [showMenu, setShowMenu] = useState(false);
      const [isClosing, setIsClosing] = useState(false);
      const isMobile = useMobile();
      const navigate = useNavigate();

      const ANIMATION_DURATION = 600;

      const handleNavigateToContact = () => {
            navigate('/portfolio/contact');
            if (isMobile && isMenuOpen) {
                  toggleMenu();
            }
      };

      const toggleMenu = () => {
            if (isMenuOpen) {
                  setIsClosing(true);
                  setTimeout(() => {
                        setShowMenu(false);
                        setIsClosing(false);
                  }, ANIMATION_DURATION);
                  setIsMenuOpen(false);
            } else {
                  setShowMenu(true);
                  setIsMenuOpen(true);
            }
      };

      useEffect(() => {
            if (isMenuOpen) {
                  setShowMenu(true);
                  setIsClosing(false);
            }
      }, [isMenuOpen]);

      useEffect(() => {
            if (!isMenuOpen || !isMobile) return;
            const handleScroll = () => {
                  if (isMobile && isMenuOpen) toggleMenu();
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, [isMenuOpen, isMobile]);

      return (
            <header className='w-full border-b bg-background/60 backdrop-blur-sm fixed left-0 right-0 top-0 z-50'>
                  <div className='container mx-auto flex items-center justify-between h-20 px-4 md:px-6'>
                        <Link to={'/'} className='flex items-end select-none'>
                              <span className='text-5xl font-bold text-green-600'>S</span>
                              <span className='font-bold text-3xl'>amrat</span>
                        </Link>
                        {
                              isMobile && (
                                    <div className="flex items-center justify-between md:hidden">
                                          <div className="flex items-center justify-between gap-2">
                                                <ThemeToggle />
                                                <button
                                                      className="text-muted-foreground hover:text-primary focus:outline-none"
                                                      onClick={toggleMenu}
                                                      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                                                >
                                                      {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                                </button>
                                          </div>
                                    </div>
                              )
                        }
                        {
                              !isMobile && (
                                    <div className='hidden md:flex flex-1 items-center'>
                                          <div className='flex-1 flex justify-center items-center md:gap-8 gap-6'>
                                                {
                                                      navigationMenu.map((menu) => (
                                                            <NavLink
                                                                  key={menu.name}
                                                                  to={menu.path}
                                                                  className={({ isActive }) => (
                                                                        `${isActive ? "text-primary font-bold underline underline-offset-8" : "hover:text-primary hover:underline hover:underline-offset-8"} capitalize transition-colors cursor-pointer `
                                                                  )}
                                                            >
                                                                  {menu.label}
                                                            </NavLink>
                                                      ))
                                                }
                                          </div>
                                          <div className='flex items-center gap-8'>
                                                <ContactMeBtn handleNavigateToContact={handleNavigateToContact} />
                                                <ThemeToggle />
                                          </div>
                                    </div>
                              )
                        }
                        {
                              isMobile && showMenu && (
                                    <div className={`absolute left-0 top-full w-full bg-background/95 shadow-lg border-b 
                                          ${isMenuOpen && !isClosing ? 'animate-slide-up' : ''}
                                          ${!isMenuOpen && isClosing ? 'animate-slide-down' : ''}
                                          z-50`}
                                    >
                                          <div className='flex flex-col items-center py-4 space-y-4'>
                                                {
                                                      navigationMenu.map((menu) => (
                                                            <NavLink
                                                                  key={menu.name}
                                                                  to={menu.path}
                                                                  onClick={toggleMenu}
                                                                  className={({ isActive }) => (
                                                                        `${isActive ? "text-primary font-bold underline underline-offset-8" : "hover:text-primary hover:underline hover:underline-offset-8"} capitalize transition-colors cursor-pointer`
                                                                  )}
                                                            >
                                                                  {menu.label}
                                                            </NavLink>
                                                      ))
                                                }
                                          </div>
                                          <div className='flex items-center justify-center my-4'>
                                                <ContactMeBtn handleNavigateToContact={handleNavigateToContact} />
                                          </div>
                                    </div>
                              )
                        }
                  </div>
            </header>
      );
};


export default Header;