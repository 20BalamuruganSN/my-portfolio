import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p>
                I'm a passionate <strong className="text-primary">React & React Native Developer</strong> with extensive 
                experience in building modern, responsive web and mobile applications. 
                With a strong foundation in computer science and hands-on experience 
                in frontend development, I specialize in creating seamless user experiences.
              </p>
              
              <p>
                My expertise includes developing cross-platform mobile applications with 
                React Native, building dynamic web applications with React.js and Next.js, 
                and creating reusable UI components with modern styling solutions.
              </p>

              <p>
                I'm passionate about writing clean, maintainable code and always stay 
                updated with the latest industry trends and best practices. I thrive in 
                collaborative environments and enjoy working with cross-functional teams.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-light rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-light rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-light rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-gray-600">Companies Worked</div>
              </div>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">Education</span>
                  <span className="text-sm">B.E. Computer Science</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">CGPA</span>
                  <span className="text-sm">8.66/10</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">Availability</span>
                  <span className="text-green-300 text-sm font-medium">Open to Opportunities</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Focus</span>
                  <span className="text-sm text-right">Frontend & Mobile Development</span>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-dark mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'React Native', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Node.js', 'MongoDB'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;