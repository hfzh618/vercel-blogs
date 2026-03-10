import type { Metadata } from 'next';
import { FileUser, MapPin, Mail, Github, Globe, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: '个人简历',
  description: '个人教育背景、工作经历和技能介绍',
};

const skills = {
  前端: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  后端: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
  工具: ['Git', 'Docker', 'Linux', 'CI/CD', 'Webpack', 'Vite'],
};

const experiences = [
  {
    title: '高级前端工程师',
    company: '某科技有限公司',
    period: '2024 - 至今',
    description: [
      '负责公司核心产品的前端架构设计和性能优化',
      '带领 5 人前端团队完成多个重要项目交付',
      '推动前端工程化建设，建立组件库和开发规范',
      '将首屏加载时间从 3.2s 优化至 1.1s',
    ],
  },
  {
    title: '前端工程师',
    company: '某互联网公司',
    period: '2022 - 2024',
    description: [
      '参与电商平台前端开发，使用 React + TypeScript 技术栈',
      '负责支付模块和订单系统的前端实现',
      '优化 Webpack 构建配置，打包体积减少 40%',
      '编写单元测试，代码覆盖率达到 85%',
    ],
  },
];

const education = [
  {
    school: '某大学',
    degree: '计算机科学与技术 学士',
    period: '2018 - 2022',
    description: 'GPA 3.8/4.0，校级优秀毕业生',
  },
];

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <AnimatedSection>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-medium mb-4">
            <FileUser size={14} />
            个人简历
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                张三
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                全栈工程师 / 技术博主
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                中国 · 北京
              </span>
              <a href="mailto:hello@example.com" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail size={14} />
                hello@example.com
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={14} />
                GitHub
              </a>
              <a href="/" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Globe size={14} />
                个人博客
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About */}
      <AnimatedSection delay={0.1}>
        <section className="mb-10">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            热衷于前端技术的全栈工程师，有 4 年以上 Web 开发经验。擅长 React 生态和 Node.js 后端开发，
            对性能优化和用户体验有深入研究。喜欢通过写作分享技术，活跃于开源社区。
          </p>
        </section>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection delay={0.15}>
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
            <Code2 size={20} className="text-blue-600 dark:text-blue-400" />
            技术栈
          </h2>
          <div className="grid gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-12">
                  {category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection delay={0.2}>
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-6">
            <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
            工作经历
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700"
              >
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-900" />
                <div className="mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{exp.company}</span>
                    <span>·</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="mt-2 space-y-1">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 dark:text-gray-300 before:content-['•'] before:mr-2 before:text-blue-500"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection delay={0.25}>
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-6">
            <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
            教育背景
          </h2>
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700"
            >
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-green-600 dark:bg-green-400 border-2 border-white dark:border-gray-900" />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {edu.school}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{edu.degree}</span>
                <span>·</span>
                <span>{edu.period}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {edu.description}
              </p>
            </div>
          ))}
        </section>
      </AnimatedSection>

      {/* Awards */}
      <AnimatedSection delay={0.3}>
        <section>
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
            <Award size={20} className="text-blue-600 dark:text-blue-400" />
            荣誉与证书
          </h2>
          <ul className="space-y-2">
            {[
              '2024 年度优秀员工',
              'AWS 云从业者认证',
              'CET-6 英语六级',
              '校级 ACM 程序设计竞赛银奖',
            ].map((award, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {award}
              </li>
            ))}
          </ul>
        </section>
      </AnimatedSection>
    </div>
  );
}
