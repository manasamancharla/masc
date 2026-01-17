interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

interface GridLayoutProps {
  posts: BlogPost[];
}

export function GridLayout({ posts }: GridLayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group rounded-lg overflow-hidden bg-transparent shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="relative overflow-hidden h-40">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-[full] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <span className="inline-block px-3 py-1 text-xs font-medium gradient-bgColor text-text-neutral rounded-sm mb-2">
              {post.category}
            </span>
            <h3 className="text-lg font-semibold mb-2 text-text transition-colors">
              {post.title}
            </h3>
            <p className="text-text-neutral text-sm mb-3 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-text-neutral subtitle-bold">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
