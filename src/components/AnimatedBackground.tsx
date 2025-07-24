import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-all duration-300"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-18 h-18 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 animate-float-delayed"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
    </div>
  );
};

export default AnimatedBackground;