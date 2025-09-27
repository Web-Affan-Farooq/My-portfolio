"use client";

import { useProjects } from "@/stores/projects";
import { useRouter, useParams } from "next/navigation";
import { useMemo, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

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

  const components = {
    h1: (props: any) => <h1 className="text-[30px] max-sm:text-[25px] font-bold mb-6 text-white" {...props} />,
    h2: (props: any) => <h2 className="text-xl font-bold mb-6 text-white" {...props} />,
    h3: (props: any) => <h3 className="text-lg font-bold mb-6 text-white" {...props} />,
    h4: (props: any) => <h4 className="text-md font-bold mb-6 text-white" {...props} />,
    h5: (props: any) => <h5 className="text-sm font-bold mb-6 text-white" {...props} />,
    p: (props: any) => <p className="text-gray-500 text-sm font-firacode leading-relaxed mb-4" {...props} />,
    a: (props: any) => (
      <a
        className="text-blue-600 hover:text-blue-800 underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    code({ inline, className, children, ...props }: any) {
      return inline ? (
        <code className="bg-gray-200 text-pink-600 px-1 py-0.5 rounded" {...props}>
          {children}
        </code>
      ) : (
        <pre className="bg-black text-green-400 rounded-xl overflow-x-auto">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      );
    },
    blockquote: (props: any) => (
      <blockquote className="border-l-4 border-indigo-400 pl-4 italic text-gray-600 my-4" {...props} />
    ),
    b: (props: any) => (
      <blockquote className="border-l-4 border-indigo-400 pl-4 italic text-gray-200 my-4" {...props} />
    ),
    ul: (props: any) => <ul className="list-disc list-inside text-gray-700" {...props} />,
  };

  return (
    <main className="pt-[140px]">
      <article className="w-full m-auto py-[50px] sm:px-[100px] max-sm:px-[30px]">
        <section className="prose prose-lg prose-slate dark:prose-invert">
          {/* <CaseStudy content={requiredProject.project_casestudy} /> */}

          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]} components={components}>
            {requiredProject.project_casestudy}
          </Markdown>
        </section>
      </article>
    </main>
  );
};

export default DynamicCasePage;