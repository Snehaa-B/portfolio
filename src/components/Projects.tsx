import React, { useState } from 'react';
import { Github, ExternalLink, Star, Calendar, Tag } from 'lucide-react';
import netflixImg from './netflix.png';
import quizImg from './Quiz.png';
import todoImg from './todo.png';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Todo App",
      description: "A comprehensive todo app designed to help users manage their tasks and stay organized. Features include task creation, editing, deletion, and completion tracking. Built with React and TypeScript, the app provides a clean and intuitive user interface for seamless task management.",
      image: todoImg,
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],  
      github: "https://github.com/Snehaa-B/todo_mern_project",
      live: "https://mern-todo-project-bna7.onrender.com/",
      featured: true,
      category: "fullstack",
      status: "completed"
    },
    {
      title: "Netflix Clone",
      description: "Assisted in curating and organizing content for the streaming platform. Worked on the backend to ensure smooth functionality and user experience.",
      image: netflixImg,
      technologies: ["React.js", "Javascript,", "SCSS", "Node.js"],
      github: "https://github.com/Snehaa-B/netflix_clone",
      live: "https://netflix-clone-1ujt.onrender.com/",
      featured: true,
      category: "fullstack",
      status: "completed",
    },
    {
      title: "QuizApp",
      description: "This project highlights expertise in ReactJS and front-end development, focusing on interactive user experiences.",
      image: quizImg,
      technologies: ["React.js", "Javascript", "CSS"],
      github: "https://github.com/Snehaa-B/QuizApp",
      live: "#",
      featured: false,
      category: "frontend",
      status: "completed"
    }
    // {
    //   title: "E-Commerce Platform",
    //   description: "A complete e-commerce solution with product catalog, shopping cart, payment integration, order management, and admin dashboard. Features include user authentication, inventory tracking, and sales analytics.",
    //   image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   technologies: ["React", "Node.js", "Stripe", "MongoDB", "JWT", "Cloudinary"],
    //   github: "https://github.com/Snehaa-B",
    //   live: "#",
    //   featured: false,
    //   category: "fullstack",
    //   status: "completed",
    //   date: "2023"
    // },
    // {
    //   title: "Portfolio Website",
    //   description: "A responsive portfolio website showcasing projects, skills, and experience. Built with modern web technologies and optimized for performance and accessibility.",
    //   image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    //   github: "https://github.com/Snehaa-B",
    //   live: "#",
    //   featured: false,
    //   category: "frontend",
    //   status: "completed",
    //   date: "2024"
    // },
    // {
    //   title: "Algorithm Visualizer",
    //   description: "An interactive tool for visualizing sorting and pathfinding algorithms. Helps students understand algorithmic concepts through visual representation and step-by-step execution.",
    //   image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   technologies: ["JavaScript", "Canvas API", "CSS3", "Algorithms"],
    //   github: "https://github.com/Snehaa-B",
    //   live: "#",
    //   featured: false,
    //   category: "algorithms",
    //   status: "completed",
    //   date: "2023"
    // }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and problem-solving abilities
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    filter === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 ${
                project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-0' : 'flex flex-col'
              } ${index % 2 === 1 && project.featured ? 'lg:grid-cols-2' : ''}`}
            >
              <div className={`${project.featured ? 'order-1' : ''} ${index % 2 === 1 && project.featured ? 'lg:order-2' : ''} relative overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className={`p-8 ${project.featured ? 'order-2' : ''} ${index % 2 === 1 && project.featured ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  {project.featured && (
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={14} />
                    {project.date}
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(project.status)}`}>
                    {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                    >
                      <Tag size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105"
                  >
                    <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-200" />
                    Code
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Snehaa-B"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            View All Projects on GitHub
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;