import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // เพิ่ม Event Listener เมื่อ Component ถูก Mount
    window.addEventListener('scroll', handleScroll);

    // Cleanup Function: ลบ Event Listener เมื่อ Component ถูก Unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // รันแค่ครั้งเดียว

  return scrollY; // คืนค่าตำแหน่งปัจจุบันที่เลื่อนไป
};

export default useScrollPosition;
