// import RayLight from "./components/RayLight/RayLight";
import PageTransition from "@/components/ui/PageTransition";
import SectionTransition from "@/components/ui/SectionTransition";
import { motion } from "motion/react";

const Blog = () => {
  return (
    <>
      {/* <RayLight type="primary" /> */}
      <PageTransition>
        <main className="wrapper">
          <SectionTransition>
            <section className="flex h-screen flex-col items-center justify-center">
              <motion.h1
                className="responsive-h1"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                This is Blog
              </motion.h1>
            </section>
          </SectionTransition>
        </main>
      </PageTransition>
    </>
  );
};

export default Blog;
