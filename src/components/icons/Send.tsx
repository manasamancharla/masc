import type { SVGProps } from "react";
import { cn } from "../../lib/utils";

export function Send({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M13 24L7.5 7.5L42.3333 24M13 24L7.5 40.5L42.3333 24M13 24H42.3333"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
