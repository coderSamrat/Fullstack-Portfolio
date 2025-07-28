import React, { useEffect, useState } from 'react';
import { useMobile } from '../common/useMobileHook';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toogle';


const Header = ({ scrollToSection }) => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [activeSection, setActiveSection] = useState('');
      const isMobile = useMobile();

      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

      const handleScroll = (section) => {
            setActiveSection(section);
            scrollToSection(section);
            if (isMobile && isMenuOpen) setIsMenuOpen(false);
      };

      useEffect(() => {
            const sectionIds = ["about", "skills", "projects", "education", "contact"];

            const handleScrollEvent = () => {
                  const scrollPosition = window.scrollY + window.innerHeight / 8;

                  for (const id of sectionIds) {
                        const section = document.getElementById(id);
                        if (section) {
                              const { offsetTop, offsetHeight } = section;
                              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                                    setActiveSection(id);
                                    break;
                              }
                        }
                  }
            };

            window.addEventListener("scroll", handleScrollEvent);
            handleScrollEvent(); 
            return () => window.removeEventListener("scroll", handleScrollEvent);
      }, []);

      return (
            <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
                  <div className="container mx-auto px-4 py-4">
                        {isMobile && (
                              <div className="flex w-full items-center justify-between md:hidden">
                                    <span className="font-bold text-lg">Portfolio</span>
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
                        )}
                        {!isMobile && (
                              <div className="flex justify-center space-x-8">
                                    {["about", "skills", "projects", "education", "contact"].map((section) => (
                                          <button
                                                key={section}
                                                onClick={() => handleScroll(section)}
                                                className={`capitalize transition-colors ${activeSection === section ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                                          >
                                                {section === "education" ? "Training" : section}
                                          </button>
                                    ))}
                                    <ThemeToggle />
                              </div>
                        )}

                        {isMobile && isMenuOpen && (
                              <div className="absolute left-0 top-full w-full bg-background/95 shadow-lg border-b animate-slide-up z-50">
                                    <div className="flex flex-col items-center py-4 space-y-4">
                                          {["about", "skills", "projects", "education", "contact"].map((section) => (
                                                <button
                                                      key={section}
                                                      onClick={() => handleScroll(section)}
                                                      className={`w-full text-center py-2 capitalize transition-colors ${activeSection === section ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                                                >
                                                      {section === "education" ? "Training" : section}
                                                </button>
                                          ))}
                                    </div>
                              </div>
                        )}
                  </div>
            </nav>
      );
};


export default Header;