import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack application built with React and Node.js",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      github: "https://github.com",
      demo: "https://example.com",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project Two",
      description: "Real-time chat application with WebSocket integration",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      github: "https://github.com",
      demo: "https://example.com",
      tags: ["WebSocket", "Express", "React"]
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Projects</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-purple-900/30 rounded-full text-sm text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}