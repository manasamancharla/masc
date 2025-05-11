import type { SVGProps } from "react";
import { cn } from "../../lib/utils";

export function TechStack({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M5.28615 8.69231L1 11L5.28615 13.3077M5.28615 8.69231L11 11.7692L16.7138 8.69231M5.28615 8.69231L1 6.38462L11 1L21 6.38462L16.7138 8.69231M5.28615 13.3077L1 15.6154L11 21L21 15.6154L16.7138 13.3077M5.28615 13.3077L11 16.3846L16.7138 13.3077M16.7138 8.69231L21 11L16.7138 13.3077"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
