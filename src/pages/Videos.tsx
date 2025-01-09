import React from 'react';
import { Video, Youtube, MessageCircle } from 'lucide-react';

export default function Videos({ isDark }: { isDark: boolean }) {
  const videoSites = [
    {
      name: "TikTok",
      description: "短视频平台，提供有趣的短视频内容",
      url: "https://www.tiktok.com",
      icon: Video,
      color: "text-pink-500"
    },
    {
      name: "YouTube",
      description: "全球最大的视频分享平台",
      url: "https://www.youtube.com",
      icon: Youtube,
      color: "text-red-500"
    },
    {
      name: "Bilibili",
      description: "年轻人喜爱的视频弹幕网站",
      url: "https://www.bilibili.com",
      icon: MessageCircle,
      color: "text-blue-500"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        视频导航
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videoSites.map((site, index) => {
          const Icon = site.icon;
          return (
            <a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative overflow-hidden
                ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}
                rounded-xl shadow-lg transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-xl
                p-6
              `}
            >
              <div className="relative z-10">
                <div className={`${site.color} mb-4`}>
                  <Icon size={32} className="transition-transform group-hover:scale-110" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {site.name}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {site.description}
                </p>
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full 
                            bg-gradient-to-br from-current to-transparent opacity-10
                            transition-transform group-hover:scale-150"
                   style={{ color: site.color.split('-')[1] }}>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}