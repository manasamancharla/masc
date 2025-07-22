import { Talk } from "../../../components/icons/Talk";
import { Button } from "../../../components/ui/Button";
import { Linkedin } from "../../../components/icons/Linkedin";
import { Mail } from "../../../components/icons/Mail";

import SectionTransition from "@/components/ui/SectionTransition";

const links = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/manas-amancharla/",
    label: "LinkedIn",
  },
  { icon: Mail, url: "mailto:amancharlamanas@gmail.com", label: "Email" },
];

const Contact = () => {
  return (
    <>
      <SectionTransition className="flex min-h-screen w-full flex-col gap-3 pb-32 pt-24 justify-center items-center">
        <div className="flex p-6 items-center justify-center gap-2 rounded-[100px] border-2 border-text">
          <Talk />
        </div>
        <h3 className="responsive-h3 text-text max-w-[593px] text-center">
          Excited to collaborate on our next coding project—let's talk!
        </h3>
        <div className="flex p-6 items-center justify-center py-2 gap-8">
          {links.map(({ icon: Icon, url, label }, i) => (
            <a
              key={i}
              href={url}
              target={
                url.startsWith("http") || url.startsWith("mailto:")
                  ? "_blank"
                  : "_self"
              }
              rel="noreferrer"
              aria-label={label}
            >
              <Button intent="cta" className="cursor-pointer">
                <Icon />
              </Button>
            </a>
          ))}
        </div>
      </SectionTransition>
    </>
  );
};

export default Contact;
