import BentoGrid from "./BentroGrid";
import "./Bento.css";

const BentoSection = () => {
  return (
    <>
      <section className="flex min-h-screen w-full flex-col pb-32 pt-24 justify-center items-center">
        <BentoGrid />
      </section>
    </>
  );
};

export default BentoSection;
