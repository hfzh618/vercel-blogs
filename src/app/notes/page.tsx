import type { Metadata } from 'next';
import { Heart } from 'lucide-react';
import { getAllPosts, getAllTags } from '@/lib/markdown';
import PostList from '@/components/PostList';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: '生活记录',
  description: '记录健身、旅行和日常生活的点滴',
};

export default function NotesPage() {
  const posts = getAllPosts('notes');
  const tags = getAllTags('notes');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedSection>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
            <Heart size={14} />
            生活记录
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            生活记录
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            健身、旅行和日常杂记，记录生活中的美好时刻，共 {posts.length} 篇
          </p>
        </div>
      </AnimatedSection>

      <PostList posts={posts} tags={tags} />
    </div>
  );
}
