'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import PostCard from '@/components/PostCard';
import type { PostMeta } from '@/lib/markdown';

interface SearchPageClientProps {
  allPosts: PostMeta[];
}

export default function SearchPageClient({ allPosts }: SearchPageClientProps) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    return allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lower) ||
        post.summary.toLowerCase().includes(lower) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lower))
    );
  }, [query, allPosts]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        搜索
      </h1>

      <div className="relative mb-8">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="搜索文章标题、摘要或标签..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          autoFocus
        />
      </div>

      {query.trim() && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          找到 {results.length} 个结果
        </p>
      )}

      {!query.trim() ? (
        <div className="text-center py-16">
          <Search size={48} className="mx-auto text-gray-200 dark:text-gray-700 mb-4" />
          <p className="text-gray-400 dark:text-gray-500">
            输入关键词开始搜索
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 dark:text-gray-500">
            没有找到匹配的文章，试试其他关键词？
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {results.map((post, index) => (
            <PostCard key={`${post.category}-${post.slug}`} post={post} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
