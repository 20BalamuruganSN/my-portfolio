import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "React Native", "HTML5", "CSS3"],
      icon: "💻"
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript (ES6+)", "TypeScript"],
      icon: "⚡"
    },
    {
      title: "Web Technologies",
      skills: ["Tailwind CSS", "Material UI", "Styled Components", "Bootstrap"],
      icon: "🎨"
    },
    {
      title: "State Management",
      skills: ["Redux", "Context API", "React Query"],
      icon: "🔄"
    },
    {
      title: "API Integration",
      skills: ["REST APIs", "GraphQL", "Axios"],
      icon: "🔗"
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub", "GitLab"],
      icon: "📚"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-light">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-dark">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;