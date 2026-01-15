import type { SVGProps } from "react";
import { cn } from "../../lib/utils";

export function Terraform({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <g clipPath="url(#clip0_2003_125)">
        <path
          d="M16.5613 8.53205L31.4293 16.0786V31.188L16.5613 23.6326V8.53205ZM33.0613 16.0786V31.188L47.9368 23.6326V8.53205L33.0613 16.0786ZM0.0703125 0.102051V15.2041L14.9383 22.7581V7.65605L0.0703125 0.102051ZM16.5613 40.3815L31.4293 47.937V32.8426L16.5613 25.2885V40.3815Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2003_125">
          <rect width="48" height="48" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
