import { Project } from "@/lib/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProjectTitle = ({ project }: { project: Project }) => {
  return (
    <div className="space-y-4">
      <h2 className=" font-bold text-gray-1200 mb-2">
        {project.title}
      </h2>
      <div className="text-text-paragraph leading-relaxed max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold text-gray-1200 mt-8 mb-4 border-b border-border pb-2">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-semibold text-gray-1200 mt-12 mb-3">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-medium text-gray-1200 mt-4 mb-2">
                {children}
              </h3>
            ),
            p: ({ children }) => <p className="mb-4 leading-7 ">{children}</p>,
            ul: ({ children }) => (
              <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside mb-4 space-y-1 pl-4">
                {children}
              </ol>
            ),
            li: ({ children }) => <li className="">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-primary pl-4 py-2 italic my-4 bg-muted/50 rounded-r-md">
                {children}
              </blockquote>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-primary hover:underline font-medium underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            code: ({ children, className, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || "");
              const isInline = !match && !children?.toString().includes("\n");
              return isInline ? (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-gray-1200 border border-border">
                  {children}
                </code>
              ) : (
                <div className="relative my-4 rounded-lg overflow-hidden border border-border bg-muted/50">
                  <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                </div>
              );
            },
            table: ({ children }) => (
              <div className="my-6 w-full overflow-y-auto rounded-lg border border-border">
                <table className="w-full text-sm">{children}</table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-muted text-gray-1100 border-b border-border">
                {children}
              </thead>
            ),
            tbody: ({ children }) => (
              <tbody className="divide-y divide-border bg-card">
                {children}
              </tbody>
            ),
            tr: ({ children }) => (
              <tr className="transition-colors hover:bg-muted/50">
                {children}
              </tr>
            ),
            th: ({ children }) => (
              <th className="px-4 py-3 text-left font-medium align-middle cursor-default">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-3 align-middle">{children}</td>
            ),
            hr: () => <hr className="my-8 border-border" />,
            img: ({ src, alt }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt}
                className="rounded-lg border border-border my-6 w-full max-h-[500px] object-cover"
              />
            ),
          }}
        >
          {project.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectTitle;
