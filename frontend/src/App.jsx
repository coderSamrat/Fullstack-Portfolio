import React, { useEffect } from 'react';
import { useDisableContextMenuAndCopy } from './components/common/useDisableContextMenuAndCopy';
import MyPortfolio from './pages/client-view/portfolio';
import { Route, Routes, Navigate } from 'react-router-dom';
import MyPortfoliopageLayout from './components/user-view/layout';
import MyAllProjectList from './pages/client-view/project-listing';
import MyContact from './pages/client-view/contact';

const App = () => {
      // useDisableContextMenuAndCopy();

      return (
            <div className="flex flex-col overflow-hidden bg-background min-h-screen">
                  <Routes>
                        <Route path="/" element={<Navigate to="/portfolio/home" replace />} />
                        <Route path='/portfolio' element={<MyPortfoliopageLayout />} >
                              <Route path='home' element={<MyPortfolio />} />
                              <Route path='projects' element={<MyAllProjectList />} />
                              <Route path='contact' element={<MyContact />} />
                        </Route>
                  </Routes>
            </div>
      );
};

export default App;
