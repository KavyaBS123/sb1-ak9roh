import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Building Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl">
            Full Stack Developer passionate about creating innovative solutions and memorable user experiences.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors text-lg"
          >
            View Projects <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl">
                <img
                  src={`https://images.unsplash.com/photo-167${item}586432-${item}b8c9a1e1?w=800`}
                  alt={`Project ${item}`}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                    <p className="text-gray-300">Brief project description goes here</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}