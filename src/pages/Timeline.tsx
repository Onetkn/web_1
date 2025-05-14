import React from 'react';
import { motion } from 'framer-motion';

const Timeline: React.FC = () => {
  const chineseTimeline = [
    {
      year: '1900-1949',
      title: '早期萌芽',
      description: '科幻文学开始在中国萌芽，主要受西方科幻作品影响。',
      works: ['《月球殖民地小说》', '《新石头记》'],
    },
    {
      year: '1950-1976',
      title: '社会主义科幻',
      description: '科幻文学与社会主义建设相结合，强调科学普及。',
      works: ['《小灵通漫游未来》', '《珊瑚岛上的死光》'],
    },
    {
      year: '1977-1999',
      title: '改革开放时期',
      description: '科幻文学迎来复兴，题材更加多元化。',
      works: ['《三体》', '《球状闪电》'],
    },
    {
      year: '2000-至今',
      title: '当代繁荣',
      description: '中国科幻走向世界，获得国际认可。',
      works: ['《流浪地球》', '《北京折叠》'],
    },
  ];

  const westernTimeline = [
    {
      year: '1818-1899',
      title: '维多利亚时代',
      description: '科幻文学开始形成，探索科学与人性。',
      works: ['《弗兰肯斯坦》', '《时间机器》'],
    },
    {
      year: '1900-1945',
      title: '早期现代',
      description: '科幻杂志兴起，形成独特文化。',
      works: ['《基地》系列', '《1984》'],
    },
    {
      year: '1946-1979',
      title: '黄金时代',
      description: '科幻文学蓬勃发展，题材广泛。',
      works: ['《沙丘》', '《银河帝国》'],
    },
    {
      year: '1980-至今',
      title: '后现代时期',
      description: '科幻与其他类型文学融合，更加多元化。',
      works: ['《神经漫游者》', '《火星救援》'],
    },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">发展脉络</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 中国科幻发展脉络 */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">中国科幻史</h2>
          <div className="space-y-8">
            {chineseTimeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-lg font-semibold text-primary">{item.year}</div>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">代表作品：</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {item.works.map((work) => (
                      <li key={work}>{work}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 西方科幻发展脉络 */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">西方科幻史</h2>
          <div className="space-y-8">
            {westernTimeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-lg font-semibold text-primary">{item.year}</div>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">代表作品：</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {item.works.map((work) => (
                      <li key={work}>{work}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 