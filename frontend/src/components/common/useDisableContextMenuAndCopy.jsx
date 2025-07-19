import { useEffect } from 'react';
import { toast } from 'sonner';

export function useDisableContextMenuAndCopy() {
      useEffect(() => {
            const handleContextMenu = (e) => {
                  e.preventDefault();
                  toast.error('Right-click is disabled!', {
                        action: {
                              label: 'OK',
                              onClick: () => console.log('Right-click disabled notification dismissed'),
                        },
                  });
            };

            const handleCopy = (e) => {
                  e.preventDefault();
                  toast.error('Copying is disabled!', {
                        action: {
                              label: 'OK',
                              onClick: () => console.log('Copy disabled notification dismissed'),
                        },
                  });
            };

            document.addEventListener('contextmenu', handleContextMenu);
            document.addEventListener('copy', handleCopy);

            return () => {
                  document.removeEventListener('contextmenu', handleContextMenu);
                  document.removeEventListener('copy', handleCopy);
            };
      }, []);
}
