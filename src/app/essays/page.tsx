import type { Metadata } from 'next';
import { Pen } from 'lucide-react';
import { getAllPosts, getAllTags } from '@/lib/markdown';
import PostList from '@/components/PostList';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: '随笔感悟',
  description: '记录生活中的思考与感悟',
};

export default function EssaysPage() {
  const posts = getAllPosts('essays');
  const tags = getAllTags('essays');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedSection>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-medium mb-4">
            <Pen size={14} />
            随笔感悟
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            随笔
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            关于编程、生活和成长的一些思考，共 {posts.length} 篇随笔
          </p>
        </div>
      </AnimatedSection>

      <PostList posts={posts} tags={tags} />
    </div>
  );
}
