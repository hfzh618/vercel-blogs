import type { Metadata } from 'next';
import { FolderKanban, ExternalLink, Github, Star } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: '项目经历',
  description: '个人参与和完成的项目展示',
};

const projects = [
  {
    title: '个人博客系统',
    description:
      '基于 Next.js 和 Tailwind CSS 构建的现代化个人博客，支持 Markdown 渲染、暗色模式、全文搜索等功能。部署在 Vercel 上，实现自动化 CI/CD。',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com',
    demo: '/',
    featured: true,
  },
  {
    title: '在线协作文档',
    description:
      '支持多人实时协作的在线文档编辑器，基于 OT 算法实现冲突解决。支持富文本编辑、评论批注、版本历史等功能。',
    tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    github: 'https://github.com',
    featured: true,
  },
  {
    title: '电商管理后台',
    description:
      '为中小型电商设计的管理后台系统，包含商品管理、订单处理、数据分析仪表盘等模块。采用响应式设计，支持移动端操作。',
    tech: ['Vue.js', 'Element Plus', 'ECharts', 'Express'],
    github: 'https://github.com',
    featured: true,
  },
  {
    title: 'CLI 脚手架工具',
    description:
      '自研的项目初始化脚手架工具，支持多种模板选择、自定义配置、Git 初始化等功能。已发布至 npm，累计下载 2000+。',
    tech: ['Node.js', 'Commander', 'Inquirer', 'npm'],
    github: 'https://github.com',
  },
  {
    title: '天气预报 App',
    description:
      '基于高德地图 API 的天气查询应用，支持城市搜索、7 日天气预报、空气质量指数等。采用 PWA 技术，支持离线使用。',
    tech: ['React', 'PWA', 'API 集成', 'CSS Modules'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: '开源组件库',
    description:
      '面向 React 生态的 UI 组件库，包含 30+ 常用组件。完善的 TypeScript 类型支持、单元测试覆盖和 Storybook 文档。',
    tech: ['React', 'TypeScript', 'Rollup', 'Storybook'],
    github: 'https://github.com',
  },
];

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedSection>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-medium mb-4">
            <FolderKanban size={14} />
            项目经历
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            我的项目
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            这些是我参与开发和维护的项目，涵盖前端、全栈和工具类
          </p>
        </div>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection delay={0.1}>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Star size={18} className="text-yellow-500" />
          精选项目
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {featured.map((project, index) => (
          <AnimatedSection key={project.title} delay={0.1 + index * 0.1}>
            <div className="group h-full p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Github size={14} />
                    源码
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink size={14} />
                    演示
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Other Projects */}
      <AnimatedSection delay={0.3}>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          更多项目
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {others.map((project, index) => (
          <AnimatedSection key={project.title} delay={0.3 + index * 0.1}>
            <div className="group p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md transition-all duration-300">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Github size={14} />
                    源码
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink size={14} />
                    演示
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
