import React, { useState, useRef, useEffect } from 'react';
import { Code, Database, Globe, Smartphone, GitBranch, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 92, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Express.js", level: 83, color: "bg-gray-700" },
        { name: "RESTful APIs", level: 87, color: "bg-purple-500" },
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "MongoDB", level: 82, color: "bg-green-500" },
        { name: "PostgreSQL", level: 75, color: "bg-blue-600" },
        { name: "Firebase", level: 80, color: "bg-yellow-500" },
        { name: "Supabase", level: 77, color: "bg-green-600" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 90, color: "bg-gray-800" },
        { name: "AWS", level: 65, color: "bg-orange-500" },
        { name: "Vercel", level: 88, color: "bg-black" }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Brain className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "TypeScript", level: 78, color: "bg-blue-500" },
        { name: "C++", level: 72, color: "bg-blue-700" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                        style={{ 
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Machine Learning', 'DevOps', 'Cloud Computing'].map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
