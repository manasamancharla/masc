import type { SVGProps } from "react";
import { cn } from "../../lib/utils";

export function List({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M9 3H3V9H9V3Z" fill="currentColor" />
      <path d="M9 15H3V21H9V15Z" fill="currentColor" />
      <path d="M3 27H9V33H3V27Z" fill="currentColor" />
      <path d="M9 39H3V45H9V39Z" fill="currentColor" />
      <path d="M45 3H15V9H45V3Z" fill="currentColor" />
      <path d="M45 15H15V21H45V15Z" fill="currentColor" />
      <path d="M15 27H45V33H15V27Z" fill="currentColor" />
      <path d="M45 39H15V45H45V39Z" fill="currentColor" />
    </svg>
  );
}
