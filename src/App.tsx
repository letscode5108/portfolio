
import { useState, useEffect } from "react";
import {  ExternalLink, Mail, Linkedin, Code, Server, Database, Award, Briefcase, ChevronRight, Check, ArrowRight } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId : string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/95 shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Ankita Chatterjee
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {["home", "skills", "projects", "achievements"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === section
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
             
             
    
    
    
    
    
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["home", "skills", "projects", "achievements"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeSection === section
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <a
                href="mailto:chatterjeeankita548@gmail.com"
                className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700 text-white"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              <span className="block">Hello, I'm</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Ankita Chatterjee
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
              Software Engineer & Full Stack Developer
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Building innovative solutions with React, Node.js, and AI technologies. 
              I specialize in developing responsive and scalable web applications with 
              a focus on user experience and performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/letscode5108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              >
                
                GitHub
              </a>
              <a
                href="www.linkedin.com/in/ankita-chatterjee-470980261"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href=""
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail size={18} />
                chatterjeeankita548@gmail.com
              </a>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 absolute blur-xl opacity-20 animate-pulse"></div>
              <div className="w-64 h-64 rounded-full border-2 border-blue-500 relative z-10 overflow-hidden flex items-center justify-center bg-gray-800">
                 <img 
                  src="https://res.cloudinary.com/dj8f2bytx/image/upload/v1747636672/photo_ig6jhb.png" 
                  alt="Ankita Chatterjee"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Frontend */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="mb-4 p-3 bg-blue-600/20 rounded-lg w-fit">
              <Code size={28} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <ul className="space-y-2">
              {["React", "Redux", "JavaScript", "TypeScript", "TailwindCSS", "Shadcn UI"].map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <Check size={16} className="text-blue-500" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="mb-4 p-3 bg-blue-600/20 rounded-lg w-fit">
              <Server size={28} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <ul className="space-y-2">
              {["NodeJS", "Express JS", "FastAPI", "REST APIs", "JWT Authentication", "WebSockets"].map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <Check size={16} className="text-blue-500" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Skills */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="mb-4 p-3 bg-blue-600/20 rounded-lg w-fit">
              <Database size={28} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Languages & Tools</h3>
            <ul className="space-y-2">
              {["Java", "Python", "C", "PostgreSQL", "Prisma ORM", "Git", "LangChain", "Gemini AI", "Cloudinary"].map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <Check size={16} className="text-blue-500" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent development work showcasing my technical skills and problem-solving approach.
        </p>

        <div className="space-y-16">
          {/* BuildSkills AI */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">BuildSkills AI</h3>
              <p className="text-gray-300 mb-4">
                An AI-powered platform helping developers transition from tutorial-based to project-based learning through personalized learning paths.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Secure JWT authentication system</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>AI-generated personalized learning paths</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Step-by-step project guides</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Responsive UI and RESTful API integration</span>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Tailwind", "Node.js", "ExpressJs", "Gemini API", "Prisma", "JWT", "REST APIs"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://build-skills-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                >
                  
                  Source Code
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 flex items-center justify-center p-4">
                <div className="w-full bg-gray-900 rounded-lg p-4 shadow-lg">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">B</div>
                      <span className="font-semibold">BuildSkills AI</span>
                    </div>
                    <div className="bg-blue-600/20 px-3 py-1 rounded-full text-blue-500 text-xs font-medium">
                      AI Learning
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-800 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-800 rounded w-full"></div>
                    <div className="h-3 bg-gray-800 rounded w-5/6"></div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="bg-gray-800 h-12 rounded flex items-center justify-center text-xs font-medium">Learning Path</div>
                    <div className="bg-blue-600/20 h-12 rounded flex items-center justify-center text-blue-500 text-xs font-medium">Start Project</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TaskSync */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">TaskSync</h3>
              <p className="text-gray-300 mb-4">
                A comprehensive task management platform for remote teams with real-time communication capabilities and multi-team management.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Multi-team management with JWT authentication</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Real-time team chat using WebSockets</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Virtual meeting rooms integration</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Interactive dashboards with data visualization</span>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Tailwind", "Node.js", "ExpressJs", "WebSocket", "Prisma", "REST APIs"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/letscode5108/TeamSync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                
                  GitHub Repo
                </a>
              </div>
            </div>
            <div className="order-1 bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 flex items-center justify-center p-4">
                <div className="w-full bg-gray-900 rounded-lg p-4 shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">T</div>
                      <span className="font-semibold">TaskSync</span>
                    </div>
                    <div className="bg-indigo-600/20 px-3 py-1 rounded-full text-indigo-500 text-xs font-medium">
                      Team Dashboard
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-800 h-8 rounded"></div>
                    <div className="bg-gray-800 h-8 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center">
                      <div className="h-4 w-4 rounded-full bg-green-500"></div>
                      <div className="h-2 bg-gray-800 rounded flex-1"></div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                      <div className="h-2 bg-gray-800 rounded flex-1"></div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="h-4 w-4 rounded-full bg-red-500"></div>
                      <div className="h-2 bg-gray-800 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DocuQuery */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">DocuQuery</h3>
              <p className="text-gray-300 mb-4">
                A full-stack application for uploading, managing, and querying PDF documents using AI-powered semantic search technology.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>AI-powered semantic search for documents</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Document management with PostgreSQL</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Natural language processing with LangChain</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Responsive frontend with React</span>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Tailwind CSS", "FastAPI", "LangChain", "REST APIs", "PostgreSQL", "PyMuPDF", "Cloudinary"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://drive.google.com/file/d/11iOLC3qbmPTEpb7AMFGjdbiy1jUIyYKq/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 flex items-center justify-center p-4">
                <div className="w-full bg-gray-900 rounded-lg p-4 shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">D</div>
                      <span className="font-semibold">DocuQuery</span>
                    </div>
                    <div className="bg-blue-600/20 px-3 py-1 rounded-full text-blue-500 text-xs font-medium">
                      AI Search
                    </div>
                  </div>
                  <div className="bg-gray-800 h-8 rounded mb-4 flex items-center px-3">
                    <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                    <div className="ml-auto w-6 h-6 rounded-full bg-gray-700"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-gray-700"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-800 rounded w-1/2 mb-1"></div>
                        <div className="h-2 bg-gray-800 rounded w-1/4"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-gray-700"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-800 rounded w-2/3 mb-1"></div>
                        <div className="h-2 bg-gray-800 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Achievements & Education</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Achievements */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="mb-6 p-3 bg-blue-600/20 rounded-lg w-fit">
              <Award size={28} className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Achievements</h3>
            
            <div className="relative pl-8 pb-8 border-l border-gray-700">
              <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-blue-600"></div>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-blue-400">Smart India Hackathon</h4>
                <p className="text-gray-400">Runner-Up</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span>Contributed to the development of a Smart Classroom Management System</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span>Built a chatbot providing subject-specific resources and videos</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span>Worked on both backend and frontend development for core features</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="mb-6 p-3 bg-blue-600/20 rounded-lg w-fit">
              <Briefcase size={28} className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            
            <div className="relative pl-8 pb-8 border-l border-gray-700">
              <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-blue-600"></div>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-blue-400">Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex</h4>
                <p className="text-gray-400">Oct 2022 - Aug 2026</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span>Bachelor of Technology in Computer Science and Engineering (B.Tech)</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span>Kolkata, India</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span>Key coursework: Data Structures & Algorithms, Computer Networks, DBMS, Operating Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gradient-to-b from-transparent to-gray-900/50 rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:chatterjeeankita548@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              <Mail size={18} />
              chatterjeeankita548@gmail.com
            </a>
            <a
              href="https://github.com/letscode5108"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
           
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/chatterjeeankita548/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              <Code size={18} />
              LeetCode
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ankita Chatterjee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}