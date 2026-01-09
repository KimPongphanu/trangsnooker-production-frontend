import { motion } from 'framer-motion'

function AnimatedProductEllipse() {
  return (
    <div className='bg-green-800 text-[1.5rem] font-semibold text-white flex justify-items-start items-center p-4'>
      <motion.text
        x='0' // จุดเริ่มต้น X ของข้อความ (กึ่งกลาง)
        y='105' // จุดเริ่มต้น Y ของข้อความ (ปรับให้กึ่งกลางแนวตั้ง)
        textAnchor='start' // จัดข้อความให้อยู่กึ่งกลางตามแกน X
        alignmentBaseline='middle' // จัดข้อความให้อยู่กึ่งกลางตามแกน Y
        fontSize='32' // ขนาดตัวอักษร
        fontWeight='bold' // ตัวหนา
        fill='#fff' // สีข้อความ
        initial={{ opacity: 0, y: 30 }} // เริ่มต้นซ่อนและอยู่ต่ำกว่าเล็กน้อย
        animate={{ opacity: 1, y: 0 }} // ปรากฏขึ้นและเลื่อนเข้าที่
        transition={{
          delay: 0.6, // หน่วงเวลาให้เส้นวาดเสร็จไปซักพัก
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        โต๊ะสนุกเกอร์
      </motion.text>
    </div>
  )
}

export default AnimatedProductEllipse
