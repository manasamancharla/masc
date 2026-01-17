import RayLight from "@/components/RayLight/RayLight";
import PageTransition from "@/components/ui/PageTransition";
import BlogContent from "./_components/BlogContent/BlogContent";

const Blog = () => {
  return (
    <>
      <PageTransition>
        <div className="absolute -z-10 h-screen w-screen max-w-full overflow-hidden min-[2048px]:max-w-[2048px]">
          <RayLight type="primary" className="left-[550px] -top-[100px]" />
        </div>
        <main className="wrapper">
          <BlogContent />
        </main>
      </PageTransition>
    </>
  );
};

export default Blog;
