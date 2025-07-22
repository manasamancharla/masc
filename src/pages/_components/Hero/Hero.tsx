import { motion } from "motion/react";

import { LinkButton } from "@/components/ui/LinkButton";
import { Github } from "../../../components/icons/Github";
import { Linkedin } from "../../../components/icons/Linkedin";
import { Mail } from "../../../components/icons/Mail";
// import { Resume } from "../../../components/icons/Resume";

import SectionTransition from "@/components/ui/SectionTransition";

const links = [
  { icon: Github, url: "https://github.com/manasamancharla", label: "GitHub" },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/manas-amancharla/",
    label: "LinkedIn",
  },
  { icon: Mail, url: "mailto:amancharlamanas@gmail.com", label: "Email" },
  // { icon: Resume, url: "/resume.pdf", label: "Resume" },
];

const Hero = () => {
  return (
    <>
      <SectionTransition className="flex min-h-screen w-full flex-col gap-3 pb-32 pt-24 justify-center">
        <motion.h1
          className="responsive-h1"
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hi, I’m Manas. <br /> A Software engineer.
        </motion.h1>

        <motion.p
          className="text-text-neutral max-w-xl body-bold"
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          I started with JavaScript but adaptable across technologies, I thrive
          on problem-solving and building impactful solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-6 md:gap-8 px-0 py-2.5 relative"
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {links.map(({ icon: Icon, url, label }, i) => (
            <LinkButton
              key={i}
              href={url}
              target={
                url.startsWith("http") || url.startsWith("mailto:")
                  ? "_blank"
                  : "_self"
              }
              rel="noreferrer"
              ariaLabel={label}
              intent="cta"
              className="cursor-pointer"
            >
              <Icon />
            </LinkButton>
          ))}
        </motion.div>
      </SectionTransition>
    </>
  );
};

export default Hero;
