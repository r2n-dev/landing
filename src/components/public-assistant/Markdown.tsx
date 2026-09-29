import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const SAFE_LINK = /^(https?:|mailto:)/i;

const components: Components = {
  p: (props) => <p className="[&:not(:first-child)]:mt-2" {...withoutNode(props)} />,
  h1: (props) => <p className="mt-3 font-semibold first:mt-0" {...withoutNode(props)} />,
  h2: (props) => <p className="mt-3 font-semibold first:mt-0" {...withoutNode(props)} />,
  h3: (props) => <p className="mt-3 font-semibold first:mt-0" {...withoutNode(props)} />,
  h4: (props) => <p className="mt-3 font-semibold first:mt-0" {...withoutNode(props)} />,
  h5: (props) => <p className="mt-3 font-semibold first:mt-0" {...withoutNode(props)} />,
  h6: (props) => <p className="mt-3 font-semibold first:mt-0" {...withoutNode(props)} />,
  ul: (props) => <ul className="mt-2 list-disc space-y-1 ps-5 first:mt-0" {...withoutNode(props)} />,
  ol: (props) => <ol className="mt-2 list-decimal space-y-1 ps-5 first:mt-0" {...withoutNode(props)} />,
  blockquote: (props) => (
    <blockquote className="mt-2 border-s-2 border-border ps-3 text-muted-foreground" {...withoutNode(props)} />
  ),
  hr: () => <hr className="my-3 border-border" />,
  code: (props) => <code className="rounded-sm bg-surface-hover px-1 py-0.5 font-mono text-xs" {...withoutNode(props)} />,
  pre: (props) => (
    <pre
      className="mt-2 overflow-x-auto rounded-md bg-surface-hover p-2 text-xs [&_code]:bg-transparent [&_code]:p-0"
      {...withoutNode(props)}
    />
  ),
  table: (props) => (
    <div className="mt-2 overflow-x-auto">
      <table className="w-full border-collapse text-xs" {...withoutNode(props)} />
    </div>
  ),
  th: (props) => <th className="border border-border px-2 py-1 text-start font-semibold" {...withoutNode(props)} />,
  td: (props) => <td className="border border-border px-2 py-1" {...withoutNode(props)} />,
  a: ({ href, children }) =>
    href && SAFE_LINK.test(href) ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {children}
      </a>
    ) : (
      <span>{children}</span>
    ),
};

/** Drops react-markdown's `node` prop so it never reaches the DOM. */
function withoutNode<T extends { node?: unknown }>(props: T): Omit<T, "node"> {
  const rest = { ...props };
  delete rest.node;
  return rest;
}

interface MarkdownProps {
  children: string;
}

/** Renders assistant chat text as basic markdown (GFM, no raw HTML, no images). */
export function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components} disallowedElements={["img"]}>
      {children}
    </ReactMarkdown>
  );
}
