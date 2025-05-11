import type { SVGProps } from "react";
import { cn } from "../../lib/utils";

export function Commit({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path
        d="M9 7C9 10.3138 8.1046 13 7 13C5.8954 13 5 10.3138 5 7M9 7C9 3.6862 8.1046 1 7 1C5.8954 1 5 3.6862 5 7M9 7H13M5 7H1"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
