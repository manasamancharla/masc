import { cn } from "../lib/utils";

import { Github } from "./icons/Github";
import { Linkedin } from "./icons/Linkedin";
import { Mail } from "./icons/Mail";
import { Medium } from "./icons/Medium";

const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/manasamancharla",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/manas-amancharla/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    url: "mailto:amancharlamanas@gmail.com",
    label: "Email",
  },
  {
    icon: Medium,
    url: "https://medium.com/@manasamancharla11",
    label: "Medium",
  },
];

const Footer = () => {
  return (
    <footer className={cn("mt-auto mb-2 w-full border-t-1 border-[#232B34]")}>
      <div className="wrapper">
        <div className="w-full flex items-center justify-between p-2">
          <p className="footnote-regular text-text-neutral">
            © {new Date().getFullYear()} Manas. All rights reserved.
          </p>
          <div className="inline-flex items-center justify-end gap-2 p-1 self-stretch">
            {socialLinks.map(({ icon: Icon, url, label }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-text-neutral hover:text-accent transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
