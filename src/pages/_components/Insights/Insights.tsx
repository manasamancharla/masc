import { useState, useEffect } from "react";

import { ArrowRight } from "@/components/icons/ArrowRight";
import { fetchLatestMediumArticles, Article } from "@/api";
import { cn } from "@/lib/utils";
import SectionTransition from "@/components/ui/SectionTransition";

const Insights = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const result = await fetchLatestMediumArticles(3);
        setArticles(result);
      } catch (error) {
        return;
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <SectionTransition className="w-full min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-[1040px] flex flex-col gap-6 pb-32 pt-24">
          <h2 className="responsive-h2 text-text max-w-[593px] self-stretch">
            Sharing My Experiences and Insights
          </h2>
          <p className="body-bold text-text-neutral max-w-[593px] self-stretch">
            Learning never stops, and neither does building. I share my progress
            as I explore new technologies and projects
          </p>

          {articles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[470px]">
              {/* Featured (Left) */}
              <a
                className="flex flex-col gap-3 flex-1 group"
                href={articles[0].link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-lg overflow-hidden">
                  {articles[0].thumbnail && (
                    <img
                      src={articles[0].thumbnail}
                      alt="blog-img"
                      className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <p className="subtitle-bold text-text-neutral">
                  {articles[0].pubDate}
                </p>
                <h5 className="heading-5-bold text-text self-stretch">
                  {articles[0].title}
                </h5>
                <p className="body-regular text-text-neutral self-stretch max-md:hidden line-clamp-3">
                  {articles[0].description}
                </p>

                <span className="flex items-center gap-2 md:mt-2 md:mb-2 text-text">
                  <p className="link-hover-animation group-hover:link-hovered-animation subtitle-bold text-text">
                    Read more
                  </p>
                  <ArrowRight className="w-4 h-4 text-text transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>

              {/* Side Articles (Right) */}
              <div className="flex flex-col gap-6">
                {articles.slice(1).map((article, index) => (
                  <a
                    key={index}
                    className={cn(
                      "flex flex-col md:flex-col items-start gap-3 rounded-lg overflow-hidden group",
                    )}
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {article.thumbnail && (
                      <img
                        src={article.thumbnail}
                        alt="Article Thumbnail"
                        className="w-full h-[150px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="flex flex-col justify-between flex-1 gap-3 md:gap-0">
                      <p className="subtitle-bold text-text-neutral">
                        {article.pubDate}
                      </p>
                      <h5
                        className={cn(
                          "heading-5-bold text-text self-stretch sm:text-[18px]",
                        )}
                      >
                        {article.title}
                      </h5>
                      <span className="flex items-center gap-2 md:mt-2 md:mb-2 text-text">
                        <p className="link-hover-animation group-hover:link-hovered-animation subtitle-bold text-text">
                          Read more
                        </p>
                        <ArrowRight className="w-4 h-4 text-text transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionTransition>
    </>
  );
};

export default Insights;
