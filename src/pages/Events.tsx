import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: "Web Development Workshop",
      date: "2024-04-15",
      location: "San Francisco, CA",
      description: "Join us for an intensive workshop on modern web development...",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      tags: ["Workshop", "Web Dev", "React"]
    },
    {
      title: "Tech Conference 2024",
      date: "2024-05-20",
      location: "New York, NY",
      description: "Annual tech conference featuring industry leaders...",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      tags: ["Conference", "Networking", "Tech"]
    },
    // Add more events as needed
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Events</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="flex items-center space-x-4 text-gray-400 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
              <p className="text-gray-400 mb-6">{event.description}</p>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, tagIndex) => (
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