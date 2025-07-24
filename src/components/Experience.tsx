import React from 'react';
import { Calendar, GraduationCap, Award, Code, BookOpen, Trophy, Target } from 'lucide-react';

const Experience: React.FC = () => {
  const timeline = [
    {
      type: 'education',
      title: 'Bachelor of Engineering',
      subtitle: 'Electrical and Electronics Engineering',
      organization: 'Sir M. Visvesvaraya Institute of Technology, Bangalore',
      period: '2022 - 2026',
      description: 'Currently in final year with strong academic performance. Specializing in software development, data structures, algorithms, and emerging technologies. Active participation in coding competitions and technical events.',
      icon: <GraduationCap className="w-5 h-5" />,
      achievements: [
        'Consistent academic performance throughout the program',
        'Active member of coding club and technical societies',
        'Participated in multiple hackathons and coding competitions'
      ]
    },
    {
      type: 'achievement',
      title: 'Hackathons',
      subtitle: 'NextKick',
      organization: 'Sir M. Visvesvaraya Institute of Technology, Bangalore',
      period: '2025',
      description: 'Contributed to an AI-based football scouting platform  using Node.js, Prisma, PostgreSQL, and YOLOv8 +Deep SORT for real-time player tracking and analysis.',
      icon: <Trophy className="w-5 h-5" />
    },
    {
      type: 'learning',
      title: 'Open Source Contributions',
      subtitle: 'Community Developer',
      organization: 'GitHub & Open Source Projects',
      period: '2023 - Present',
      description: 'Contributing to open source projects and building a portfolio of diverse development projects. Focused on web development, documentation, and community engagement.',
      icon: <Target className="w-5 h-5" />,
      achievements: [
        'Multiple contributions to open source repositories',
        'Built and maintained personal projects on GitHub',
        'Collaborative development experience'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'project': return 'bg-gradient-to-r from-green-500 to-green-600';
      case 'achievement': return 'bg-gradient-to-r from-purple-500 to-purple-600';
      case 'learning': return 'bg-gradient-to-r from-orange-500 to-orange-600';
      case 'certification': return 'bg-gradient-to-r from-teal-500 to-teal-600';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'education': return 'Education';
      case 'project': return 'Project';
      case 'achievement': return 'Achievement';
      case 'learning': return 'Learning';
      case 'certification': return 'Certification';
      default: return 'Experience';
    }
  };

  // const stats = [
  //   { number: "4+", label: "Years of Study", icon: <BookOpen className="w-5 h-5" /> },
  //   { number: "15+", label: "Projects Completed", icon: <Code className="w-5 h-5" /> },
  //   { number: "100+", label: "Problems Solved", icon: <Trophy className="w-5 h-5" /> },
  //   { number: "5+", label: "Technologies", icon: <Target className="w-5 h-5" /> }
  // ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey in computer science, software development, and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 group">
                {/* Timeline dot */}
                <div className={`relative z-10 w-16 h-16 ${getTypeColor(item.type)} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-700">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(item.type)} text-white`}>
                          {getTypeLabel(item.type)}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar size={14} />
                          {item.period}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.achievements && (
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                            <Award size={12} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* {stats.map((stat, index) => (
            <div key={index} className="group text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Experience;