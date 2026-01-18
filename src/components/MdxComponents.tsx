import { ReactNode } from "react";

/**
 * Custom components for MDX rendering
 * These components are provided to the MDX context for styling
 */
export const MdxComponents = {
  // Headings
  h1: (props: any) => <h1 className="responsive-h1" {...props} />,
  h2: (props: any) => (
    <h2
      className="mt-6 mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="mt-5 mb-2 text-2xl font-bold text-gray-900 dark:text-white"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="mt-4 mb-2 text-xl font-semibold text-gray-900 dark:text-white"
      {...props}
    />
  ),
  h5: (props: any) => (
    <h5
      className="mt-3 mb-2 text-lg font-semibold text-gray-900 dark:text-white"
      {...props}
    />
  ),
  h6: (props: any) => (
    <h6
      className="mt-2 mb-2 text-base font-semibold text-gray-900 dark:text-white"
      {...props}
    />
  ),

  // Paragraph
  p: (props: any) => <p className="mb-4 text-text-neutral" {...props} />,

  // Lists
  ul: (props: any) => (
    <ul
      className="mb-4 ml-6 list-disc space-y-2 text-text-neutral"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="mb-4 ml-6 list-decimal space-y-2 text-text-neutral"
      {...props}
    />
  ),
  li: (props: any) => <li className="text-base leading-7" {...props} />,

  // Code blocks
  pre: (props: any) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 dark:bg-gray-950"
      {...props}
    />
  ),
  code: (props: any) => {
    const isInline = !props.className?.includes("language-");

    if (isInline) {
      return (
        <code
          className="rounded bg-gray-200 px-2 py-1 font-mono text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          {...props}
        />
      );
    }

    return <code className="text-sm text-gray-100" {...props} />;
  },

  // Blockquote
  blockquote: (props: any) => (
    <blockquote
      className="mb-4 border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),

  // Horizontal rule
  hr: (props: any) => <hr className="mb-4 border-[#232B34]" {...props} />,

  // Tables
  table: (props: any) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  thead: (props: any) => (
    <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
  ),
  th: (props: any) => (
    <th
      className="border border-gray-300 px-4 py-2 text-left font-semibold dark:border-gray-700"
      {...props}
    />
  ),
  tr: (props: any) => (
    <tr className="border-b border-gray-300 dark:border-gray-700" {...props} />
  ),
  td: (props: any) => (
    <td
      className="border border-gray-300 px-4 py-2 dark:border-gray-700"
      {...props}
    />
  ),

  // Links
  a: ({
    children,
    href,
    ...props
  }: {
    children: ReactNode;
    href?: string;
    [key: string]: any;
  }) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
      {...props}
    >
      {children}
    </a>
  ),

  // Images
  img: (props: any) => (
    <img className="mb-4 max-w-full rounded-lg" alt="" {...props} />
  ),
};
