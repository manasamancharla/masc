import { useState } from "react";
import {
  BlogLayoutToggle,
  type BlogLayout,
} from "@/components/BlogLayoutToggle";
import { GridLayout } from "@/pages/_components/BlogContent/GridLayout";
import { ListLayout } from "@/pages/_components/BlogContent/ListLayout";
import SectionTransition from "@/components/ui/SectionTransition";
import { motion } from "motion/react";

const blogPosts = [
  {
    id: "modern-web-development",
    title: "The Future of Modern Web Development",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of web development, from AI integration to edge computing.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop",
  },
  {
    id: "design-systems",
    title: "Building Scalable Design Systems",
    excerpt:
      "A comprehensive guide to creating and maintaining design systems that grow with your product and team.",
    date: "Dec 12, 2024",
    readTime: "12 min read",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
  },
  {
    id: "user-experience",
    title: "Psychology of User Experience",
    excerpt:
      "Understanding the psychological principles that drive user behavior and how to apply them in your designs.",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    category: "UX/UI",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
  },
  {
    id: "performance-optimization",
    title: "Advanced Performance Optimization",
    excerpt:
      "Deep dive into techniques for optimizing web application performance, from code splitting to caching strategies.",
    date: "Dec 5, 2024",
    readTime: "15 min read",
    category: "Performance",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
];

export default function BlogContent() {
  const [currentLayout, setCurrentLayout] = useState<BlogLayout>("grid");

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

        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <BlogLayoutToggle
            currentLayout={currentLayout}
            onLayoutChange={setCurrentLayout}
          />
        </motion.div>
      </div>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">{renderLayout()}</div>
      </section>
    </SectionTransition>
  );
}
