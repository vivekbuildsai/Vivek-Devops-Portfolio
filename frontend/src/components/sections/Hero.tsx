import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-cyan-400">
          Hello, I'm
        </p>

        <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-white">
          Vivek Singh
        </h1>

        <h2 className="mb-6 text-2xl text-gray-300">
          DevOps Engineer • Kubernetes • Docker • AWS
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-400">
          I build scalable cloud infrastructure, automate deployments,
          and create production-ready DevOps solutions using Kubernetes,
          Docker, Terraform, AWS and CI/CD.
        </p>

        <button className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400">
          View Projects
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
