import { useState, useMemo } from "react";
import {
  BlogLayoutToggle,
  type BlogLayout,
} from "@/components/BlogLayoutToggle";
import { GridLayout } from "@/pages/_components/BlogContent/GridLayout";
import { ListLayout } from "@/pages/_components/BlogContent/ListLayout";
import SectionTransition from "@/components/ui/SectionTransition";
import { motion } from "motion/react";
import {
  useSortedBlogPosts,
  formatDate,
  estimateReadingTime,
} from "@/lib/blog";

// Transform MDX posts to match the expected blog post format
function transformMdxPostsToDisplayFormat(mdxPosts: any[]) {
  return mdxPosts.map((post) => ({
    id: post.slug,
    title: post.frontmatter.title,
    excerpt: post.frontmatter.description,
    date: formatDate(post.frontmatter.date),
    readTime: "5 min read", // Placeholder - can be enhanced with actual text analysis
    category: post.frontmatter.tags[0] || "General",
    imageUrl:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop", // Placeholder image
    slug: post.slug,
  }));
}

export default function BlogContent() {
  const [currentLayout, setCurrentLayout] = useState<BlogLayout>("grid");
  const mdxPosts = useSortedBlogPosts();
  const blogPosts = useMemo(
    () => transformMdxPostsToDisplayFormat(mdxPosts),
    [mdxPosts],
  );

  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

  const renderLayout = () => {
    switch (currentLayout) {
      case "grid":
        return <GridLayout posts={blogPosts} />;
      case "list":
        return <ListLayout posts={blogPosts} />;
      default:
        return <GridLayout posts={blogPosts} />;
    }
  };

  return (
    <SectionTransition className="flex min-h-screen w-full flex-col gap-3 pb-32 pt-24 justify-center">
      <div className="flex justify-between items-center border-[#232B34] border-b">
        <div>
          <motion.h1
            className="responsive-h1"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Insights & Ideas
          </motion.h1>

          <motion.p
            className="text-text-neutral max-w-xl body-bold mb-8"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Exploring the intersection of technology, design, and innovation
          </motion.p>
        </div>

        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={isMobile ? "hidden" : ""}
          >
            <BlogLayoutToggle
              currentLayout={currentLayout}
              onLayoutChange={setCurrentLayout}
            />
          </motion.div>
        )}
      </div>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">{renderLayout()}</div>
      </section>
    </SectionTransition>
  );
}
