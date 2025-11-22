import React from 'react';
import AppBar from './AppBar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  // 💡 กำหนดความสูงของ Header (ต้องตรงกับ AppBar: h-[60px])
  const HEADER_HEIGHT_PX = '60px';

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HEADER: Fixed Position */}
      <header
        className="fixed z-50 w-full top-0 bg-slate-800"
        style={{ height: HEADER_HEIGHT_PX }}
      >
        <AppBar />
      </header>

      {/* 2. MAIN: ชดเชยพื้นที่ด้วย Padding Top */}
      <main
        className="flex-grow" // ลบ dark:bg-gray-900 ออก
        style={{ paddingTop: HEADER_HEIGHT_PX }} // ดันเนื้อหาลงมาตามความสูง Header
      >
        {children}
      </main>

      {/* 3. FOOTER */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
