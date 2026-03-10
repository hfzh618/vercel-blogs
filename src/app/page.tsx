import Link from 'next/link';
import { ArrowRight, BookOpen, StickyNote, Pen, FolderKanban, FileUser } from 'lucide-react';
import { getAllPosts } from '@/lib/markdown';
import PostCard from '@/components/PostCard';
import AnimatedSection from '@/components/AnimatedSection';

const sections = [
  {
    title: '技术博客',
    description: '深入探讨前端技术、框架原理和最佳实践',
    href: '/blog',
    icon: BookOpen,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: '学习笔记',
    description: '系统整理学习过程中的知识点和心得',
    href: '/notes',
    icon: StickyNote,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: '随笔感悟',
    description: '记录生活中的思考与感悟',
    href: '/essays',
    icon: Pen,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: '项目经历',
    description: '展示个人参与和完成的项目',
    href: '/projects',
    icon: FolderKanban,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: '个人简历',
    description: '了解我的教育背景和工作经历',
    href: '/resume',
    icon: FileUser,
    gradient: 'from-indigo-500 to-violet-500',
  },
];

export default function Home() {
  const blogPosts = getAllPosts('blog');
  const notePosts = getAllPosts('notes');
  const essayPosts = getAllPosts('essays');
  const recentPosts = [...blogPosts, ...notePosts, ...essayPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <AnimatedSection>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                欢迎来到我的数字花园
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="text-gray-900 dark:text-white">用代码</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">记录</span>
                <br />
                <span className="text-gray-900 dark:text-white">用文字</span>
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">思考</span>
              </h1>

              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                这里是我的个人博客，记录技术学习、项目经验和生活感悟。
                <br />
                希望这些文字能对你有所启发。
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg shadow-gray-900/10"
                >
                  开始阅读 <ArrowRight size={16} />
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  了解我
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            探索内容
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <AnimatedSection key={section.href} delay={index * 0.1}>
              <Link
                href={section.href}
                className="group block p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-transparent bg-white dark:bg-gray-900/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative">
                  <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${section.gradient} text-white mb-3`}>
                    <section.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {section.description}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              最新文章
            </h2>
            <Link
              href="/blog"
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
            >
              查看全部 <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid gap-4">
          {recentPosts.map((post, index) => (
            <PostCard key={`${post.category}-${post.slug}`} post={post} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
