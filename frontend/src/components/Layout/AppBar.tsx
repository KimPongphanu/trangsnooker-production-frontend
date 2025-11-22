import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // 💡 เพิ่ม useLocation
import { FaBars, FaHouse, FaNewspaper, FaAddressCard } from 'react-icons/fa6';
import { FaTimes, FaStore } from 'react-icons/fa';

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // 💡 ดึง Path ปัจจุบัน

  // 💡 ฟังก์ชันช่วยตรวจสอบ Active Path สำหรับเมนู Desktop
  const getDesktopLinkClasses = (path) => {
    // สำหรับหน้าแรก (/) ต้องเปรียบเทียบแบบตรงตัว
    const isActive =
      path === '/'
        ? location.pathname === '/'
        : location.pathname.startsWith(path);

    return isActive
      ? 'text-amber-400 border-b-2 border-amber-400 pb-1' // Active State
      : 'hover:text-amber-400 transition duration-300'; // Default State
  };

  // 💡 ฟังก์ชันช่วยตรวจสอบ Active Path สำหรับเมนู Mobile
  const getMobileLinkClasses = (path) => {
    const isActive =
      path === '/'
        ? location.pathname === '/'
        : location.pathname.startsWith(path);

    return isActive
      ? 'p-2 bg-slate-600 transition-colors flex items-center space-x-3 text-amber-400 rounded-md'
      : 'py-2 hover:bg-slate-600 transition-colors flex items-center space-x-3';
  };

  return (
    <div className="flex items-center justify-between w-full h-[60px] px-6 bg-slate-800 text-white shadow-lg relative z-50">
      {/* 1. ส่วนซ้าย: โลโก้/ชื่อร้าน */}
      <Link to="/">
        <div className="flex items-center space-x-3">
          <img
            src="/logos/Trangsnooker_logo_large.svg"
            alt="Trangsnooker_logo_large.svg"
            className="h-10 w-10 object-contain"
          />
          <p className="text-xl md:text-2xl font-bold tracking-wider">
            ตรังสนุกเกอร์
          </p>
        </div>
      </Link>

      {/* 2. ส่วนกลาง: เมนูสำหรับ Desktop (Hidden on Mobile) */}
      <nav className="hidden md:flex space-x-6 text-lg font-medium h-full items-center">
        {/* หน้าแรก */}
        <Link to="/" className={getDesktopLinkClasses('/')}>
          หน้าแรก
        </Link>

        {/* โต๊ะสนุกเกอร์ */}
        <Link
          to="/snooker_table"
          className={getDesktopLinkClasses('/snooker_table')}
        >
          โต๊ะสนุกเกอร์
        </Link>

        {/* บทความ */}
        <Link to="/article" className={getDesktopLinkClasses('/article')}>
          บทความ
        </Link>

        {/* เกี่ยวกับเรา */}
        <Link to="/about" className={getDesktopLinkClasses('/about')}>
          เกี่ยวกับเรา
        </Link>
      </nav>

      {/* 3. ส่วนขวา: Hamburger Menu สำหรับ Mobile */}
      <p className="absolute top-[10px] right-16 text-[1.3rem] font-serif font-bold md:hidden">
        <sub>เมนู</sub>
      </p>

      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <FaTimes className="h-7 w-7" />
        ) : (
          <FaBars className="h-7 w-7" />
        )}
      </button>

      {/* 4. Dropdown Menu สำหรับ Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[60px] left-0 w-full bg-slate-700 shadow-xl pb-4 animate-fadeIn">
          <nav className="flex flex-col space-y-2 p-4 text-white">
            {/* หน้าแรก - Mobile */}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={
                getMobileLinkClasses('/') + ' border-b border-slate-600'
              }
            >
              <FaHouse className="text-lg " />
              <span>หน้าแรก</span>
            </Link>

            {/* โต๊ะสนุกเกอร์ - Mobile */}
            <Link
              to="/snooker_table"
              onClick={() => setIsMenuOpen(false)}
              className={
                getMobileLinkClasses('/snooker_table') +
                ' border-b border-slate-600'
              }
            >
              <FaStore className="text-lg" />
              <span>โต๊ะสนุกเกอร์</span>
            </Link>

            {/* บทความ - Mobile */}
            <Link
              to="/article"
              onClick={() => setIsMenuOpen(false)}
              className={
                getMobileLinkClasses('/article') + ' border-b border-slate-600'
              }
            >
              <FaNewspaper className="text-lg" />
              <span>บทความ</span>
            </Link>

            {/* เกี่ยวกับเรา - Mobile */}
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={getMobileLinkClasses('/about')}
            >
              <FaAddressCard className="text-lg" />
              <span>เกี่ยวกับเรา</span>
            </Link>
          </nav>
          <div className="flex justify-center px-4">
            <div className="w-full h-[3px] rounded-xl bg-amber-400"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppBar;
