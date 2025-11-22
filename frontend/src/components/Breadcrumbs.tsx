// src/components/Breadcrumbs.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// 💡 Icon สำหรับลูกศร (Optional)
import { FaChevronRight } from 'react-icons/fa';

interface BreadcrumbsProps {
  productName?: string;
}

const Breadcrumbs = ({ productName }: BreadcrumbsProps) => {
  const location = useLocation();
  // 1. แยก Path ออกเป็นส่วนย่อย และกรองค่าว่างออก (เช่น /home/about -> ['home', 'about'])
  const pathnames = location.pathname.split('/').filter((x) => x);

  // 2. กำหนดให้ลิงก์แรกสุดเป็น 'Home'
  const isHome = pathnames.length === 0;

  return (
    <nav className="flex items-center text-sm text-gray-500 p-4">
      {/* ลิงก์แรกสุด: Home (Path /) */}
      <Link to="/" className="hover:text-sky-700 transition">
        home
      </Link>

      {/* สร้างลิงก์ตาม Path ที่เหลือ */}
      {pathnames.map((value, index) => {
        // สร้าง Path สำหรับลิงก์ปัจจุบัน (เช่น /home, /home/snooker_tables)
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        // ตรวจสอบว่านี่คือลิงก์สุดท้ายหรือไม่
        const isLast = index === pathnames.length - 1;

        // 💡 การจัดรูปแบบชื่อ: ถ้าเป็นลิงก์สุดท้ายและมีการส่ง productName มา ให้แสดงชื่อสินค้า
        const displayName =
          isLast && productName
            ? productName // ใช้ชื่อสินค้าที่ส่งมา
            : value.replace(/-/g, ' '); // ใช้ Slug โดยเปลี่ยน '-' เป็น ' ' และทำเป็นตัวพิมพ์ใหญ่

        return (
          <React.Fragment key={to}>
            {/* ลูกศรคั่น */}
            <FaChevronRight className="w-3 h-3 mx-2 text-gray-400" />

            {isLast ? (
              // 3. ถ้าเป็นรายการสุดท้าย: แสดงเป็นข้อความธรรมดา (ไม่เป็นลิงก์)
              <span className="font-semibold text-gray-700">{displayName}</span>
            ) : (
              // 4. ถ้าไม่ใช่รายการสุดท้าย: แสดงเป็น Link
              <Link to={to} className="hover:text-sky-700 transition">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
