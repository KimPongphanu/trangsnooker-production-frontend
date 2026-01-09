import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa' // จาก Font Awesome
import { MdMail } from 'react-icons/md' // จาก Material Design
import { FaLocationDot, FaPhone } from 'react-icons/fa6'

const Footer = () => {
  const location = useLocation() // 💡 ดึง Path ปัจจุบัน
  const isActive = (path: string) => location.pathname === path
  const menuItems = [
    { name: 'หน้าแรก', path: '/' },
    { name: 'โต๊ะสนุกเกอร์', path: '/snooker_table' },
    { name: 'บทความ', path: '/article' },
    { name: 'เกี่ยวกับเรา', path: '/about' },
  ]
  return (
    <>
      <article className='flex px-5 md:px-10 xl:px-20 py-5 flex-wrap'>
        <section className='basis-full md:basis-1/3 flex flex-col items-center md:items-start space-y-4 px-1'>
          <img
            src='/logos/Trangsnooker_logo_large.svg'
            alt='Trangsnooker_logo_large.svg'
            className='size-40'
          />
          <p>ผู้ผลิตและจัดจำหน่ายโต๊ะสนุกเกอร์และอุปกรณ์มาตรฐาน</p>
          <span className='flex gap-3'>
            <a
              href='https://www.facebook.com/trangsanooker'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook className='size-8 text-blue-600 hover:text-blue-800 transition-colors' />
            </a>
            <a href='mailto:trangsnooker@gmail.com'>
              <MdMail className='size-8 text-slate-600 hover:text-slate-800 transition-colors' />
            </a>
          </span>
        </section>
        <section className='basis-full md:basis-1/2 px-0 md:px-2 space-y-4 border-t border-gray-300 sm:border-none xl:border-none my-5 md:my-0 xl:my-0'>
          <h3 className='text-xl font-bold text-sky-800 pt-2'>
            ติดต่อเรา (Contact Us)
          </h3>

          <div className='space-y-4 '>
            <div className='flex flex-col sm:flex-row sm:items-start gap-2'>
              <span className='font-semibold min-w-[100px] flex items-start gap-1 text-sky-700'>
                <FaLocationDot className='text-lg flex-shrink-0 mt-1' />
                ที่อยู่ (Address):
              </span>
              <p className='pl-0 sm:pl-0'>
                133 ม.6 ถ.ตรัง-สิเกา, ต.บางรัก, อ.เมือง, จ.ตรัง 92000
              </p>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
              <span className='font-semibold min-w-[100px] flex items-center gap-1 text-sky-700'>
                <FaPhone className='text-lg flex-shrink-0' />
                โทรศัพท์ (Tel):
              </span>

              <a
                href='tel:+66819688421'
                className='text-gray-900 hover:text-sky-600 hover:underline transition-colors'
              >
                <span>(+66) 819688421</span>
              </a>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
              <span className='font-semibold min-w-[100px] flex items-center gap-1 text-sky-700'>
                <MdMail className='text-lg flex-shrink-0' />
                อีเมล (Email):
              </span>
              <a
                href='mailto:trangsnooker@gmail.com'
                className='text-gray-900 hover:text-sky-600 hover:underline transition-colors'
              >
                <span>trangsnooker@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
        <section className='basis-full md:basis-1/8 flex flex-col space-y-2 pt-3 md:pt-0'>
          <h3 className='font-bold text-lg text-sky-800 mb-2'>
            ไปยังหน้า Go to
          </h3>
          <div className='flex flex-col space-y-2'>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-all hover:underline ${
                  isActive(item.path)
                    ? 'text-sky-600 font-bold' // เปลี่ยนเป็นสีที่เด่นขึ้นเมื่อ active
                    : 'text-gray-600 hover:text-sky-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </section>
      </article>
      <div className='flex flex-col md:flex-row items-center justify-between mt-6 pt-4 border-t border-gray-300 text-sm text-gray-600 p-3'>
        <p>© 2025 Trangsnooker. All rights reserved.</p>
        <div className='flex items-center space-x-2 mt-2 md:mt-0'>
          <p>Made in Thailand</p>
          <img
            className='h-4 w-6 object-contain'
            src='/logos/Flag_of_Thailand.svg'
            alt='Flag of Thailand'
          />
        </div>
      </div>
    </>
  )
}

export default Footer
