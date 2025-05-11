import type { SVGProps } from "react";
import { cn } from "../../lib/utils";

export function About({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M1 21V19.75C1 14.9175 5.47716 11 11 11M11 11C16.5229 11 21 14.9175 21 19.75V21M11 11C14.1559 11 16.7143 8.76138 16.7143 6C16.7143 3.23857 14.1559 1 11 1C7.84409 1 5.28571 3.23857 5.28571 6C5.28571 8.76138 7.84409 11 11 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
