import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumeModal = ({ onClose }) => {
  const resumeRef = React.useRef();

  const handleDownload = async () => {
    const element = resumeRef.current;
    if (!element) return;

    try {
      // Show loading state
      const downloadBtn = document.querySelector('.download-btn');
      const originalHTML = downloadBtn?.innerHTML;
      
      if (downloadBtn) {
        downloadBtn.innerHTML = '⏳ Generating PDF...';
        downloadBtn.disabled = true;
      }

      // Add a small delay to ensure the DOM is ready
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(element, {
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: element.scrollWidth,
        height: element.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm (fixed from 295 to 297)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add new pages if content is too long
      while (heightLeft > 0) {
        position = heightLeft - imgHeight + pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Bala_Murugan_Resume.pdf');

      // Restore button state
      if (downloadBtn) {
        downloadBtn.innerHTML = originalHTML;
        downloadBtn.disabled = false;
      }

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');

      // Restore button state on error
      const downloadBtn = document.querySelector('.download-btn');
      if (downloadBtn) {
        downloadBtn.innerHTML = '📥 Download PDF';
        downloadBtn.disabled = false;
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-dark">Bala Murugan - Resume</h2>
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="download-btn btn-primary text-sm py-2 px-4 flex items-center gap-2"
            >
              📥 Download PDF
            </button>
            <button
              onClick={handlePrint}
              className="btn-outline text-sm py-2 px-4 flex items-center gap-2"
            >
              🖨️ Print
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Resume Content - ATTACH THE REF HERE */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-8">
          <div ref={resumeRef} className="max-w-3xl mx-auto bg-white"> {/* Added bg-white for better contrast */}
            
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-dark mb-2">BALA MURUGAN</h1>
              <h2 className="text-xl text-primary font-semibold mb-4">React & React Native Developer</h2>
              <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+91-9384902854</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>snbalamurugan20@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-dark border-b-2 border-primary pb-2 mb-4">EDUCATION</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">Annamalai University (CDM)</h4>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">OGPA: 8.66</span>
                </div>
                <p className="text-gray-600">Bachelor of Engineering and Technology, Computer Science & Engineering</p>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-dark border-b-2 border-primary pb-2 mb-4">TECHNICAL SKILLS</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <strong>Frontend Development:</strong>
                  <p className="text-gray-600">React.js, Next.js, React Native</p>
                </div>
                <div>
                  <strong>Programming Languages:</strong>
                  <p className="text-gray-600">JavaScript (ES6+), TypeScript</p>
                </div>
                <div>
                  <strong>Web Technologies:</strong>
                  <p className="text-gray-600">HTML5, CSS3, Tailwind CSS, MUI, Styled Components</p>
                </div>
                <div>
                  <strong>State Management:</strong>
                  <p className="text-gray-600">Redux, Context API, React Query</p>
                </div>
                <div>
                  <strong>API Integration:</strong>
                  <p className="text-gray-600">REST APIs</p>
                </div>
                <div>
                  <strong>Version Control:</strong>
                  <p className="text-gray-600">Git, GitHub</p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-dark border-b-2 border-primary pb-2 mb-4">WORK EXPERIENCE</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">React Native Developer</h4>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Aug 2025 – Present</span>
                  </div>
                  <p className="text-primary font-medium mb-3">ASkeyTech Solutions Pvt. Ltd | Chennai (On-site)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Develop and maintain cross-platform mobile apps using React Native</li>
                    <li>Integrate REST APIs and manage state using Redux and Context API</li>
                    <li>Collaborate with backend and design teams for seamless app performance</li>
                    <li>Focus on app performance, responsive UI, and clean code practices</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">React Native / React Developer</h4>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Jun 2023 – Jul 2025</span>
                  </div>
                  <p className="text-primary font-medium mb-3">Tritrix Technologies Pvt. Ltd | Chennai (On-site)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Built dynamic web and mobile applications with React.js, Next.js & React Native</li>
                    <li>Created reusable UI components with Tailwind CSS, MUI, and Styled Components</li>
                    <li>Integrated REST APIs and improved front-end performance & scalability</li>
                    <li>Optimized code and resolved issues for smoother app functionality</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects (Brief) */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-dark border-b-2 border-primary pb-2 mb-4">KEY PROJECTS</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Infuex – Crypto Currency App</h4>
                  <p className="text-gray-600 text-sm">React Native | Dec 2024 – Jun 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold">Smart Service – Management System</h4>
                  <p className="text-gray-600 text-sm">Next.js | Jun 2024 – Aug 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold">Shopana.ai – AI Advertising Platform</h4>
                  <p className="text-gray-600 text-sm">React.js | Ongoing</p>
                </div>
              </div>
            </section>

            {/* Internship */}
            <section>
              <h3 className="text-xl font-bold text-dark border-b-2 border-primary pb-2 mb-4">INTERNSHIP</h3>
              <div className="border-l-4 border-primary pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">Web Development Intern</h4>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Jun 2022 – Aug 2022</span>
                </div>
                <p className="text-primary font-medium mb-3">NSIC Technical Services Centre | Chennai, India</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Completed internship focused on front-end web development fundamentals</li>
                  <li>Gained hands-on experience with HTML, CSS, JavaScript, and Bootstrap</li>
                  <li>Developed responsive web project showcasing layout design and interactivity</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2"><strong>Tech:</strong> HTML5, CSS3, JavaScript, Bootstrap</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;