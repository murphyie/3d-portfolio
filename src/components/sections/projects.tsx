"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import projects, { Project } from "@/data/projects";

const ProjectsSection = () => {
  const [selectedMedia, setSelectedMedia] = useState<Project | null>(null);

  return (
    <SectionWrapper
      id="projects"
      className="relative z-20 max-w-7xl mx-auto py-10 px-4"
    >
      <SectionHeader id="projects" title="Projects" />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedMedia(project)}
          >
            {/* Media Container */}
            <div className="relative w-full h-[220px]">

              {project.type === "image" ? (
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <video
                  src={project.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              )}

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                {project.title}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  width={1920}
                  height={1080}
                  className="max-h-[90vh] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-h-[90vh] rounded-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </SectionWrapper>
  );
};

export default ProjectsSection;
