import React from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Layout({ children, isDark, toggleTheme }: LayoutProps) {
  const location = useLocation();
  
  return (
    <div className={`min-h-screen tech-grid ${isDark ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="flex">
        {/* Sidebar */}
        <div className={`w-64 h-screen fixed left-0 ${isDark ? 'bg-gray-800/80' : 'bg-white/90'} backdrop-blur-sm shadow-lg`}>
          <div className="p-6">
            <h1 className={`text-2xl font-bold ${isDark ? 'tech-text' : 'tech-text-light'}`}>创意组合器</h1>
            <nav className="mt-8">
              <Link 
                to="/" 
                className={`block py-2.5 px-4 rounded transition ${
                  location.pathname === '/' ? 'tech-button text-white' : 
                  (isDark ? 'text-gray-300 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100/50')
                }`}
              >
                首页
              </Link>
              <Link 
                to="/combine" 
                className={`block py-2.5 px-4 rounded transition ${
                  location.pathname === '/combine' ? 'tech-button text-white' : 
                  (isDark ? 'text-gray-300 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100/50')
                }`}
              >
                词语组合
              </Link>
              <Link 
                to="/help" 
                className={`block py-2.5 px-4 rounded transition ${
                  location.pathname === '/help' ? 'tech-button text-white' : 
                  (isDark ? 'text-gray-300 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100/50')
                }`}
              >
                使用帮助
              </Link>
            </nav>
          </div>
          <div className="absolute bottom-0 w-full p-6">
            <button
              onClick={toggleTheme}
              className="tech-button w-full py-2 px-4 rounded flex items-center justify-center text-white"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              <span className="ml-2">{isDark ? '切换亮色' : '切换暗色'}</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 w-full">
          <main className="p-8">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="p-6 text-gray-400">
            <div className="text-center">
              <p>© 2024 北山. All rights reserved.</p>
              <p>联系方式: shijuebaba@gmail.com</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}