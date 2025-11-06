import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showResume, setShowResume] = useState(false);

  const renderSection = () => {
    switch(activeSection) {
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Hero onViewResume={() => setShowResume(true)} />;
    }
  };

  return (
    <div className="App bg-light min-h-screen">
      <Header 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        onShowResume={() => setShowResume(true)}
      />
      
      <main>
        {renderSection()}
      </main>

      {showResume && (
        <ResumeModal onClose={() => setShowResume(false)} />
      )}
    </div>
  );
}

export default App;