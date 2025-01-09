import React from 'react';
import { HelpCircle, Info, Settings } from 'lucide-react';

export default function Help({ isDark }: { isDark: boolean }) {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>使用帮助</h1>

      <div className="space-y-8">
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
          <div className="flex items-center mb-4">
            <Settings className="text-blue-500 mr-2" size={24} />
            <h2 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>基本使用</h2>
          </div>
          <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <p>1. 在左侧菜单选择"词语组合"进入组合页面</p>
            <p>2. 选择需要组合的词语数量（2-5个）</p>
            <p>3. 点击"开始组合"按钮生成随机组合</p>
            <p>4. 观察词语之间的连接关系和权重展示</p>
          </div>
        </div>

        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
          <div className="flex items-center mb-4">
            <Info className="text-blue-500 mr-2" size={24} />
            <h2 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>功能说明</h2>
          </div>
          <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <p>• 词语大小：表示该词语在组合中的权重</p>
            <p>• 连接线：展示词语之间的关联关系</p>
            <p>• 粒子效果：增强视觉体验和互动性</p>
            <p>• 深色模式：支持切换深色/浅色主题</p>
          </div>
        </div>

        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
          <div className="flex items-center mb-4">
            <HelpCircle className="text-blue-500 mr-2" size={24} />
            <h2 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>常见问题</h2>
          </div>
          <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <p>Q: 如何保存组合结果？</p>
            <p>A: 目前可以通过截图方式保存，后续会添加导出功能。</p>
            <p>Q: 词库会更新吗？</p>
            <p>A: 是的，我们会定期更新词库以提供更多组合可能。</p>
          </div>
        </div>
      </div>
    </div>
  );
}