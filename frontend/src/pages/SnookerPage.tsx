import React, { useEffect } from 'react'
import { useSnookerStore } from '../stores/useSnookerStore'
import useHover from '../hooks/useHover' // 💡 ต้อง Import useHover
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { motion } from 'framer-motion'
import AnimatedProductEllipse from '../components/AnimatedProductEllipse'

const SnookerPage = () => {
  const allSnookerTable = useSnookerStore((state) => state.snookerTables)

  // 💡 Note: คุณสมบัติ productCondition ต้องมีอยู่ใน Interface SnookerTable
  const brandNewTables = allSnookerTable.filter((table) => {
    // ต้องมั่นใจว่า table มี productCondition และมีค่าเป็น 'BrandNew'
    return table.productCondition === 'BrandNew'
  })

  const UsedTables = allSnookerTable.filter((table) => {
    return table.productCondition === 'Used'
  })

  useEffect(() => {
    document.title = 'Trangsnooker | Snooker Tables'
  }, [])

  return (
    <div className='p-3 max-w-7xl mx-auto'>
      <Breadcrumbs />
      <div className='bg-green-800 w-full flex justify-items-start items-center p-4'>
        <motion.text
          className='text-[1.5rem] font-semibold text-white'
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
      <div className='w-full h-[3px] bg-green-600 rounded-xs mt-5' />

      <p className='text-xl text-gray-800 font-semibold my-4 text-center'>
        สินค้าใหม่
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {brandNewTables.map((table) => (
          // 💡 1. เรียกใช้ Hook useHover ภายใน Loop
          <motion.div
            initial={{ opacity: 0, y: 50 }} // สถานะเริ่มต้น (ซ่อน)
            whileInView={{ opacity: 1, y: 0 }} // เมื่อ Scroll มาถึง
            viewport={{ once: true }} // เล่นครั้งเดียวเหมือน AOS
            transition={{ duration: 0.8 }} // ระยะเวลา animation
          >
            <ProductCard key={table.id} table={table} />
          </motion.div>
        ))}
      </div>

      <div className='w-full h-[3px] bg-green-600 rounded-xs mt-5' />
      <p className='text-xl font-semibold text-gray-800  text-center my-4'>
        สินค้ามือสอง
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3'>
        {UsedTables.map((table) => (
          // 💡 1. เรียกใช้ Hook useHover ภายใน Loop
          <motion.div
            initial={{ opacity: 0, y: 50 }} // สถานะเริ่มต้น (ซ่อน)
            whileInView={{ opacity: 1, y: 0 }} // เมื่อ Scroll มาถึง
            viewport={{ once: true }} // เล่นครั้งเดียวเหมือน AOS
            transition={{ duration: 0.8 }} // ระยะเวลา animation
          >
            <ProductCard key={table.id} table={table} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const ProductCard = ({ table }) => {
  // 2. ใช้ useHover ภายใน Component
  const [isHovered, hoverProps] = useHover()

  // 3. Logic การสลับรูปภาพ
  const imageUrl = isHovered ? table.mainImageUrl[1] : table.mainImageUrl[0]

  return (
    // 💡 4. เปลี่ยน div นอกสุดเป็น Link และกำหนด to=""
    // 💡 Path ที่ถูกต้องคือ /snooker_table/{{slug}}
    <Link
      to={`/snooker_table/${table.slug}`}
      // ย้าย Class ที่จำเป็นของ Card และ Hover ไปที่ Link
      className='border rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl block'
      {...hoverProps} // ผูก Event Handlers
    >
      <div className='relative overflow-hidden'>
        {/* 5. ใช้ Ternary Operator ใน src */}
        <img
          src={imageUrl}
          alt={table.name}
          className='w-full h-64 object-cover transition-transform duration-300'
        />

        {/* 6. (Optional) แสดงสถานะเมื่อ Hover */}
        {isHovered && (
          <div className='absolute inset-0 bg-black/20 flex items-center justify-center text-white font-bold'>
            ดูรายละเอียด
          </div>
        )}
      </div>

      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-1'>{table.name}</h2>
        <p className='text-sm text-gray-600'>{table.shortDescription}</p>
        <p className='text-2xl font-bold text-green-600 mt-2'>
          ฿{table.price.toLocaleString()}
        </p>
      </div>
    </Link> // 💡 ปิดด้วย Link
  )
}

export default SnookerPage
