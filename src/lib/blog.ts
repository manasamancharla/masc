import { useMemo } from "react";

/**
 * Frontmatter metadata for blog posts
 */
export interface BlogFrontmatter {
  title: string;
  date: string; // ISO date string
  tags: string[];
  draft: boolean;
  description: string;
}

/**
 * Blog post with metadata and component
 */
export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  component: React.ComponentType;
  path: string;
}

/**
 * Load all blog posts from the content/blog directory
 * Uses Vite's import.meta.glob for dynamic imports
 */
function loadBlogPosts(): BlogPost[] {
  // Import all .mdx files from the blog directory
  const modules = import.meta.glob<any>("../content/blog/*.mdx", {
    eager: true,
  });

  const posts: BlogPost[] = [];

  for (const [path, module] of Object.entries(modules)) {
    // Extract slug from file path (e.g., "../content/blog/my-post.mdx" -> "my-post")
    const slug = path.split("/").pop()?.replace(".mdx", "") || "";

    if (module.frontmatter && !module.frontmatter.draft) {
      posts.push({
        slug,
        frontmatter: module.frontmatter,
        component: module.default,
        path,
      });
    }
  }

  return posts;
}

/**
 * Hook to get all published blog posts
 */
export function useBlogPosts(): BlogPost[] {
  return useMemo(() => loadBlogPosts(), []);
}

/**
 * Get a single blog post by slug
 */
export function useBlogPost(slug: string): BlogPost | undefined {
  const posts = useBlogPosts();
  return posts.find((post) => post.slug === slug);
}

/**
 * Get blog posts sorted by date (newest first)
 */
export function useSortedBlogPosts(): BlogPost[] {
  const posts = useBlogPosts();

  return useMemo(
    () =>
      [...posts].sort((a, b) => {
        const dateA = new Date(a.frontmatter.date).getTime();
        const dateB = new Date(b.frontmatter.date).getTime();
        return dateB - dateA; // Newest first
      }),
    [posts],
  );
}

/**
 * Filter blog posts by tag
 */
export function usePostsByTag(tag: string): BlogPost[] {
  const posts = useSortedBlogPosts();

  return useMemo(
    () => posts.filter((post) => post.frontmatter.tags.includes(tag)),
    [posts, tag],
  );
}

/**
 * Get all unique tags from all blog posts
 */
export function useAllTags(): string[] {
  const posts = useBlogPosts();

  return useMemo(() => {
    const tagSet = new Set<string>();

    posts.forEach((post) => {
      post.frontmatter.tags.forEach((tag) => tagSet.add(tag));
    });

    return Array.from(tagSet).sort();
  }, [posts]);
}

/**
 * Format a date string to a readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Estimate reading time based on word count
 * Assumes average reading speed of 200 words per minute
 */
export function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
