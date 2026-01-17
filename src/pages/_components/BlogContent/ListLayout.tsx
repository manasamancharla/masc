interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

interface ListLayoutProps {
  posts: BlogPost[];
}

export function ListLayout({ posts }: ListLayoutProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group flex gap-4 p-4 rounded-lg bg-transparent hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="shrink-0 w-48 h-32 rounded-lg overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs text-text-neutral subtitle-bold">
                {post.date}
              </span>
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium gradient-bgColor text-text-neutral rounded-sm">
                  {post.category}
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-text transition-colors">
              {post.title}
            </h3>
            <p className="text-text-neutral mb-3 text-sm line-clamp-2">
              {post.excerpt}
            </p>
            <span className="text-xs text-text-neutral subtitle-bold">
              {post.readTime}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
