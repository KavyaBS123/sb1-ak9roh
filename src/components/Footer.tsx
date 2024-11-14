import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Sarthak</h3>
            <p className="text-gray-400">Building digital experiences</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sarthak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}