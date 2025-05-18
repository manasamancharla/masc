import { useState, useEffect } from "react";

import { ArrowRight } from "../../../components/icons/ArrowRight";
import { fetchLatestMediumArticles, Article } from "../../../api";

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
      <section className="flex min-h-screen w-full flex-col gap-3 pb-32 pt-24 justify-center">
        <h2 className="responsive-h2 max-w-[593px] self-stretch text-text">
          Sharing My Experiences and Insights
        </h2>
        <p className="body-bold text-text-neutral max-w-[593px] self-stretch">
          Learning never stops, and neither does building. I share my progress
          as I explore new technologies and projects
        </p>

        {articles.length > 0 && (
          <div className="grid grid-cols-2 gap-4 h-[470px] px-2 py-4">
            <div className="flex flex-col items-start gap-2 flex-1">
              {articles[0].thumbnail && (
                <img
                  src={articles[0].thumbnail}
                  alt="blog-img"
                  className="self-stretch h-[256px]"
                />
              )}
              <p className="subtitle-bold text-text-neutral">
                {articles[0].pubDate}
              </p>
              <h4 className="heading-4-bold text-text self-stretch">
                {articles[0].title}
              </h4>
              <p className="body-regular text-text-neutral self-stretch">
                {articles[0].description}
              </p>
              <a
                className="flex justify-center items-center gap-2"
                href={articles[0].link}
                target="_blank"
                rel="noreferrer"
              >
                <p className="subtitle-bold text-text">Read more</p>
                <ArrowRight className="w-4 h-4 text-text" />
              </a>
            </div>

            <div className="grid grid-rows-2 gap-4">
              {articles.slice(1).map((article, index) => (
                <div
                  key={index}
                  className="flex items-start self-stretch gap-3 flex-1"
                >
                  {article.thumbnail && (
                    <img
                      src={article.thumbnail}
                      alt="Article Thumbnail"
                      className="self-stretch h-full w-[227px]"
                    />
                  )}
                  <div className="flex flex-col items-start self-stretch gap-2 flex-1">
                    <p className="subtitle-bold text-text-neutral">
                      {article.pubDate}
                    </p>
                    <h5 className="heading-5-bold text-text self-stretch">
                      {article.title}
                    </h5>
                    <a
                      href={article.link}
                      className="flex justify-center items-center gap-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="subtitle-bold text-text">Read more</p>
                      <ArrowRight className="w-4 h-4 text-text" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Insights;
