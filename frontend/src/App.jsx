import React from 'react';
import { useDisableContextMenuAndCopy } from './components/common/useDisableContextMenuAndCopy';
import MyPortfolio from './pages/client-view/portfolio';

const App = () => {
      // useDisableContextMenuAndCopy();


      return (
            <div className="flex flex-col overflow-hidden bg-bg min-h-screen">
                  <MyPortfolio />
            </div>
      );
};

export default App;
