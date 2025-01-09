import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Lightbulb, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className={`text-5xl font-bold mb-4 tech-text`}>
          创意组合器
        </h1>
        <p className="text-xl text-gray-300 dark:text-gray-400">
          快速帮助设计人员组合出创意架构
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm shadow-lg border border-gray-700/50">
          <div className="text-blue-400 mb-4">
            <Lightbulb size={32} className="animate-pulse" />
          </div>
          <h3 className="text-xl font-bold mb-2 tech-text">智能组合</h3>
          <p className="text-gray-300">
            AI 驱动的创意组合算法，激发无限灵感
          </p>
        </div>

        <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm shadow-lg border border-gray-700/50">
          <div className="text-blue-400 mb-4">
            <Zap size={32} className="animate-pulse" />
          </div>
          <h3 className="text-xl font-bold mb-2 tech-text">实时可视</h3>
          <p className="text-gray-300">
            动态粒子效果，直观展现创意连接
          </p>
        </div>

        <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm shadow-lg border border-gray-700/50">
          <div className="text-blue-400 mb-4">
            <Sparkles size={32} className="animate-pulse" />
          </div>
          <h3 className="text-xl font-bold mb-2 tech-text">专业词库</h3>
          <p className="text-gray-300">
            持续更新的专业词库，助力创意设计
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/combine"
          className="tech-button inline-block text-white px-8 py-3 rounded-lg text-lg font-semibold"
        >
          开始创作
        </Link>
      </div>
    </div>
  );
}