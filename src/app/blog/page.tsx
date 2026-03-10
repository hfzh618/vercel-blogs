import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { getAllPosts, getAllTags } from '@/lib/markdown';
import PostList from '@/components/PostList';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: '技术博客',
  description: '深入探讨前端技术、框架原理和最佳实践',
};

export default function BlogPage() {
  const posts = getAllPosts('blog');
  const tags = getAllTags('blog');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedSection>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-4">
            <BookOpen size={14} />
            技术博客
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            博客文章
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            分享前端技术、框架使用心得和开发经验，共 {posts.length} 篇文章
          </p>
        </div>
      </AnimatedSection>

      <PostList posts={posts} tags={tags} />
    </div>
  );
}
