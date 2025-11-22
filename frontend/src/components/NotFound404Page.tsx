import { useState, useEffect } from 'react';

export default function NotFoundPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cueBallStyle = () => {
    const ballX = (mousePos.x / window.innerWidth - 0.5) * 30;
    const ballY = (mousePos.y / window.innerHeight - 0.5) * 30;
    return {
      transform: `translate(${ballX}px, ${ballY}px)`,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-950 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Felt texture overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Table border effect */}
      <div className="absolute inset-4 md:inset-8 border-8 border-amber-900 rounded-lg pointer-events-none shadow-inner" />
      <div className="absolute inset-6 md:inset-10 border-4 border-amber-800 rounded pointer-events-none" />

      {/* Corner pockets */}
      {[
        'top-6 left-6',
        'top-6 right-6',
        'bottom-6 left-6',
        'bottom-6 right-6',
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-8 h-8 md:w-12 md:h-12 bg-black rounded-full shadow-inner pointer-events-none`}
        />
      ))}

      {/* Floating snooker balls */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { color: 'bg-red-600', size: 'w-4 h-4' },
          { color: 'bg-yellow-400', size: 'w-3 h-3' },
          { color: 'bg-green-500', size: 'w-3 h-3' },
          { color: 'bg-amber-700', size: 'w-3 h-3' },
          { color: 'bg-blue-600', size: 'w-3 h-3' },
          { color: 'bg-pink-400', size: 'w-3 h-3' },
          { color: 'bg-black', size: 'w-4 h-4' },
        ].map((ball, i) => (
          <div
            key={i}
            className={`absolute ${ball.size} ${ball.color} rounded-full shadow-lg animate-pulse`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              boxShadow:
                'inset -2px -2px 4px rgba(0,0,0,0.4), inset 2px 2px 4px rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div> */}

      {/* Main 404 */}
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
          {/* 4 */}
          <span
            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600 drop-shadow-2xl"
            style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.5)' }}
          >
            4
          </span>

          {/* Snooker ball as 0 with cue ball following mouse */}
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            {/* Main red ball (the 0) */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-800 shadow-2xl flex items-center justify-center"
              style={{
                boxShadow:
                  'inset -8px -8px 20px rgba(0,0,0,0.5), inset 4px 4px 10px rgba(255,255,255,0.3), 0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              {/* Shine effect */}
              <div className="absolute top-3 left-4 md:top-4 md:left-5 w-4 h-4 md:w-6 md:h-6 bg-white/40 rounded-full blur-sm" />
            </div>

            {/* Cue ball following mouse */}
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg transition-transform duration-150 ease-out"
              style={{
                ...cueBallStyle(),
                boxShadow:
                  'inset -3px -3px 8px rgba(0,0,0,0.2), inset 2px 2px 6px rgba(255,255,255,0.8), 0 4px 12px rgba(0,0,0,0.4)',
              }}
            />
          </div>

          {/* 4 */}
          <span
            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600 drop-shadow-2xl"
            style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.5)' }}
          >
            4
          </span>
        </div>

        {/* Text content */}
        <h1
          className="text-2xl md:text-4xl font-bold text-amber-100 mb-4"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          ไม่พบหน้าที่คุณต้องการ
        </h1>
        <p className="text-green-100/80 text-base md:text-lg mb-8 max-w-md mx-auto">
          ดูเหมือนลูกบอลนี้จะหลุดลงหลุมไปแล้ว...
        </p>

        {/* Back button */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => window.history.back()}
          className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-amber-700 to-amber-900 rounded-full text-amber-100 font-semibold text-base md:text-lg shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 overflow-hidden border-2 border-amber-600"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isHovered ? '-translate-x-1' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            กลับหน้าหลัก
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <p className="mt-6 text-green-100/70">
          หรือ{' '}
          <a
            href="/"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
          >
            ไปหน้าแรก
          </a>
        </p>
      </div>

      {/* Table light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-96 h-32 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
