import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function Shorts() {
  const shorts = [
    {
      title: "Understanding React Hooks",
      date: "2024-03-15",
      readTime: "5 min",
      content: "A quick guide to React's useState and useEffect hooks...",
      tags: ["React", "Hooks", "JavaScript"]
    },
    {
      title: "CSS Grid vs Flexbox",
      date: "2024-03-10",
      readTime: "3 min",
      content: "When to use Grid vs Flexbox in your layouts...",
      tags: ["CSS", "Layout", "Web Design"]
    },
    // Add more shorts as needed
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Shorts</h1>
        
        <div className="grid gap-8">
          {shorts.map((short, index) => (
            <article
              key={index}
              className="border border-purple-900/30 rounded-xl p-8 hover:border-purple-400 transition-colors"
            >
              <div className="flex items-center space-x-4 text-gray-400 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(short.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {short.readTime}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">{short.title}</h2>
              <p className="text-gray-400 mb-6">{short.content}</p>
              <div className="flex flex-wrap gap-2">
                {short.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-purple-900/30 rounded-full text-sm text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}