import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Work {
  id: string;
  title: string;
  author: string;
  year: string;
  region: 'chinese' | 'western';
  description: string;
  cover: string;
  reviews: string[];
}

const works: Work[] = [
  // 中国科幻
  {
    id: 'san-ti',
    title: '三体三部曲',
    author: '刘慈欣',
    year: '2008-2010',
    region: 'chinese',
    description: '探讨宇宙文明、科技进步与人类命运；硬科幻代表。',
    cover: '/covers/san-ti.jpg',
    reviews: ['中国科幻的里程碑之作', '极具想象力和哲学深度'],
  },
  {
    id: 'qiu-zhuang-shandian',
    title: '球状闪电',
    author: '刘慈欣',
    year: '2005',
    region: 'chinese',
    description: '探讨科技进步与人类命运，硬科幻风格。',
    cover: '/covers/qiu-zhuang-shandian.jpg',
    reviews: ['科学细节丰富', '哲理性强'],
  },
  {
    id: 'beijing-fold',
    title: '北京折叠',
    author: '郝景芳',
    year: '2012',
    region: 'chinese',
    description: '描绘社会分层的未来北京，曾获雨果奖。',
    cover: '/covers/beijing-fold.jpg',
    reviews: ['社会寓意深刻', '未来感十足'],
  },
  {
    id: 'yi-sheng',
    title: '蚁生',
    author: '王晋康',
    year: '1998',
    region: 'chinese',
    description: '关注伦理、生命本质与科技发展带来的挑战。',
    cover: '/covers/yi-sheng.jpg',
    reviews: ['生命哲学的深刻探讨'],
  },
  {
    id: 'lei-ren',
    title: '类人',
    author: '王晋康',
    year: '2000',
    region: 'chinese',
    description: '关注伦理、生命本质与科技发展带来的挑战。',
    cover: '/covers/lei-ren.jpg',
    reviews: ['对人性的深刻反思'],
  },
  {
    id: 'huang-chao',
    title: '荒潮',
    author: '陈楸帆',
    year: '2013',
    region: 'chinese',
    description: '描写科技与社会、生态的冲突，具有赛博朋克风格。',
    cover: '/covers/huang-chao.jpg',
    reviews: ['赛博朋克氛围浓厚'],
  },
  {
    id: 'hongse-haiyang',
    title: '红色海洋',
    author: '韩松',
    year: '2004',
    region: 'chinese',
    description: '风格怪诞，结合政治隐喻和反乌托邦设定。',
    cover: '/covers/hongse-haiyang.jpg',
    reviews: ['政治隐喻丰富'],
  },
  {
    id: 'ditie',
    title: '地铁',
    author: '韩松',
    year: '2010',
    region: 'chinese',
    description: '风格怪诞，结合政治隐喻和反乌托邦设定。',
    cover: '/covers/ditie.jpg',
    reviews: ['氛围压抑，寓意深远'],
  },
  {
    id: 'gaotie',
    title: '高铁',
    author: '韩松',
    year: '2012',
    region: 'chinese',
    description: '风格怪诞，结合政治隐喻和反乌托邦设定。',
    cover: '/covers/gaotie.jpg',
    reviews: ['现代中国的隐喻'],
  },
  // 西方科幻
  {
    id: 'foundation',
    title: '基地系列',
    author: '艾萨克·阿西莫夫',
    year: '1951-1993',
    region: 'western',
    description: '奠定机器人三定律，宏大的未来史诗。',
    cover: '/covers/foundation.jpg',
    reviews: ['科幻史诗', '思想深刻'],
  },
  {
    id: 'robot',
    title: '机器人系列',
    author: '艾萨克·阿西莫夫',
    year: '1950-1985',
    region: 'western',
    description: '奠定机器人三定律，宏大的未来史诗。',
    cover: '/covers/robot.jpg',
    reviews: ['机器人三定律的经典阐释'],
  },
  {
    id: '2001',
    title: '2001太空漫游',
    author: '亚瑟·克拉克',
    year: '1968',
    region: 'western',
    description: '探索宇宙文明与人类进化。',
    cover: '/covers/2001.jpg',
    reviews: ['视觉与哲学的双重震撼'],
  },
  {
    id: 'rama',
    title: '与拉玛相会',
    author: '亚瑟·克拉克',
    year: '1973',
    region: 'western',
    description: '探索宇宙文明与人类进化。',
    cover: '/covers/rama.jpg',
    reviews: ['宇宙想象力极强'],
  },
  {
    id: 'android',
    title: '仿生人会梦见电子羊吗？',
    author: '菲利普·K·迪克',
    year: '1968',
    region: 'western',
    description: '探讨身份与现实的界限。',
    cover: '/covers/android.jpg',
    reviews: ['哲学性极强', '改编为《银翼杀手》'],
  },
  {
    id: 'neuromancer',
    title: '神经漫游者',
    author: '威廉·吉布森',
    year: '1984',
    region: 'western',
    description: '赛博朋克开山之作，提出"赛博空间"。',
    cover: '/covers/neuromancer.jpg',
    reviews: ['赛博朋克鼻祖'],
  },
  {
    id: 'dune',
    title: '沙丘系列',
    author: '赫伯特·弗兰克',
    year: '1965-1985',
    region: 'western',
    description: '融合政治、宗教、生态于一体的史诗科幻。',
    cover: '/covers/dune.jpg',
    reviews: ['生态与权力的史诗'],
  },
  {
    id: 'ender',
    title: '安德的游戏',
    author: '奥森·斯科特·卡德',
    year: '1985',
    region: 'western',
    description: '关于战争、伦理与天才少年的故事。',
    cover: '/covers/ender.jpg',
    reviews: ['成长与战争的双重寓意'],
  },
];

const Works: React.FC = () => {
  const navigate = useNavigate();
  const chineseWorks = works.filter(w => w.region === 'chinese');
  const westernWorks = works.filter(w => w.region === 'western');

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">代表作品</h1>

      <h2 className="text-2xl font-semibold text-primary mb-4 mt-8">中方代表作品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {chineseWorks.map((work) => (
          <motion.div
            key={work.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => navigate(`/works/${work.id}`)}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src={work.cover}
                alt={work.title}
                className="w-full h-48 object-cover"
                onError={e => (e.currentTarget.style.display = 'none')}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-primary">{work.title}</h2>
              <p className="text-gray-600 mt-2">{work.author} · {work.year}</p>
              <div className="mt-4 flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-600">{work.reviews[0]}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-primary mb-4 mt-8">西方代表作品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {westernWorks.map((work) => (
          <motion.div
            key={work.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => navigate(`/works/${work.id}`)}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src={work.cover}
                alt={work.title}
                className="w-full h-48 object-cover"
                onError={e => (e.currentTarget.style.display = 'none')}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-primary">{work.title}</h2>
              <p className="text-gray-600 mt-2">{work.author} · {work.year}</p>
              <div className="mt-4 flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-600">{work.reviews[0]}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Works; 