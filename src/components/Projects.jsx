import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "Infuex – Crypto Currency App",
      period: "Dec 2024 – Jun 2025",
      description: "A comprehensive cryptocurrency application with real-time trading, wallet management, and secure transactions.",
      features: [
        "Built and maintained core modules — Home, chat, settings, redeem wallet, calls, and onboarding",
        "Developed responsive UI components for smooth, cross-device user experience",
        "Integrated REST APIs and optimized performance in collaboration with backend teams"
      ],
      tech: ["React Native", "Redux", "REST APIs", "Git"],
      image: "💹",
      category: "Mobile App"
    },
    {
      name: "Smart Service – Customer & Employee Management",
      period: "Jun 2024 – Aug 2024",
      description: "A comprehensive management system for handling customer relationships and employee workflows.",
      features: [
        "Redesigned forms using Next.js with tab panels and dynamic tables",
        "Added NextAuth authentication and Google Analytics integration",
        "Enhanced UI/UX for better navigation and user experience"
      ],
      tech: ["Next.js", "React", "NextAuth", "Material UI", "Git"],
      image: "👥",
      category: "Web App"
    },
    {
      name: "Shopana.ai – AI Advertising Platform",
      period: "Ongoing",
      description: "AI-powered advertising platform that automatically generates content and visuals for marketing campaigns.",
      features: [
        "Created an AI-powered ad creation platform that auto-generates content and visuals",
        "Designed a responsive dashboard for managing and previewing ad campaigns"
      ],
      tech: ["React.js", "Tailwind CSS", "REST APIs", "AI Integration"],
      image: "🤖",
      category: "AI Platform",
      link: "shopana.ai/login"
    },
    {
      name: "Cornerstone – Real Estate Platform",
      period: "2023",
      description: "A comprehensive real estate platform for property listings, agent management, and customer engagement.",
      features: [
        "Built and maintained property listing portal with search, filters, and agent profiles",
        "Implemented responsive layouts and accessible UI for desktop and mobile users",
        "Integrated contact/agent flows and improved UX for scheduling visits"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image: "🏠",
      category: "Real Estate",
      link: "cornerstone.lk"
    },
    {
      name: "RIGHTHMS – Hotel Booking & Management",
      period: "2023",
      description: "Complete hotel and restaurant management solution with booking, reporting, and financial tracking.",
      features: [
        "Developed hotel and restaurant management app for room booking and menu management",
        "Built features for booking history, daily reports, and real-time financial tracking",
        "Focused on responsive UI, smooth navigation, and efficient state management"
      ],
      tech: ["React Native", "Redux", "React Query", "REST APIs"],
      image: "🏨",
      category: "Mobile App"
    },
    {
      name: "SPN – Bricks Ads & Sales Platform",
      period: "2023",
      description: "Sales and advertisement management platform for brick suppliers with QR-based order tracking.",
      features: [
        "Built an ad and sales management platform for a brick supplier",
        "Implemented QR-based order tracking with live status updates and notifications",
        "Developed CRUD operations and daily reports with Tailwind CSS interface"
      ],
      tech: ["React.js", "React Native", "Tailwind CSS", "REST APIs"],
      image: "🧱",
      category: "Sales Platform",
      link: "vallibricks.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{project.image}</span>
                  <div>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                    {project.period}
                  </span>
                  {project.link && (
                    <a 
                      href={`https://${project.link}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary text-sm font-medium"
                    >
                      Visit →
                    </a>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-semibold text-dark mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-primary mt-1 text-xs">●</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 2 && (
                    <li className="text-sm text-gray-500">
                      +{project.features.length - 2} more features...
                    </li>
                  )}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6">
              I've worked on various other projects including e-commerce platforms, 
              dashboard applications, and custom web solutions. Let's discuss how I can help with your project!
            </p>
            <a href="#contact" className="btn-primary">
              📧 Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;