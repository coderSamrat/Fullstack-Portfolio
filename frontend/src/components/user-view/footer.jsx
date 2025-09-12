import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, ArrowUp } from 'lucide-react';
import { footerNavigationMenu } from '@/config/menu';
import { contact } from '@/config/contactDetails';
import logo from '@/assets/logo.png';

const socialLinks = [
      { name: 'GitHub', icon: Github, url: '#' },
      { name: 'LinkedIn', icon: Linkedin, url: '#' },
      { name: 'Twitter', icon: Twitter, url: '#' },
      { name: 'Instagram', icon: Instagram, url: '#' },
];

const Footer = () => {
      const navigate = useNavigate();
      const [isVisible, setIsVisible] = useState(false);

      const email = contact.find(c => c.label === 'Email');
      const mobile = contact.find(c => c.label === 'Mobile');

      const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                  setIsVisible(true);
            } else {
                  setIsVisible(false);
            }
      };

      const scrollToTop = () => {
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            });
      };

      useEffect(() => {
            window.addEventListener('scroll', toggleVisibility);
            return () => window.removeEventListener('scroll', toggleVisibility);
      }, []);

      return (
            <>
                  <footer className="bg-background border-t border-gray-700">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="space-y-4">
                                          <Link to="/" className="flex items-center space-x-3">
                                                <img src={logo} alt="Logo" className="h-10 w-auto bg-muted-foreground/50 dark:bg-white rounded-full p-1" />
                                                <span className="font-bold text-xl">Samrat Mallick</span>
                                          </Link>
                                          <p className="text-gray-400">
                                                Passionate full-stack developer creating modern and responsive web applications.
                                          </p>
                                    </div>
                                    <div>
                                          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                          <ul className="space-y-2">
                                                {footerNavigationMenu.map((link) => (
                                                      <li key={link.name}>
                                                            <button
                                                                  onClick={() => {
                                                                        navigate(link.path);
                                                                        scrollToTop();
                                                                  }}
                                                                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
                                                            >
                                                                  {link.label}
                                                            </button>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>
                                    <div>
                                          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                                          <ul className="space-y-3 text-gray-400">
                                                {email && (
                                                      <li className="flex items-center space-x-3">
                                                            <Mail className="w-5 h-5 text-primary" />
                                                            <a href={email.link}>{email.value}</a>
                                                      </li>
                                                )}
                                                {mobile && (
                                                      <li className="flex items-center space-x-3">
                                                            <Phone className="w-5 h-5 text-primary" />
                                                            <a href={mobile.link}>{mobile.value}</a>
                                                      </li>
                                                )}
                                          </ul>
                                    </div>
                              </div>
                              <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
                                    <p className="text-sm text-gray-500">
                                          © {new Date().getFullYear()} Samrat Mallick. All Rights Reserved.
                                    </p>
                                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                                          {socialLinks.map((social) => (
                                                <a
                                                      key={social.name}
                                                      href={social.url}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="text-gray-500 hover:text-white transition-colors duration-300"
                                                >
                                                      <span className="sr-only">{social.name}</span>
                                                      <social.icon className="h-6 w-6" />
                                                </a>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </footer>
                  {isVisible && (
                        <button
                              onClick={scrollToTop}
                              className="fixed bottom-28 right-5 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-opacity duration-300"
                        >
                              <ArrowUp className="h-6 w-6" />
                        </button>
                  )}
            </>
      );
};

export default Footer;
