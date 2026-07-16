import { ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-4 text-center text-5xl font-bold text-white">
        Featured Projects
      </h2>

      <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
        A selection of DevOps and cloud-native projects showcasing Kubernetes,
        Docker, CI/CD and infrastructure automation.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <h3 className="mb-4 text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mb-6 leading-8 text-gray-400">
              {project.description}
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-6">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white hover:text-cyan-400"
              >
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white hover:text-cyan-400"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
