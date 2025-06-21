import { Talk } from "../../../components/icons/Talk";
import { Button } from "../../../components/ui/Button";
import { Linkedin } from "../../../components/icons/Linkedin";
import { Mail } from "../../../components/icons/Mail";

import SectionTransition from "@/components/ui/SectionTransition";

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
          <Button intent="cta">
            <Linkedin />
          </Button>
          <Button intent="cta">
            <Mail />
          </Button>
        </div>
      </SectionTransition>
    </>
  );
};

export default Contact;
