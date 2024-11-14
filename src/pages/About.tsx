import React from 'react';
import { Code, Laptop, Rocket } from 'lucide-react';

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS',
    'Docker', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Next.js', 'TailwindCSS'
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                I'm a Full Stack Developer with a passion for building innovative web applications
                and solving complex problems through elegant solutions.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                With expertise in modern web technologies and a keen eye for design,
                I create seamless digital experiences that make a difference.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Code className="w-8 h-8 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                  <p className="text-gray-400">Writing maintainable and scalable code is my priority</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Laptop className="w-8 h-8 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Modern Tech Stack</h3>
                  <p className="text-gray-400">Using the latest technologies to build better solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Rocket className="w-8 h-8 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance First</h3>
                  <p className="text-gray-400">Optimizing for the best possible user experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-purple-900/30 rounded-full text-purple-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12">Journey</h2>
          <div className="space-y-12">
            {[2023, 2022, 2021].map((year) => (
              <div key={year} className="relative pl-8 border-l-2 border-purple-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-400" />
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">{year}</h3>
                  <p className="text-gray-400">
                    Significant milestone or achievement from {year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}