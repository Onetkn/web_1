import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="container py-6">
          <h1 className="text-4xl font-bold text-primary">科幻文化对比</h1>
          <p className="mt-2 text-gray-600">探索中西科幻文化的异同</p>
        </div>
      </header>

      <main className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">发展脉络</h2>
            <p className="text-gray-600 mb-4">探索中西科幻文学的发展历程</p>
            <Link to="/timeline" className="btn btn-primary">
              了解更多
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">主题对比</h2>
            <p className="text-gray-600 mb-4">深入分析中西科幻文化的核心差异</p>
            <Link to="/themes" className="btn btn-primary">
              了解更多
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">代表作品</h2>
            <p className="text-gray-600 mb-4">精选中西科幻经典作品赏析</p>
            <Link to="/works" className="btn btn-primary">
              了解更多
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">最新资讯</h2>
            <p className="text-gray-600 mb-4">获取科幻文化领域的最新动态</p>
            <button className="btn btn-secondary">
              订阅更新
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home; 