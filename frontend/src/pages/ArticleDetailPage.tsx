import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogStore } from '../stores/useBlogStore';

type ArticleParams = {
  articleSlug: string;
};

const ArticleDetailPage = () => {
  const { articleSlug } = useParams<ArticleParams>();

  const getPostBySlug = useBlogStore((state) => state.getPostBySlug);

  const post = getPostBySlug(articleSlug!);

  useEffect(() => {
    if (post) {
      document.title = `Trangsnooker | ${post.title}`;
    } else {
      document.title = 'Trangsnooker | 404 Not Found';
    }
  }, [post]);

  if (!post) {
    return (
      <div className="text-center mt-20 p-5">
        <h1 className="text-2xl text-red-500">บทความไม่พบ (Error 404)</h1>
        <p className="text-gray-600 mt-2">Slug: {articleSlug}</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="max-w-4xl mx-auto p-4 md:p-10"
        style={{ backgroundColor: '#031e4530' }}
      >
        <h1 className="text-4xl font-bold mb-4 text-sky-800">{post.title}</h1>
        <div className="text-gray-500 text-sm mb-8">
          เขียนโดย: {post.author} | วันที่: {post.date}
        </div>

        <div
          className="prose lg:prose-lg max-w-none overflow-hidden"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  );
};

export default ArticleDetailPage;
