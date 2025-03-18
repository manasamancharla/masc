import type { SVGProps } from "react";

export function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M13 1V3.18182M13 22.8182V25M4.51273 4.51273L6.06182 6.06182M19.9382 19.9382L21.4873 21.4873M1 13H3.18182M22.8182 13H25M4.51273 21.4873L6.06182 19.9382M19.9382 6.06182L21.4873 4.51273M18.4545 13C18.4545 16.0125 16.0125 18.4545 13 18.4545C9.98754 18.4545 7.54545 16.0125 7.54545 13C7.54545 9.98754 9.98754 7.54545 13 7.54545C16.0125 7.54545 18.4545 9.98754 18.4545 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
