'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/project1.jpg',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of your second project',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/project2.jpg',
      link: '#',
    },
    // Add more projects as needed
  ];

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
