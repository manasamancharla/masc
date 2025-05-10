import type { JSX, SVGProps } from "react";
import { cn } from "../../../lib/utils";

type SVGComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

type BentoBadgeProps = {
  icon: SVGComponent;
  label: string;
  className?: string;
};

const BentoBadge = ({ icon: Icon, label, className = "" }: BentoBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-[7px] p-2 relative flex-[0_0_auto]",
        className,
      )}
    >
      <div className="w-10 h-10 bg-[#000000] flex justify-center items-center rounded-lg">
        <Icon className="w-5 h-5" />
      </div>
      <p className="body-bold text-text-neutral">{label}</p>
    </div>
  );
};

export default BentoBadge;
