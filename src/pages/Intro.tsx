import RayLight from "../components/RayLight/RayLight";
import Hero from "./_components/Hero/Hero";
import Bento from "./_components/Bento/BentoSection";
import Insights from "./_components/Insights/Insights";
import Projects from "./_components/Projects/Projects";
import Contact from "./_components/Contact/Contact";
import PageTransition from "@/components/ui/PageTransition";
import Chatbot from "@/components/Chatbot";

const Intro = () => {
  return (
    <>
      <PageTransition>
        <div className="absolute -z-10 h-screen w-screen max-w-full overflow-hidden min-[2048px]:max-w-[2048px]">
          <RayLight className="h-[196px] w-[1192px] rotate-[-16deg] opacity-70 -top-[150px] -left-[40px] md:opacity-60 md:rotate-[-15deg] md:left-[140px] lg:rotate-[-2deg]" />
          <RayLight className="h-[388px] w-[1758px] rotate-[45deg] opacity-35 -left-[420px] -top-[440px] md:rotate-[40deg] lg:opacity-50 lg:-left-[200px]" />
          <RayLight className="h-[392px] w-[992px] rotate-[-15deg] opacity-42 -top-[15px] left-[550px] lg:h-[492px] lg:w-[1192px] lg:rotate-[-32deg] lg:opacity-50 lg:-top-[280px] lg:left-[960px]" />
        </div>
        <main className="wrapper">
          <Hero />
          <Bento />
          <Insights />
          <Projects />
          <Contact />
          <Chatbot />
        </main>
      </PageTransition>
    </>
  );
};

export default Intro;
