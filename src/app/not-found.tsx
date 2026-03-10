import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-gray-200 dark:text-gray-800 mb-4">
        404
      </h1>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        页面未找到
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8 text-center">
        抱歉，您访问的页面不存在或已被移除。
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
      >
        <Home size={16} />
        返回首页
      </Link>
    </div>
  );
}
