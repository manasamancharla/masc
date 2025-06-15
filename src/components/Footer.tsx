import { cn } from "../lib/utils";

import { Github } from "./icons/Github";
import { Linkedin } from "./icons/Linkedin";
import { Mail } from "./icons/Mail";
import { Medium } from "./icons/Medium";

const Footer = () => {
  return (
    <>
      <footer className={cn("mt-auto mb-2 w-full border-t-1 border-[#232B34]")}>
        <div className="wrapper">
          <div className="w-full flex items-center justify-between p-2">
            <p className="footnote-regular text-text-neutral">
              © {new Date().getFullYear()} Manas. All rights reserved.
            </p>
            <div className="inline-flex items-center justify-end gap-2 p-1 self-stretch">
              <Github className="w-5 h-5 text-text-neutral" />
              <Linkedin className="w-5 h-5 text-text-neutral" />
              <Mail className="w-5 h-5 text-text-neutral" />
              <Medium className="w-5 h-5 text-text-neutral" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
