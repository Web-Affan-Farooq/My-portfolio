"use client";

// _____ Hooks ...
import { useProjects } from "@/stores/projects";
import { useParams, useRouter } from "next/navigation";
import React, { useMemo, useEffect } from "react";

// _____ Libraries ...
import Markdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DynamicCasePage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { projects } = useProjects();

  const requiredProject = useMemo(
    () => projects.find((project) => project._id === id),
    [projects, id]
  );

  useEffect(() => {
    if (!requiredProject) {
      router.push("/projects");
    }
  }, [requiredProject, router]);

  if (!requiredProject) return null; // render nothing until redirect

  const components: Components = {
    h1: (props) => (
      <h1
        className="text-3xl sm:text-4xl font-bold mb-6 text-green-light font-poppins tracking-[0.4]"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-2xl font-bold mb-6 text-green-light font-poppins tracking-[0.4]"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-xl font-bold mb-6 text-green-light font-poppins tracking-[0.4]"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="text-lg font-bold mb-6 text-green-light font-poppins tracking-[0.4]"
        {...props}
      />
    ),
    h5: (props) => (
      <h5
        className="text-base font-bold mb-6 text-green-light font-poppins tracking-[0.4]"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="text-muted-foreground text-xs sm:text-sm font-firacode leading-relaxed mb-4"
        {...props}
      />
    ),
    a: (props) => (
      <a
        className="text-accent font-semibold hover:text-accent-foreground underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    hr: (props) => <hr className="my-20" {...props} />,
    th: (props) => (
      <th className="py-2 text-light-gray font-semibold" {...props} />
    ),
    td: (props) => (
      <td
        className="text-xs sm:text-sm py-1 text-light-gray font-normal"
        {...props}
      />
    ),
    // ✅ Updated code block
    code({
      children,
      inline,
      className,
      ...props
    }: {
      inline?: boolean;
      className?: string;
      children?: React.ReactNode;
    }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          customStyle={{
            borderRadius: "0.75rem",
            padding: "1rem",
            background: "var(--dark-gray)",
            // backdropFilter: "blur(90px)",
            fontSize: "0.85rem",
          }}
          codeTagProps={{
            style: { background: "transparent" }, // kill background per line
          }}
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code
          className="text-xs sm:text-sm bg-green-light/70 text-black px-1 py-0.5 rounded font-firacode"
          {...props}
        >
          {children}
        </code>
      );
    },
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-accent pl-4 italic text-muted-foreground my-4"
        {...props}
      />
    ),
    strong: (props) => <strong className="font-bold text-faun" {...props} />,
    ul: (props) => (
      <ul
        className="list-disc list-inside text-muted-foreground text-sm sm:text-base font-opensans space-y-2 mb-4"
        {...props}
      />
    ),
    li: (props) => <li {...props} />,
  };

  return (
    <main className="pt-[50px] sm:pt-[70px]">
      <article className="max-w-4xl mx-auto py-[50px] px-6 max-sm:px-1 sm:px-24">
        <section className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <div className="pb-[20px]">
            <span className="bg-green-light/20 px-[20px] py-[8px] rounded-[50px] border border-green-light text-xs">
              🚀 Project overview
            </span>
          </div>
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSanitize]}
            components={components}
          >
            {`\n# ${requiredProject.project_name}\n\n${requiredProject.project_casestudy}`}
          </Markdown>
        </section>
      </article>
    </main>
  );
};

export default DynamicCasePage;
