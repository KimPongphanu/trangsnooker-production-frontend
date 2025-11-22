import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // 💡 ต้อง Import Link
import { useBlogStore } from '../stores/useBlogStore';
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';

const ArticleIndexPage = () => {
  const allPosts = useBlogStore((state) => state.posts);

  useEffect(() => {
    document.title = 'Trangsnooker | Articles';
  }, []);

  return (
    <div className="p-3 max-w-7xl mx-auto ">
      <Breadcrumbs></Breadcrumbs>
      <div className="max-w-7xl mx-auto">
        <div className="w-full p-4 bg-green-800">
          <p className="text-[1.5rem] text-white font-semibold">
            บทความทั้งหมด{' '}
            <p className="text-gray-100 text-[0.8rem]">
              พบ {allPosts.length} บทความ
            </p>
          </p>
        </div>
        <div className="w-full h-[3px] bg-green-600 rounded-xs mt-5" />

        <div className="grid grid-cols-1 md:grid-cols-1 mt-5 lg:grid-cols-2 gap-8 p-3 ">
          {allPosts.map((post) => (
            <Link
              key={post.id}
              to={`/article/${post.slug}`}
              className="rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] backdrop-blur-sm block"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              {/* รูปภาพ Thumbnail */}
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 md:h-80 object-cover"
              />

              <div className="p-4">
                {/* ชื่อบทความ */}
                <h2 className="text-xl font-semibold text-slate-700 mb-2 hover:text-blue-800 transition-colors">
                  {post.title}
                </h2>

                {/* ข้อมูลผู้เขียน/วันที่ */}
                <div className="flex items-center text-sm text-slate-700 space-x-4 mt-3">
                  <span className="flex items-center space-x-1">
                    <FaRegCalendarAlt className="h-4 w-4" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FaUser className="h-4 w-4" />
                    <span>{post.author}</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleIndexPage;
