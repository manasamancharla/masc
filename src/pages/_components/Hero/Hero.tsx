import { Button } from "../../../components/ui/Button";
import { Github } from "../../../components/icons/Github";
import { Linkedin } from "../../../components/icons/Linkedin";
import { Mail } from "../../../components/icons/Mail";
import { Resume } from "../../../components/icons/Resume";

const Hero = () => {
  return (
    <>
      <section className="flex min-h-screen w-full flex-col gap-3 pb-32 pt-24 justify-center">
        <h1 className="responsive-h1">
          Hi, I’m Manas. <br /> A Software engineer.
        </h1>
        <p className="text-text-neutral max-w-xl body-regular">
          I started with JavaScript but adaptable across technologies, I thrive
          on problem-solving and building impactful solutions.
        </p>
        <div className="flex flex-wrap items-center gap-6 md:gap-8 px-0 py-2.5 relative">
          <Button intent="cta">
            <Github />
          </Button>
          <Button intent="cta">
            <Linkedin />
          </Button>
          <Button intent="cta">
            <Mail />
          </Button>
          <Button intent="cta">
            <Resume />
          </Button>
        </div>
      </section>
    </>
  );
};

export default Hero;
