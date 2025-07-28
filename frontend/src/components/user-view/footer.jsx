import React from 'react';

const Footer = ({ scrollToSection }) => {
      return (
            <footer className="bg-primary/5 py-12">
                  <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                              <p className="text-muted-foreground mb-4 md:mb-0">
                                    © {new Date().getFullYear()} Samrat Mallick. All rights reserved.
                              </p>
                              <div className="flex flex-wrap space-x-6">
                                    {["About", "Skills", "Projects", "Contact"].map((link) => (
                                          <button
                                                key={link}
                                                onClick={() => scrollToSection(link.toLowerCase())}
                                                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                          >
                                                {link}
                                          </button>
                                    ))}
                              </div>
                        </div>
                  </div>
            </footer>

      );
}

export default Footer;
