import React from 'react';
import { Link } from 'react-router-dom';

const UserFooter = () => {
      return (
            <footer className='md:max-w-[90vw] max-w-screen container mx-auto py-8'>
                  <div className='w-full h-[2px] bg-base-secondary my-10'></div>
                  <div className="w-full h-auto flex items-center justify-center flex-col gap-2 text-center">
                        <p className="text-base-secondary text-sm">Build by ❤️ <Link to='https://github.com/coderSamrat' onClick={() => window.scrollTo(0, 0)} className='text-accent font-bold text-md italic'>Samrat Mallick ❤️</Link></p>
                        <p className="text-secondary text-sm">&copy; {new Date().getFullYear()} Samrat Mallick | Full Stack Web Developer. All rights reserved.</p>
                  </div>
            </footer>
      );
}

export default UserFooter;
