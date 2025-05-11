import type { SVGProps } from "react";
import { cn } from "../../lib/utils";

export function ArrowRight({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M17.9436 8.75L21.6936 12.5M21.6936 12.5L17.9436 16.25M21.6936 12.5H3.6936"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
