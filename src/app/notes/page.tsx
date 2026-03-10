import type { Metadata } from 'next';
import { StickyNote } from 'lucide-react';
import { getAllPosts, getAllTags } from '@/lib/markdown';
import PostList from '@/components/PostList';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: '学习笔记',
  description: '系统整理学习过程中的知识点和心得',
};

export default function NotesPage() {
  const posts = getAllPosts('notes');
  const tags = getAllTags('notes');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedSection>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
            <StickyNote size={14} />
            学习笔记
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            学习笔记
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            系统整理学习过程中的知识要点，方便复习和查阅，共 {posts.length} 篇笔记
          </p>
        </div>
      </AnimatedSection>

      <PostList posts={posts} tags={tags} />
    </div>
  );
}
