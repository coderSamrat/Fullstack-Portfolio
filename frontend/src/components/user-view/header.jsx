import { faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const UserHeader = () => {
      return (
            <header className='w-full border-b-2 border-b-base-secondary bg-base-primary fixed left-0 right-0 top-0 z-50'>
                  <div className='flex items-center justify-between h-20 px-4 md:px-6'>
                        <Link to={'/home'} className='flex items-center gap-2 select-none'>
                              <span className='sr-only'>Logo</span>
                              <span className='text-4xl font-bold text-base-secondary flex items-center gap-2'>
                                    <span>
                                          <FontAwesomeIcon icon={faJediOrder} /> Samrat
                                    </span>
                              </span>
                        </Link>
                  </div>
            </header>
      );
}

export default UserHeader;
