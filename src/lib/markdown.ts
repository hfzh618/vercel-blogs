import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  readingTime: string;
  category: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getDirectory(category: string): string {
  return path.join(contentDirectory, category);
}

export function getAllPosts(category: string): PostMeta[] {
  const dir = getDirectory(category);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '未知日期',
      tags: data.tags || [],
      summary: data.summary || '',
      readingTime: stats.text.replace('min read', '分钟'),
      category,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  category: string,
  slug: string
): Promise<Post | null> {
  const filePath = path.join(getDirectory(category), `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    // @ts-expect-error rehype-highlight options type mismatch
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date || '未知日期',
    tags: data.tags || [],
    summary: data.summary || '',
    readingTime: stats.text.replace('min read', '分钟'),
    category,
    content: processedContent.toString(),
  };
}

export function getAllTags(category?: string): string[] {
  const categories = category ? [category] : ['blog', 'notes', 'essays'];
  const tagSet = new Set<string>();

  categories.forEach((cat) => {
    const posts = getAllPosts(cat);
    posts.forEach((post) => {
      post.tags.forEach((tag) => tagSet.add(tag));
    });
  });

  return Array.from(tagSet).sort();
}

export function searchPosts(query: string): PostMeta[] {
  const categories = ['blog', 'notes', 'essays'];
  const allPosts: PostMeta[] = [];

  categories.forEach((cat) => {
    allPosts.push(...getAllPosts(cat));
  });

  if (!query) return allPosts;

  const lower = query.toLowerCase();
  return allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lower) ||
      post.summary.toLowerCase().includes(lower) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lower))
  );
}
