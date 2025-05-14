import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { toggleDarkMode, setLanguage } from '../store/themeSlice';

const Navigation: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isDarkMode, language } = useSelector((state: RootState) => state.theme);

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/timeline', label: '发展脉络' },
    { path: '/themes', label: '主题对比' },
    { path: '/works', label: '代表作品' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              科幻文化对比
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary'
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
            <button
              onClick={() => dispatch(setLanguage(language === 'zh' ? 'en' : 'zh'))}
              className="px-3 py-1 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-200"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 