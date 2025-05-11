import type { SVGProps } from "react";
import { cn } from "../../lib/utils";

export function Medium({ className, ...props }: SVGProps<SVGSVGElement>) {
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
        d="M10.8889 42C15.7981 42 19.7778 33.0455 19.7778 22C19.7778 10.9543 15.7981 2 10.8889 2C5.97969 2 2 10.9543 2 22C2 33.0455 5.97969 42 10.8889 42Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.6667 42C31.1213 42 33.1111 33.0455 33.1111 22C33.1111 10.9543 31.1213 2 28.6667 2C26.212 2 24.2222 10.9543 24.2222 22C24.2222 33.0455 26.212 42 28.6667 42Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.7778 42C41.0051 42 42 33.0455 42 22C42 10.9543 41.0051 2 39.7778 2C38.5504 2 37.5556 10.9543 37.5556 22C37.5556 33.0455 38.5504 42 39.7778 42Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
