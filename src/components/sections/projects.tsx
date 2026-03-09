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
      className="relative max-w-7xl mx-auto py-8 z-10"
    >
      {/* Section Header */}
      <SectionHeader id="projects" title="Projects" />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="relative rounded-lg overflow-hidden cursor-pointer shadow-lg"
            style={{ aspectRatio: "3/2" }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedMedia(project)}
          >
            {/* Media */}
            {project.type === "image" ? (
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <video
                src={project.src}
                muted
                className="w-full h-full object-cover"
              />
            )}

            {/* Title Overlay - bottom-left */}
            <motion.div
              className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              {project.title}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              className="max-w-[90%] max-h-[90%] flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-full object-contain rounded-md"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full object-contain rounded-md"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProjectsSection;            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white p-10 rounded-lg text-black"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // click outside to close
            >
              <h3 className="text-xl font-bold mb-2">{selectedItem}</h3>
              <p>This is a test mjwjjdodal using Framer Motion!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SampleModalTest;
