import React, { useState, useEffect, useRef } from 'react';
import { words } from '../data/words';
import { Word, Connection } from '../types';

// 预定义一些好看的颜色，区分暗色和亮色模式
const darkModeColors = [
  '#FF6B6B', // 红色
  '#4ECDC4', // 青色
  '#45B7D1', // 蓝色
  '#96CEB4', // 绿色
  '#FFEEAD', // 黄色
  '#D4A5A5', // 粉色
  '#9B59B6', // 紫色
  '#3498DB', // 深蓝
  '#E67E22', // 橙色
  '#2ECC71'  // 翠绿
];

const lightModeColors = [
  '#E53E3E', // 深红
  '#2C7A7B', // 深青
  '#2B6CB0', // 深蓝
  '#2F855A', // 深绿
  '#B7791F', // 深黄
  '#B83280', // 深粉
  '#6B46C1', // 深紫
  '#2C5282', // 靛蓝
  '#C05621', // 深橙
  '#276749'  // 墨绿
];

export default function Combine({ isDark }: { isDark: boolean }) {
  const [wordCount, setWordCount] = useState(2);
  const [combinations, setCombinations] = useState<(Word & { color: string })[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getRandomColor = () => {
    const colors = isDark ? darkModeColors : lightModeColors;
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const generateCombination = () => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const radius = Math.min(containerWidth, containerHeight) * 0.3;

    const selectedWords: (Word & { color: string })[] = [];
    const usedCategories = new Set();

    while (selectedWords.length < wordCount) {
      const categoryIndex = Math.floor(Math.random() * words.length);
      const category = words[categoryIndex];
      
      if (!usedCategories.has(category.category)) {
        const wordIndex = Math.floor(Math.random() * category.words.length);
        const angle = (2 * Math.PI * selectedWords.length) / wordCount;
        const size = Math.random() * 20 + 20; // 20-40px
        
        selectedWords.push({
          text: category.words[wordIndex],
          size,
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
          color: getRandomColor()
        });
        
        usedCategories.add(category.category);
      }
    }

    const newConnections: Connection[] = [];
    for (let i = 0; i < selectedWords.length; i++) {
      for (let j = i + 1; j < selectedWords.length; j++) {
        newConnections.push({
          start: selectedWords[i],
          end: selectedWords[j]
        });
      }
    }

    setCombinations(selectedWords);
    setConnections(newConnections);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      connections.forEach(connection => {
        const gradient = ctx.createLinearGradient(
          connection.start.x,
          connection.start.y,
          connection.end.x,
          connection.end.y
        );
        gradient.addColorStop(0, (connection.start as Word & { color: string }).color + (isDark ? '80' : 'CC')); // 增加不透明度
        gradient.addColorStop(1, (connection.end as Word & { color: string }).color + (isDark ? '80' : 'CC')); // 增加不透明度

        ctx.beginPath();
        ctx.moveTo(connection.start.x, connection.start.y);
        ctx.lineTo(connection.end.x, connection.end.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = isDark ? 1 : 1.5; // 亮色模式下线条更粗
        ctx.stroke();

        const particleCount = 5;
        for (let i = 0; i < particleCount; i++) {
          const t = Math.random();
          const x = connection.start.x + (connection.end.x - connection.start.x) * t;
          const y = connection.start.y + (connection.end.y - connection.start.y) * t;
          
          ctx.beginPath();
          ctx.arc(x, y, isDark ? 2 : 3, 0, Math.PI * 2); // 亮色模式下粒子更大
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [connections, isDark]); // 添加 isDark 作为依赖

  return (
    <div className="relative">
      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>词语组合器</h2>
        <div className="flex items-center space-x-4">
          <select
            value={wordCount}
            onChange={(e) => setWordCount(Number(e.target.value))}
            className={`p-2 border rounded ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
          >
            <option value={2}>2个词组合</option>
            <option value={3}>3个词组合</option>
            <option value={4}>4个词组合</option>
            <option value={5}>5个词组合</option>
          </select>
          <button
            onClick={generateCombination}
            className="tech-button text-white px-6 py-2 rounded hover:opacity-90 transition"
          >
            开始组合
          </button>
        </div>
      </div>

      <div 
        ref={containerRef}
        className={`relative h-[500px] ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
        />
        {combinations.map((word, index) => (
          <div
            key={index}
            className="word-container absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out"
            style={{
              left: word.x,
              top: word.y,
            }}
          >
            <div 
              className="word-text relative z-10"
              style={{
                fontSize: `${word.size}px`,
                color: word.color,
                textShadow: isDark ? '0 0 10px rgba(0,0,0,0.1)' : '0 0 1px rgba(0,0,0,0.2)'
              }}
            >
              {word.text}
            </div>
            <div className="ripple-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="ripple-1" style={{ borderColor: `${word.color}${isDark ? '20' : '40'}` }}></div>
              <div className="ripple-2" style={{ borderColor: `${word.color}${isDark ? '15' : '30'}` }}></div>
              <div className="ripple-3" style={{ borderColor: `${word.color}${isDark ? '10' : '20'}` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}