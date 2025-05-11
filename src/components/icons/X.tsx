import type { SVGProps } from "react";
import { cn } from "../../lib/utils";

export function X({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M41.106 2L2.89399 42M33.5109 41.4853L2.3045 4.15191C1.57243 3.27611 2.24317 2 3.4356 2H9.35791C9.80009 2 10.2175 2.18996 10.489 2.51476L41.6954 39.848C42.4277 40.724 41.7568 42 40.5643 42H34.6422C34.1999 42 33.7824 41.81 33.5109 41.4853Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
