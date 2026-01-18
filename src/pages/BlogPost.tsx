import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import RayLight from "@/components/RayLight/RayLight";
import PageTransition from "@/components/ui/PageTransition";
import { useBlogPost, formatDate, useSortedBlogPosts } from "@/lib/blog";
import { MdxComponents } from "@/components/MdxComponents";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = useBlogPost(slug || "");
  const allPosts = useSortedBlogPosts();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <PageTransition>
        <main className="wrapper py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Post Not Found
            </h1>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Back to Blog
            </Link>
          </div>
        </main>
      </PageTransition>
    );
  }

  // Get previous and next posts for navigation
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <PageTransition>
      <div className="absolute -z-10 h-screen w-full max-w-full overflow-hidden min-[2048px]:max-w-[2048px]">
        <RayLight type="primary" className="left-[550px] -top-[100px]" />
      </div>
      <main className="wrapper py-12 md:py-24">
        <article className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </Link>

          {/* Header */}
          <header className="mb-6">
            <h1 className="responsive-h1">{post.frontmatter.title}</h1>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Meta Information */}
              <div className="flex items-center gap-4 text-sm text-text-neutral subtitle-bold">
                <time dateTime={post.frontmatter.date}>
                  {formatDate(post.frontmatter.date)}
                </time>
              </div>

              {/* Tags */}
              {post.frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      className="inline-block px-3 py-1 text-xs font-medium gradient-bgColor text-text-neutral rounded-sm mb-2"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 text-md text-text-neutral body-bold">
              {post.frontmatter.description}
            </p>
          </header>

          {/* Divider */}
          <div className="mb-8 border-t border-[#232B34]" />

          {/* Content */}
          <div className="prose prose-invert max-w-none dark:prose-invert">
            <MDXProvider components={MdxComponents}>
              <post.component />
            </MDXProvider>
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-[#232B34]" />

          {/* Navigation */}
          {(previousPost || nextPost) && (
            <nav className="grid gap-8 sm:grid-cols-2">
              {previousPost ? (
                <Link
                  to={`/blog/${previousPost.slug}`}
                  className="group rounded-lg border border-[#232B34] p-4 transition-all hover:border-blue-500 dark:hover:border-blue-400"
                >
                  <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                    ← Previous
                  </span>
                  <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {previousPost.frontmatter.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group rounded-lg border border-[#232B34] p-4 transition-all hover:border-blue-500 text-right dark:hover:border-blue-400"
                >
                  <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                    Next →
                  </span>
                  <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {nextPost.frontmatter.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          )}
        </article>
      </main>
    </PageTransition>
  );
};

export default BlogPost;
