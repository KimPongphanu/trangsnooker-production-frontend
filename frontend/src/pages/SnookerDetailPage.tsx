import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSnookerStore } from '../stores/useSnookerStore';
import Breadcrumbs from '../components/Breadcrumbs';
import { formatCurrencyStandard } from '../stores/formatCurrencyThai';
import { FaGift, FaClipboardList, FaWrench } from 'react-icons/fa';
import { FaLocationDot, FaFaceGrinStars } from 'react-icons/fa6';

const SnookerDetailPage = () => {
  const { snookerSlug } = useParams();
  const getTableBySlug = useSnookerStore(
    (state) => state.getSnookerTableBySlug
  );
  const snookerTable = getTableBySlug(snookerSlug);
  const accessories = useSnookerStore((state) => state.accessories);

  useEffect(() => {
    document.title = `Trangsnooker | ${snookerTable?.name}`;
  });

  const [currentIMG, setCurrentIMG] = useState(0);

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <Breadcrumbs productName={snookerTable?.slug} />
      <article className="mt-4">
        {/* Gallery Section */}
        <section className="flex flex-col justify-center items-center">
          <img
            src={snookerTable?.galleryImages[currentIMG]}
            alt={snookerTable?.galleryImages[currentIMG]}
            className="w-full md:w-[70vw] h-[50vh] md:h-[70vh] object-contain mb-5 rounded-lg"
          />
          <div className="flex flex-row justify-center flex-wrap gap-2">
            {snookerTable?.galleryImages.map((src, index) => (
              <img
                key={index}
                onClick={() => setCurrentIMG(index)}
                className={`size-[50px] md:size-[60px] border-2 cursor-pointer transition-all
                  ${
                    currentIMG === index ? 'border-blue-500' : 'border-gray-300'
                  }`}
                src={src}
                alt={src}
              />
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section className="mt-8">
          {/* Price & CTA Card */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="text-sm md:text-2xl font-bold text-white mb-2">
                  {snookerTable?.name} {snookerTable?.sizeFt} ฟุต
                </h4>
                <p className="text-gray-400 text-sm mb-1">ราคาพิเศษ</p>
                <p className="text-3xl md:text-4xl font-bold text-white">
                  {formatCurrencyStandard(snookerTable?.price ?? 0)}
                </p>
                <p className="text-green-400 text-sm mt-1">
                  ✓ รวมค่าติดตั้งและจัดส่งแล้ว
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0819688421"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Line / โทรสอบถาม
                  </button>
                </a>
                <a
                  href="https://www.facebook.com/trangsanooker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                    <img
                      src="/logos/facebook.svg"
                      alt="facebook.svg"
                      className="w-[1.5rem] text-blue-300"
                    />
                    Facebook / ติดต่อสอบถาม
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Specific details*/}
          <div className="mt-8 shadow-md rounded-lg overflow-hidden border border-gray-200 max-w-lg">
            {/* 💡 Container: จำกัดความกว้าง, ขอบมน, และเงา */}

            <table className="min-w-full divide-y divide-gray-300">
              {/* 1. HEADER: จัดสไตล์ให้ Header ดูโดดเด่น */}
              <thead>
                <tr className="bg-sky-700">
                  <th
                    colSpan={2}
                    className="p-3 text-xl font-semibold text-white tracking-wider text-left"
                  >
                    คุณสมบัติสินค้า
                  </th>
                </tr>
              </thead>

              {/* 2. BODY: ใช้ divide-y เพื่อสร้างเส้นแบ่งระหว่างแถว */}
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Row 1: ขนาดโต๊ะ */}
                <tr className="hover:bg-gray-50">
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/2 text-left">
                    ขนาดโต๊ะ
                  </th>
                  <td className="px-4 py-2 text-sm text-gray-900 w-1/2 text-right">
                    {snookerTable?.sizeFt} ฟุต
                  </td>
                </tr>

                {/* Row 2: ขนาดพื้นที่ใช้งานจริง (แถวสลับสี) */}
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/2 text-left">
                    ขนาดพื้นที่ใช้งานจริง
                  </th>
                  <td className="px-4 py-2 text-sm text-gray-900 w-1/2 text-right">
                    {snookerTable?.playingAreaCm}
                  </td>
                </tr>

                {/* Row 3: ขนาดห้องขั้นต่ำ */}
                <tr className="hover:bg-gray-50">
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/2 text-left">
                    ขนาดห้องขั้นต่ำ
                  </th>
                  <td className="px-4 py-2 text-sm text-gray-900 w-1/2 text-right">
                    {snookerTable?.minRoomSizeM}
                  </td>
                </tr>

                {/* Row 4: สินค้า (แถวสลับสี) */}
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/2 text-left">
                    สินค้า
                  </th>
                  <td className="px-4 py-2 text-sm text-gray-900 w-1/2 text-right">
                    {snookerTable?.productCondition}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Accessories Table */}
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
              <FaGift />
              อุปกรณ์เพิ่มเติมที่จะได้รับ
            </h3>

            {/* Mobile: Card Layout */}
            <div className="block md:hidden space-y-3">
              {accessories.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-lg p-4 shadow-sm flex items-center gap-4"
                >
                  <span className="bg-green-100 text-green-700 font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {item.id}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Table Layout */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full max-w-3xl divide-y divide-gray-300 border rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="px-4 py-3 text-left text-sm font-semibold w-20">
                      ลำดับ
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      รายการอุปกรณ์
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold w-32">
                      จำนวน
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {accessories.map((item, idx) => (
                    <tr
                      key={item.id}
                      className={`${
                        idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      } hover:bg-green-50 transition-colors`}
                    >
                      <td className="px-4 py-3 text-sm font-bold text-green-600">
                        {item.id}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {item.title}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-center font-medium">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Product Name & Description */}
          <div className="py-2">
            {snookerTable?.fullDescriptionHTML && (
              <div
                dangerouslySetInnerHTML={{
                  __html: snookerTable.fullDescriptionHTML,
                }}
                className="prose lg:prose-xl max-w-none"
              />
            )}
          </div>

          {/* Highlight Features */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col items-center bg-gray-200 rounded-lg p-4 text-center">
              <span className="text-3xl">
                <FaWrench />
              </span>
              <p className="font-semibold text-gray-800 mt-2">
                คุณภาพระดับมาตรฐานสากล
              </p>
              <p className="text-sm text-gray-500">มาตรฐานการแข่งขัน</p>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-lg p-4 text-center">
              <span className="text-3xl text-center">
                <FaFaceGrinStars />
              </span>
              <p className="font-semibold text-gray-800 mt-2">
                การติดตั้งติดตั้ง
              </p>
              <p className="text-sm text-gray-500">โดยทีมช่างมืออาชีพ</p>
            </div>
          </div>

          <div className="space-y-6 text-base md:text-lg text-gray-700">
            <div className=" border-l-4 border-green-400 p-4 rounded-r-lg">
              <p className="leading-relaxed">
                โต๊ะสนุ๊กเกอร์ผลิตจาก <b>ไม้เนื้อแข็งคุณภาพดี</b> ทุกชิ้นส่วน
                โดยเน้นการตรวจสอบความชื้นอย่างละเอียดก่อนนำไปขึ้นงาน
                เพื่อให้มั่นใจในความทนทานและเสถียรภาพสูงสุดของโต๊ะตลอดอายุการใช้งาน
              </p>
            </div>

            <p className="leading-relaxed text-gray-600 pl-4 border-l-2 border-gray-300">
              ทุกขั้นตอนคือ <b>งานแฮนด์เมด (Handmade)</b>{' '}
              ที่สร้างสรรค์ด้วยความประณีต เรากล้ารับประกันคุณภาพสินค้าด้วย
              ประสบการณ์และความเชี่ยวชาญกว่า{' '}
              <span className="text-green-600 font-bold">20 ปี</span> ในวงการ
            </p>

            {/* Factory Image */}
            <div className="relative">
              <img
                className="w-full h-auto md:h-[50vh] object-cover rounded-xl shadow-lg"
                src="/public/images/index/factory.jpg"
                alt="โรงงานผลิต"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <a
                  href="https://maps.app.goo.gl/qWrKaFpNSW3RMD1q6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm flex items-center space-x-2">
                    <FaLocationDot className="h-4 w-4" />
                    <span>ตรังสนุกเกอร์ โรงงานผลิต</span>
                  </p>
                </a>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                <FaClipboardList />
                รายละเอียดวัสดุและคุณสมบัติ
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-blue-700 mb-2">พื้นโต๊ะ</h4>
                  <p className="text-gray-600">
                    ใช้ <b>หินชนวนนำเข้าจากต่างประเทศ</b> คุณภาพสูง จัดชุด 5
                    แผ่น เพื่อความเรียบเนียนในการเล่น
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-blue-700 mb-2">
                    ชิ่งและยาง
                  </h4>
                  <p className="text-gray-600">
                    ชิ่งทำจากไม้คุณภาพ พร้อมยางชิ่งเกรดมาตรฐานระดับแข่งขัน
                    เพื่อการเด้งที่แม่นยำและไว้ใจได้
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-blue-700 mb-2">
                    หนังปากหลุม
                  </h4>
                  <p className="text-gray-600">
                    หุ้มด้วยหนังสังเคราะห์เกรดมาตรฐาน ทนทาน ไม่ยืดหรือหดตัวง่าย
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-blue-700 mb-2">
                    ผ้าปูโต๊ะ
                  </h4>
                  <p className="text-gray-600">
                    ผ้าสักหลาดคุณภาพมาตรฐาน นำเข้าจากต่างประเทศ ลื่นสม่ำเสมอ
                    ทนทานต่อการใช้งานหนัก
                  </p>
                </div>
                <p className="text-red-600 text-[1rem] ">
                  หมายเหตุ สามารถปรับและเลือกอุปกรณ์ได้
                </p>
              </div>
            </div>
          </div>

          <hr />
        </section>
      </article>
    </div>
  );
};

export default SnookerDetailPage;
