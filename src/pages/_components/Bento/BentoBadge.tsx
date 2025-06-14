import type { JSX, SVGProps } from "react";
import { cn } from "../../../lib/utils";
import { useIsDarkTheme } from "@/hooks/useTheme";

type SVGComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

type BentoBadgeProps = {
  icon: SVGComponent;
  label: string;
  className?: string;
};

const BentoBadge = ({ icon: Icon, label, className = "" }: BentoBadgeProps) => {
  const isDark = useIsDarkTheme();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-[7px] p-2 relative flex-[0_0_auto]",
        className,
      )}
    >
      <div
        className={cn(
          "w-10 h-10 flex justify-center items-center rounded-lg",
          isDark ? "bg-black" : "bg-white border-b-2 border-r-2",
        )}
      >
        <Icon className={cn("w-5 h-5", isDark ? "text-white" : "text-black")} />
      </div>
      <p className="body-bold text-text-neutral">{label}</p>
    </div>
  );
};

export default BentoBadge;
