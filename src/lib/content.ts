import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PageFrontmatter, BlogFrontmatter, Event, EventsData } from './types';

const contentDir = path.join(process.cwd(), 'content');

export function getPageContent(slug: string): { frontmatter: PageFrontmatter; content: string } | null {
  const filePath = path.join(contentDir, 'pages', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return { frontmatter: data as PageFrontmatter, content };
}

export function getBlogPost(slug: string): { frontmatter: BlogFrontmatter; content: string } | null {
  const filePath = path.join(contentDir, 'blog', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return { frontmatter: data as BlogFrontmatter, content };
}

export function getAllBlogSlugs(): string[] {
  const blogDir = path.join(contentDir, 'blog');
  if (!fs.existsSync(blogDir)) return [];

  return fs.readdirSync(blogDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace('.mdx', ''));
}

export function getAllBlogPosts(): { frontmatter: BlogFrontmatter; slug: string; excerpt: string }[] {
  const slugs = getAllBlogSlugs();
  return slugs
    .map(slug => {
      const post = getBlogPost(slug);
      if (!post) return null;
      const firstParagraph = post.content.split('\n').find(line => line.trim() && !line.startsWith('#')) || '';
      const excerpt = firstParagraph.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').slice(0, 180).trim();
      return { frontmatter: post.frontmatter, slug, excerpt };
    })
    .filter((p): p is { frontmatter: BlogFrontmatter; slug: string; excerpt: string } => p !== null)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getEvents(): Event[] {
  const filePath = path.join(contentDir, 'events', 'events.json');
  if (!fs.existsSync(filePath)) return [];

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const data: EventsData = JSON.parse(fileContent);
  return data.events || [];
}

export function getEvent(slug: string): Event | null {
  const events = getEvents();
  return events.find(e => e.slug === slug) || null;
}

export function getAllEventSlugs(): string[] {
  return getEvents().map(e => e.slug);
}
