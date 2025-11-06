import React from 'react';

const Hero = ({ onViewResume }) => {
  return (
    <section id="home" className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                👋 Hello, I'm
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6">
              Bala <span className="gradient-text">Murugan</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium">
              React & React Native Developer
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              I build exceptional digital experiences that are fast, accessible, 
              visually appealing, and responsive. Let's bring your ideas to life!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button onClick={onViewResume} className="btn-primary">
                📄 View My Resume
              </button>
              <a href="#contact" className="btn-outline">
                📧 Get In Touch
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>snbalamurugan20@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>+91-9384902854</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="font-mono text-sm text-green-400">
                    <div className="mb-2"><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</div>
                    <div className="ml-4"><span className="text-yellow-400">name</span>: <span className="text-green-300">"Bala Murugan"</span>,</div>
                    <div className="ml-4"><span className="text-yellow-400">role</span>: <span className="text-green-300">"React Developer"</span>,</div>
                    <div className="ml-4"><span className="text-yellow-400">skills</span>: [</div>
                    <div className="ml-8 text-green-300">"React", "React Native", "Next.js"</div>
                    <div className="ml-4">]</div>
                    <div>{'}'};</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 -right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;