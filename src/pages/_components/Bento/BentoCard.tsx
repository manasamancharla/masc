import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";

type BentoCardProps = {
  children: ReactNode;
  padding?: boolean;
  noBackground?: boolean;
  gridStyles?: string;
  className?: string;
};

const BentoCard = ({
  children,
  gridStyles,
  padding = true,
  noBackground = false,
  className,
}: BentoCardProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden relative",
        "flex flex-col items-start gap-3",
        padding && "px-4 py-6",
        !noBackground && "gradient-border gradient-bgColor rounded-2xl",
        gridStyles,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default BentoCard;
