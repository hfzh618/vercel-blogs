'use client';

import { useState } from 'react';

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onSelect: (tag: string | null) => void;
}

export default function TagFilter({ tags, selectedTag, onSelect }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSelect(null)}
        className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${
          selectedTag === null
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        全部
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag === selectedTag ? null : tag)}
          className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${
            selectedTag === tag
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
