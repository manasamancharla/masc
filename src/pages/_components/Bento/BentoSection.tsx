import BentoGrid from "./BentroGrid";
import "./Bento.css";

import SectionTransition from "@/components/ui/SectionTransition";

const BentoSection = () => {
  return (
    <>
      <SectionTransition className="flex min-h-screen w-full flex-col pb-32 pt-24 justify-center items-center">
        <BentoGrid />
      </SectionTransition>
    </>
  );
};

export default BentoSection;
