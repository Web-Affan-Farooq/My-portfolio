"use client";

import { useProjects } from "@/stores/projects";
import { useRouter, useParams } from "next/navigation";
import { useMemo } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const DynamicCasePage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { projects } = useProjects();
  const requiredProject = useMemo(() => {
    return projects.find((project) => project._id === id);
  }, [projects, id]);

  if (!requiredProject) {
    router.push("/projects");
  } else
    return (
      <main className="pt-[140px]">
        <article className="max-w-3xl w-full m-auto">
          <section className="prose prose-lg prose-slate dark:prose-invert">
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ ...props }) => (
                  <h1
                    className="text-2xl font-bold font-firacode mb-6 text-white"
                    {...props}
                  />
                ),
                h2: ({ ...props }) => (
                  <h2
                    className="text-xl font-bold font-firacode mb-6 text-white"
                    {...props}
                  />
                ),
                p: ({ ...props }) => (
                  <p
                    className="text-gray-700 leading-relaxed mb-4"
                    {...props}
                  />
                ),
                a: ({ ...props }) => (
                  <a
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
                code: ({ children, ...props }) => (
                  // inline ? (
                  //   <code
                  //     className="bg-gray-200 text-pink-600 px-1 py-0.5 rounded"
                  //     {...props}
                  //   >
                  //     {children}
                  //   </code>
                  // ) :
                  <pre className="bg-black text-green-400 p-4 rounded-xl overflow-x-auto">
                    <code {...props}>{children}</code>
                  </pre>
                ),
                blockquote: ({ ...props }) => (
                  <blockquote
                    className="border-l-4 border-indigo-400 pl-4 italic text-gray-600 my-4"
                    {...props}
                  />
                ),
                ul: ({ ...props }) => (
                  <ul
                    className="list-disc list-inside space-y-2 text-gray-700"
                    {...props}
                  />
                ),
              }}
            >
              {requiredProject.project_casestudy}
            </Markdown>
          </section>
        </article>
      </main>
    );
};

export default DynamicCasePage;
