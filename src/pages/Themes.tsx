import React from 'react';
import { motion } from 'framer-motion';

const themes = [
  {
    title: '集体主义 vs 个人主义',
    chinese: {
      description: '强调集体利益，关注社会整体发展',
      examples: ['《三体》中的面壁计划', '《流浪地球》中的全球合作'],
    },
    western: {
      description: '突出个人英雄主义，重视个体价值',
      examples: ['《钢铁侠》中的个人英雄', '《星际穿越》中的父女情'],
    },
  },
  {
    title: '科技观',
    chinese: {
      description: '科技服务于社会，强调实用性和普及性',
      examples: ['《球状闪电》中的军事应用', '《北京折叠》中的社会分层'],
    },
    western: {
      description: '科技探索未知，追求突破和创新',
      examples: ['《星际迷航》中的探索精神', '《火星救援》中的生存挑战'],
    },
  },
  {
    title: '叙事风格',
    chinese: {
      description: '注重情节的完整性和社会意义',
      examples: ['《三体》的宏大叙事', '《流浪地球》的家国情怀'],
    },
    western: {
      description: '强调个人经历和情感体验',
      examples: ['《银翼杀手》的人性探索', '《头号玩家》的虚拟现实'],
    },
  },
  {
    title: '宇宙观与命运观',
    chinese: {
      description: '宇宙观多带有宿命色彩，强调人与自然的和谐',
      examples: ['《三体》中的"黑暗森林法则"'],
    },
    western: {
      description: '宇宙观强调人类对命运的抗争与探索',
      examples: ['《沙丘》中的宿命与反抗', '《2001太空漫游》中的进化'],
    },
  },
  {
    title: '政治隐喻与社会批判',
    chinese: {
      description: '常以隐喻方式表达对现实社会的批判',
      examples: ['《红色海洋》', '《地铁》', '《高铁》'],
    },
    western: {
      description: '直接探讨权力、体制、自由等议题',
      examples: ['《1984》', '《美丽新世界》', '《基地》'],
    },
  },
  {
    title: '人工智能与人性',
    chinese: {
      description: '关注AI对社会结构和伦理的影响',
      examples: ['《北京折叠》中的智能分层社会'],
    },
    western: {
      description: '关注AI的自我意识与人类身份的界限',
      examples: ['《仿生人会梦见电子羊吗？》', '《机器人系列》'],
    },
  },
  {
    title: '生态与环境',
    chinese: {
      description: '生态危机常与民族命运、社会变革结合',
      examples: ['《荒潮》', '《流浪地球》'],
    },
    western: {
      description: '生态主题多聚焦于人类与自然的冲突与反思',
      examples: ['《沙丘》', '《与拉玛相会》'],
    },
  },
  {
    title: '末世与重生',
    chinese: {
      description: '末世叙事常带有集体救赎和民族复兴色彩',
      examples: ['《流浪地球》', '《三体》'],
    },
    western: {
      description: '末世叙事多关注个体选择与人性考验',
      examples: ['《安德的游戏》', '《神经漫游者》'],
    },
  },
];

const Themes: React.FC = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">主题对比</h1>
      <div className="space-y-12">
        {themes.map((theme, index) => (
          <motion.div
            key={theme.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">{theme.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 中国特点 */}
              <div className="border-r border-gray-200 pr-8">
                <h3 className="text-xl font-semibold mb-4">中国特点</h3>
                <p className="text-gray-600 mb-4">{theme.chinese.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">代表案例：</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {theme.chinese.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* 西方特点 */}
              <div className="pl-8">
                <h3 className="text-xl font-semibold mb-4">西方特点</h3>
                <p className="text-gray-600 mb-4">{theme.western.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">代表案例：</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {theme.western.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Themes; 