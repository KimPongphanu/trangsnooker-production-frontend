import React, { useState, useCallback } from 'react';

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  // ฟังก์ชันสำหรับตั้งค่าสถานะ
  const onMouseEnter = useCallback(() => setIsHovered(true), []);
  const onMouseLeave = useCallback(() => setIsHovered(false), []);

  // คืนค่าสถานะ (isHovered) และ Props สำหรับผูกกับ Element
  // Note: เราคืนเป็น Object ({ onMouseEnter, onMouseLeave }) เพื่อให้ง่ายต่อการ Spread
  return [isHovered, { onMouseEnter, onMouseLeave }];
};

export default useHover;
