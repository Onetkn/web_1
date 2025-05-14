import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigation from './components/Navigation';
import './styles/globals.css';

// 页面组件
const Home = React.lazy(() => import('./pages/Home'));
const Timeline = React.lazy(() => import('./pages/Timeline'));
const Themes = React.lazy(() => import('./pages/Themes'));
const Works = React.lazy(() => import('./pages/Works'));
const WorkDetail = React.lazy(() => import('./pages/WorkDetail'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <React.Suspense fallback={<div className="container py-12">加载中...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/themes" element={<Themes />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:id" element={<WorkDetail />} />
            </Routes>
          </React.Suspense>
        </div>
      </Router>
    </Provider>
  );
}

export default App; 