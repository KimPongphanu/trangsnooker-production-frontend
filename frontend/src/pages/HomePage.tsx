import React from 'react'
import { useState, useEffect } from 'react'
import useScrollPosition from '../hooks/useScrollPosition.js'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const imgs = [
    '/images/index/snooker1.jpg',
    '/images/index/snooker3.jpg',
    '/images/index/snooker2.jpg',
  ]

  const title = [
    'จำหน่าย โต๊ะสนุกเกอร์ - อเมริกันพูล',
    'บริการ ย้าย / ติดตั้ง',
    'รับเปลี่ยนผ้าสักหลาด',
  ]

  useEffect(() => {
    document.title = 'Trangsnooker | Thailand'
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const totalImages = imgs.length

  const goNextImage = () => {
    setCurrentIndex((prev) => (prev + 1 < totalImages ? prev + 1 : 0))
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      goNextImage()
    }, 6000)
    return () => {
      clearInterval(timerId)
    }
  }, [totalImages])

  const scrollY = useScrollPosition()
  const PARALLAX_RATE = 0.2 //กำหนดอัตราส่วน Parallax (ยิ่งค่าน้อย ยิ่งเลื่อนช้า)
  const translateY_value = scrollY * PARALLAX_RATE
  return (
    <article className='text-center'>
      <section
        className='relative mx-auto'
        style={{ width: '100%', height: '100vh' }}
      >
        {imgs.map((imgSrc, index) => (
          <Link to={'/snooker_table'}>
            <img
              key={imgSrc}
              src={imgSrc}
              alt={`Slide ${index + 1}`}
              className={`
                absolute top-0 left-0 w-full h-full object-cover
                transition-opacity duration-1000 ease-in-out
                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
              `}
              style={{ zIndex: index === currentIndex ? 10 : 1 }}
            />
          </Link>
        ))}
        <div className='absolute bottom-4 w-full flex justify-center space-x-2 z-20'>
          {imgs.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer 
                  ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <div
          className='absolute top-1/3 left-1/2 flex justify-center z-30 flex-col w-full max-w-4xl px-4'
          // 💡 3. ใช้ style เพื่อกำหนด Transform
          style={{
            // 3a. Fixed Centering
            transform: `translate(-50%, -50%) translateY(${translateY_value}px)`,
            // 3b. เพิ่ม Transition เพื่อให้การเลื่อนดูนุ่มนวลขึ้น
            transition: 'transform 0.1s linear',
          }}
        >
          {/* ข้อความหลัก */}
          <h1 className='text-center font-pirata text-shadow-md text-shadow-black mb-2 text-white/95 text-[3rem] md:text-5xl lg:text-7xl'>
            Trangsnooker
            <sup className='text-xl align-super'>&reg;</sup>
          </h1>

          {/* คำอธิบาย/Subtitle */}
          <p className='text-white text-center font-medium text-shadow-md text-shadow-black tracking-wide text-lg md:text-xl lg:text-2xl py-2'>
            {title[currentIndex]}
          </p>
        </div>
      </section>
    </article>
  )
}

export default HomePage
