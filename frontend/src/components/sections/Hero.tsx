import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

import TechBadge from "../ui/TechBadge";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-5xl text-center">

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-lg font-medium text-cyan-400"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-6 text-6xl font-black tracking-tight text-white md:text-8xl"
        >
          {profile.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-2xl font-light text-gray-300 md:text-4xl"
        >
          {profile.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mx-auto mb-6 max-w-3xl text-xl leading-9 text-gray-300"
        >
          {profile.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-gray-400"
        >
          {profile.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {profile.tech.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-black transition duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30">
            View Projects
            <ArrowRight size={20} />
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-gray-600 px-8 py-4 text-lg font-medium text-white transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10">
            Download Resume
            <Download size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
