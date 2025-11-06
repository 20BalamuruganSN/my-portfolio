import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "ASkeyTech Solutions Pvt. Ltd",
      position: "React Native Developer",
      period: "Aug 2025 – Present",
      location: "Chennai (On-site)",
      responsibilities: [
        "Develop and maintain cross-platform mobile apps using React Native",
        "Integrate REST APIs and manage state using Redux and Context API",
        "Collaborate with backend and design teams for seamless app performance",
        "Focus on app performance, responsive UI, and clean code practices"
      ],
      icon: "🚀"
    },
    {
      company: "Tritrix Technologies Pvt. Ltd",
      position: "React Native / React Developer",
      period: "Jun 2023 – Jul 2025",
      location: "Chennai (On-site)",
      responsibilities: [
        "Built dynamic web and mobile applications with React.js, Next.js & React Native",
        "Created reusable UI components with Tailwind CSS, MUI, and Styled Components",
        "Integrated REST APIs and improved front-end performance & scalability",
        "Optimized code and resolved issues for smoother app functionality"
      ],
      icon: "💼"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform translate-x-1"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="ml-20">
                  <div className="bg-light rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center gap-3 mb-3 sm:mb-0">
                        <span className="text-2xl">{exp.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-dark">{exp.position}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                        <p className="text-gray-600 text-sm mt-1">{exp.location}</p>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <span className="text-primary mt-1">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Internship */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-dark text-center mb-8">Internship</h3>
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">Web Development Intern</h4>
                  <p className="text-blue-100">NSIC Technical Services Centre</p>
                </div>
                <div className="text-right mt-3 sm:mt-0">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    Jun 2022 – Aug 2022
                  </span>
                  <p className="text-blue-100 text-sm mt-1">Chennai, India</p>
                </div>
              </div>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start gap-3">
                  <span>✓</span>
                  <span>Completed internship focused on front-end web development fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>✓</span>
                  <span>Gained hands-on experience with HTML, CSS, JavaScript, and Bootstrap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>✓</span>
                  <span>Developed responsive web project showcasing layout design and interactivity</span>
                </li>
              </ul>
              <div className="mt-4">
                <span className="text-sm font-medium">Tech: HTML5, CSS3, JavaScript, Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;