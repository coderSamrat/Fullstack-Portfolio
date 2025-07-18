import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { toast } from 'sonner';

function App() {
      useEffect(() => {
            const handleContextMenu = (e) => {
                  e.preventDefault();
                  toast.error('Right-click is disabled!', {
                        action: {
                              label: 'OK',
                              onClick: () => console.log('Right-click disabled notification dismissed')
                        }
                  });
            };

            const handleCopy = (e) => {
                  e.preventDefault();
                  toast.error('Copying is disabled!', {
                        action: {
                              label: 'OK',
                              onClick: () => console.log('Copy disabled notification dismissed')
                        }
                  });
            };

            document.addEventListener('contextmenu', handleContextMenu);
            document.addEventListener('copy', handleCopy);

            return () => {
                  document.removeEventListener('contextmenu', handleContextMenu);
                  document.removeEventListener('copy', handleCopy);
            };
      }, []);

      return (
            <div
                  className="select-none flex flex-col overflow-hidden bg-white min-h-screen"
            >
                  <Routes>
                        
                  </Routes>
            </div>
      );
}

export default App;
