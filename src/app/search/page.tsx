import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/markdown';
import SearchPageClient from '@/components/SearchPageClient';

export const metadata: Metadata = {
  title: '搜索',
  description: '搜索博客文章、笔记和随笔',
};

export default function SearchPage() {
  const blogPosts = getAllPosts('blog');
  const notePosts = getAllPosts('notes');
  const essayPosts = getAllPosts('essays');
  const allPosts = [...blogPosts, ...notePosts, ...essayPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <SearchPageClient allPosts={allPosts} />;
}
