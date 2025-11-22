import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';
const AboutPage = () => {
  useEffect(() => {
    document.title = 'Trangsnooker | About';
  }, []);
  const googleMapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.177526633658!2d99.5751056103049!3d7.555613110278795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8c56d83fb141%3A0x727499b384135e19!2z4LiV4Lij4Lix4LiH4Liq4LiZ4Li44LiB4LmA4LiB4Lit4Lij4LmMIOC5guC4o-C4h-C4h-C4suC4meC4nOC4peC4tOC4lQ!5e0!3m2!1sth!2sth!4v1762725421525!5m2!1sth!2sth';

  const services = [
    {
      title: 'จำหน่าย โต๊ะสนุกเกอร์ - อเมริกันพูล',
      desc: 'โต๊ะใหม่และมือสอง คุณภาพดี',
    },
    {
      title: 'จำหน่ายอุปกรณ์',
      desc: 'อุปกรณ์เกี่ยวกับสนุกเกอร์ทุกชนิด',
    },
    {
      title: 'บริการ ย้าย / ติดตั้ง',
      desc: 'ซ่อมและทำสีใหม่',
    },
    {
      title: 'รับเปลี่ยนผ้าสักหลาด',
      desc: 'ปรับปรุงคุณภาพโต๊ะให้มีมาตรฐานสากล',
    },
  ];

  return (
    <div className="p-3 max-w-7xl mx-auto">
      <Breadcrumbs />
      <div className="p-3 max-w-7xl mx-auto bg-green-800">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-3xl font-semibold text-white tracking-wide">
            เกี่ยวกับเรา
          </h1>
          <div className="mt-4 w-full h-0.5 bg-gray-300 mx-auto"></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Profile Section */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <img src="/images/profile.jpg" alt="profile.jpg" />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-800">
              ตรังสนุกเกอร์
            </h2>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              Trang Snooker Professional
            </p>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">
                ประสบการณ์ 20+ ปี
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">
                บริการทั่วภาคใต้
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">
                มาตรฐานสากล
              </span>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:0819688421"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaSquarePhone />
                <span>081-968-8421</span>
              </a>
              <a
                href="https://www.facebook.com/trangsanooker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white border border-gray-200 rounded-lg hover:bg-gray-50  transition-colors"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>
            </div>
            <div className="w-full rounded-md bg-green-600 mt-6 h-1"></div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-5 sm:mt-20 lg:mt-8">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
              บริการของเรา
            </h3>
            <div className="mt-3 w-12 h-0.5 bg-gray-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex group p-3 bg-white rounded-xl border border-gray-100 gap-2 hover:border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-blue-800/80 w-1/8 grid place-items-center rounded-br-lg">
                  <span className="text-white font-black">{index}</span>
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium text-sm sm:text-base leading-tight">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-gray-500 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full rounded-md bg-green-600 mt-6 h-1"></div>
        </section>

        {/* Contact Section */}
        <section className="mt-8 sm:mt-8 lg:mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">
                ช่องทางติดต่อ
              </h3>

              <div className="space-y-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/trangsanooker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">
                      <FaFacebook className="text-white"></FaFacebook>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 font-medium truncate">
                      ตรังสนุกเกอร์ ตรังสนุกเกอร์
                    </p>
                    <p className="text-gray-500 text-sm">ช่องทางหลัก</p>
                  </div>
                  <span className="text-gray-400">→</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:0819688421"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">
                      <FaSquarePhone></FaSquarePhone>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 font-medium">081-968-8421</p>
                    <p className="text-gray-500 text-sm">โทรหาเราได้เลย</p>
                  </div>
                  <span className="text-gray-400">→</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:trangsnooker@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">
                      <FaEnvelope></FaEnvelope>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 font-medium truncate">
                      trangsnooker@gmail.com
                    </p>
                    <p className="text-gray-500 text-sm">อีเมล</p>
                  </div>
                  <span className="text-gray-400">→</span>
                </a>
              </div>

              {/* Working Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="text-gray-800 font-medium mb-3">เวลาทำการ</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500"> จันทร์ - อาทิตย์</span>
                    <span className="text-gray-800">นัดหมายล่วงหน้า</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">
                ที่ตั้งร้าน
              </h3>
              <div className="aspect-video sm:aspect-square lg:aspect-video rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={googleMapUrl}
                  className="w-full h-full"
                  style={{ border: 0, minHeight: '300px' }}
                  title="Google Map Location"
                />
              </div>
              <p className="mt-4 text-gray-500 text-sm text-center lg:text-left">
                📍 ตรังสนุกเกอร์ โรงงานผลิต จ.ตรัง
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
