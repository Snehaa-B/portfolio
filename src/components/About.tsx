import React from 'react';
import { Code2, BookOpen, Brain, Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Proficient in modern web technologies including React, Node.js, and database management"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Strong algorithmic thinking and problem solving skills"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring emerging technologies and industry best practices"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Experience in collaborative development and open source contributions"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Creating practical solutions for real-world problems through technology"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Consistent performance in Computer Science Engineering curriculum"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover my journey, skills, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate final year Electrical and Electronics Engineering student with a deep love 
                for technology and innovation. My journey in software development has been driven 
                by curiosity and a desire to create meaningful solutions that make a difference.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Throughout my academic journey, I've developed expertise in full-stack development, 
                with hands-on experience in modern frameworks and technologies. I enjoy the entire 
                development lifecycle - from conceptualizing ideas to deploying production-ready applications.
              </p>

              
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'Express.js', 'Git'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 hover:scale-105"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;