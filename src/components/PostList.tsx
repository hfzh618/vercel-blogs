'use client';

import { useState, useMemo } from 'react';
import PostCard from './PostCard';
import TagFilter from './TagFilter';
import type { PostMeta } from '@/lib/markdown';

interface PostListProps {
  posts: PostMeta[];
  tags: string[];
}

export default function PostList({ posts, tags }: PostListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <div>
      {tags.length > 0 && (
        <TagFilter tags={tags} selectedTag={selectedTag} onSelect={setSelectedTag} />
      )}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 dark:text-gray-500">暂无相关内容</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
