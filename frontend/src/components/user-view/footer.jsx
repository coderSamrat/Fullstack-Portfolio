import { footerNavigationMenu } from '@/config/menu';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
      const navigate = useNavigate();
      const handleFooterNavigation = (link) => {
            console.log(`Navigating to ${link.path}`);
            navigate(link.path);
      };
      return (
            <footer className="bg-primary/5 py-12">
                  <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                              <p className="text-muted-foreground mb-4 md:mb-0">
                                    © {new Date().getFullYear()} Samrat Mallick. All rights reserved.
                              </p>
                              <div className="flex flex-wrap space-x-6">
                                    {footerNavigationMenu.map((link) => (
                                          <button
                                                key={link.name}
                                                onClick={() => handleFooterNavigation(link)}
                                                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                          >
                                                {link.label}
                                          </button>
                                    ))}
                              </div>
                        </div>
                  </div>
            </footer>

      );
}

export default Footer;
