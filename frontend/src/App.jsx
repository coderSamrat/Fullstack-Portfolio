import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import UserViewContact from './pages/client-view/contact';
import UserViewHome from './pages/client-view/home';
import ProjectList from './pages/client-view/project';
import UserPagelayout from './components/user-view/layout';
import { useDisableContextMenuAndCopy } from './components/common/useDisableContextMenuAndCopy';

const App = () => {
      // useDisableContextMenuAndCopy();

      const location = useLocation();
      const navigate = useNavigate();

      useEffect(() => {
            if (location.pathname === '/') {
                  navigate('/home');
            }
      }, [location.pathname, navigate]);

      return (
            <div className="flex flex-col overflow-hidden bg-bg min-h-screen">
                  <Routes>
                        <Route path='/' element={<UserPagelayout />}>
                              <Route path='home' element={<UserViewHome />} />
                              <Route path='contact' element={<UserViewContact />} />
                              <Route path='projects' element={<ProjectList />} />
                        </Route>
                  </Routes>
            </div>
      );
};

export default App;
