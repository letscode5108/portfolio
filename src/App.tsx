import  { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Play,
  Mail,
  Phone,
  Award,
  GraduationCap,
} from "lucide-react";

// Project Dataset - Easy to update
const projectsData = [
  {
    id: 1,
    title: "BuildSkills AI",
    description:
      "AI-powered platform helping developers transition from tutorial-based to project-based learning with personalized learning paths and step-by-step project guides.",
    image:
      "https://res.cloudinary.com/df7mlw5t9/image/upload/v1755594159/build-skill-cover-image_pl7m2o.png",
    technologies: [
      "React",
      "Tailwind",
      "Node.js",
      "Express.js",
      "Gemini API",
      "Prisma",
      "JWT Authentication",
      "REST APIs",
    ],
    liveLink: "https://build-skills-ai.vercel.app/",
    githubLink: "https://github.com/letscode5108/BuildSkills-AI",
    videoLink: "",
    featured: true,
  },
  {
    id: 2,
    title: "DocuQuery",
    description:
      "Full-stack application for uploading, managing and querying PDF documents using AI-powered semantic search with natural language processing.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop",
    technologies: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "LangChain",
      "REST APIs",
      "PostgreSQL",
      "PyMuPDF",
      "Cloudinary",
    ],
    liveLink: "#",
    githubLink: "https://github.com/letscode5108/DocuQuery",
    videoLink:
      "https://drive.google.com/file/d/11iOLC3qbmPTEpb7AMFGjdbiy1jUIyYKq/view",
    featured: true,
  },
  {
    id: 3,
    title: "HealthSnap",
    description:
      "AI-Powered Medical Report Analysis Platform Transform your medical reports into actionable insights with cutting-edge AI technology. Upload PDFs or images and get instant parameter extraction, trend analysis, and personalized health recommendations.",
    image:
      "https://res.cloudinary.com/df7mlw5t9/image/upload/v1755603076/medical-cover-image_ls8mtu.png",
    technologies: ["Next.js", "Cloudinary", "prisma", "Express.js"],
    liveLink: "",
    githubLink: "https://github.com/letscode5108/HealthSnap",
    videoLink:
      "https://drive.google.com/file/d/1_Qdkgv_8tV_5WWkMhZpgUZnlmqXGsBer/view",
    featured: false,
  },

  {
    id: 4,
    title: "LinkNestAI",
    description:
      "Automatic metadata extraction and AI-powered categorization Intelligent Search.Full-text search with tag filtering Content analysis using Google Gemini AI Secure Authentication. JWT-based user management",
    image:
      "https://res.cloudinary.com/df7mlw5t9/image/upload/v1755594159/link-keeper-cover-image_eyll5c.png",
    technologies: [
      "React",
      "Node.js",
      "AI/ML",
      "Chatbot Development",
      "Database Management",
    ],
    liveLink: "https://linknestai.vercel.app",
    githubLink: "https://github.com/letscode5108/LinkNest_AI",
    videoLink:
      "https://www.loom.com/share/27045ec8443a4418b208c5fe22bfe86c?sid=56b7cfac-a657-4a39-bcc1-157b08f83dc6",
    featured: false,
  },

  {
    id: 6,
    title: "Job Scheduling Microservice Backend API",
    description:
      "A scalable Node.js microservice for scheduling and managing jobs with production-ready architecture handling 10,000+ users and 6,000+ API requests/minute.",
    image:
      "https://images.unsplash.com/photo-1690585703267-de31ea667ef0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Express.js", "Node.js", "Redis", "PostgreSQL"],
    liveLink: "",
    githubLink: "https://github.com/letscode5108/jobscheduler",
    videoLink: "",
    featured: false,
  },
  {
    id: 7,
    title: "Property Management API",
    description:
      "A comprehensive RESTful API for managing real estate properties with user authentication, favorites, and recommendation features serving 200 users and 1000+ properties.",
    image:
      "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhY2tlbmR8ZW58MHx8MHx8fDA%3D",
    technologies: ["Express.js", "Node.js", "JWT", "REST APIs", "MongoDB"],
    liveLink: "",
    githubLink: "https://github.com/letscode5108/propertysystem_backend",
    videoLink: "",
    featured: false,
  },
  {
    id: 5,
    title: "Weather app",
    description:
      "A weather application that provides real-time weather updates and forecasts.",
    image:
      "https://res.cloudinary.com/df7mlw5t9/image/upload/v1755594159/weather-app-cover-image_pgoduf.png",
    technologies: ["React", "Node.js", "tailwindcss"],
    liveLink: "https://weather-info-two.vercel.app",
    githubLink: "https://github.com/letscode5108/WeatherInfo",
    videoLink: "",
    featured: false,
  },
];

// All Skills in one array for infinite scroll
const allSkills = [
  "Java",
  "Python",
  "C",
  "Docker",
  "AWS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "TailwindCSS",
  "Shadcn UI",
  "NodeJS",
  "Express JS",
  "FastAPI",
  "REST APIs",
  "JWT Authentication",
  "MongoDB",
  "Next.js",
  "OAuth",
  "PostgreSQL",
  "Prisma ORM",
  "Git",
  "GitHub",
  "LangChain",
  "Gemini AI",
  "Cloudinary",

];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Problem Solver",
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Developer",
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "experience",
                "achievements",
                "projects",
                "skills",
                "education",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-gray-300 transition-all duration-300 relative ${
                    activeSection === section ? "text-white" : "text-gray-500"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transition-all duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pb-12"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up space-y-4">
            <h1 className="text-5xl md:text-7xl font-thin mb-2 tracking-wider">
              ANKITA
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-4 tracking-wide">
              CHATTERJEE
            </h2>
            <div className="h-8 mb-4">
              <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide transition-all duration-500">
                {roles[currentRole]}
              </p>
            </div>

            {/* GitHub Contributions Calendar */}
            {/* <div className="mb-6 mx-auto max-w-lg">
              <GitHubCalendar
                username="letscode5108" // Replace with your actual GitHub username
                colorScheme="dark"
                blockSize={20}
                blockMargin={4}
                fontSize={12}
                hideColorLegend
                hideMonthLabels
                
              />

            </div> */}

            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={25} className="text-white" />
                <span className="font-light">+91 8777743599</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={25} className="text-white" />
                <span className="font-light text-2xl">
                  chatterjeeankita548@gmail.com
                </span>
              </div>
            </div>
            <button
              onClick={() => scrollToSection("projects")}
              className="mt-6 border border-white px-6 py-3 text-sm font-light tracking-wider hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105"
            >
              EXPLORE WORK
            </button>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-thin text-center mb-10 tracking-wider">
            SKILLS
          </h2>
          <div className="space-y-6">
            {/* First line - scrolling right */}
            <div className="relative overflow-hidden">
              <div
                className="flex space-x-6"
                style={{
                  animation: "scroll-right 15s linear infinite",
                }}
              >
                {/* First set of skills */}
                {allSkills.map((skill, index) => (
                  <div
                    key={`right-first-${index}`}
                    className="flex-shrink-0 border border-gray-800 px-4 py-2 hover:border-white transition-all duration-300 whitespace-nowrap"
                  >
                    <span className="text-gray-300 font-light tracking-wide text-xl">
                      {skill}
                    </span>
                  </div>
                ))}
                {/* Duplicate set for infinite scroll */}
                {allSkills.map((skill, index) => (
                  <div
                    key={`right-second-${index}`}
                    className="flex-shrink-0 border border-gray-800 px-4 py-2 hover:border-white transition-all duration-300 whitespace-nowrap"
                  >
                    <span className="text-gray-300 font-light tracking-wide text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second line - scrolling left */}
            <div className="relative overflow-hidden">
              <div
                className="flex space-x-6"
                style={{
                  animation: "scroll-left 15s linear infinite",
                }}
              >
                {/* First set of skills */}
                {allSkills.map((skill, index) => (
                  <div
                    key={`left-first-${index}`}
                    className="flex-shrink-0 border border-gray-800 px-4 py-2 hover:border-white transition-all duration-300 whitespace-nowrap"
                  >
                    <span className="text-gray-300 font-light tracking-wide text-xl">
                      {skill}
                    </span>
                  </div>
                ))}
                {/* Duplicate set for infinite scroll */}
                {allSkills.map((skill, index) => (
                  <div
                    key={`left-second-${index}`}
                    className="flex-shrink-0 border border-gray-800 px-4 py-2 hover:border-white transition-all duration-300 whitespace-nowrap"
                  >
                    <span className="text-gray-300 font-light tracking-wide text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Add this CSS to your global styles or component */}
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
      {/* Experience Section */}
      <section id="experience" className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-thin text-center mb-10 tracking-wider">
            EXPERIENCE
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="border border-gray-800 p-6 hover:border-white transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-light mb-1">
                    Frontend Development Intern
                  </h3>
                  <p className="text-lg text-gray-400 font-light">SnapshreAI</p>
                </div>
                <div className="text-gray-400 font-light text-sm mt-2 md:mt-0">
                  July 2025 - Present
                </div>
              </div>
              <div className="space-y-2 text-gray-300 font-light text-md">
                <p> Improved user interface design and functionality while
                   troubleshooting and fixing  application bugs,  Developed
                responsive web applications.</p>  {/*Developed
                responsive web applications with integrated chatbot solutions
                for enhanced customer interaction - Debugged frontend and
                backend code issues, reducing application errors and improving
                system reliability -*/} <p>Collaborated with cross-functional teams to
                implement scalable frontend architectures using modern web
                technologies</p> <p> Managed deployment pipelines through Docker
                containerization and AWS cloud services</p> <p>Contributing to
                AI-powered software solutions with focus on frontend
                optimization and user experience design</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-thin text-center mb-10 tracking-wider">
            PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="border border-gray-800 group hover:border-white transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover filter  transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-light mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-xl font- leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 9).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 border border-gray-700 text-gray-300 text-m font-light tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                    {/* {project.technologies.length > 3 && (
                      <span className="px-2 py-1 border border-gray-700 text-gray-400 text-xs font-light">
                        {project.technologies.length}
                      </span>
                    )} */}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.liveLink}
                      className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-300"
                    >
                      <ExternalLink size={14} />
                      <span className="text-m font-light">LIVE</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-300"
                    >
                      <Github size={14} />
                      <span className="text-m font-light">CODE</span>
                    </a>
                    <a
                      href={project.videoLink}
                      className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-300"
                    >
                      <Play size={14} />
                      <span className="text-m font-light">DEMO</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-thin text-center mb-10 tracking-wider">
            ACHIEVEMENTS
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="border border-gray-800 p-6 hover:border-white transition-all duration-500">
              <div className="flex items-start space-x-4 mb-4">
                <Award className="text-white mt-1" size={20} />
                <div>
                  <h3 className="text-xl font-light mb-1">
                    Smart India Hackathon 2024
                  </h3>
                  <p className="text-lg text-gray-400 font-light">Runner-Up</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-300 font-light text-xl">
                <p>
                  Contributed to the development of a Smart Classroom Management
                  System
                </p>
                <p>
                  Built a chatbot that provided subject-specific resources and
                  videos
                </p>
                <p>
                  Worked on both backend and frontend development for core
                  features
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-thin text-center mb-10 tracking-wider">
            EDUCATION
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="border border-gray-800 p-6 hover:border-white transition-all duration-500">
              <div className="flex items-start space-x-4 mb-4">
                <GraduationCap className="text-white mt-1" size={20} />
                <div className="flex-1">
                  <h3 className="text-xl font-light mb-1">
                    Bachelor of Technology
                  </h3>
                  <p className="text-lg text-gray-400 font-light mb-1">
                    Computer Science and Engineering
                  </p>
                  <p className="text-gray-500 font- text-xl">
                    Dr. Sudhir Chandra Sur Institute of Technology & Sports
                    Complex
                  </p>
                </div>
                <div className="text-gray-400 font-light text-right text-sm">
                  <p>Oct 2022</p>
                  <p>Aug 2026</p>
                </div>
              </div>
              <div className="text-gray-400 font-light text-sm">
                <p>Kolkata, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-thin mb-10 tracking-wider">
            CONTACT
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              I'm always open to discussing new opportunities, collaborating on
              projects, or just having a chat about technology and innovation.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-6">
              <a
                href="mailto:chatterjeeankita548@gmail.com"
                className="border border-white px-6 py-2 font-light tracking-wider hover:bg-white hover:text-black transition-all duration-500 text-sm"
              >
                EMAIL
              </a>
              <a
                href="#"
                className="border border-white px-6 py-2 font-light tracking-wider hover:bg-white hover:text-black transition-all duration-500 text-sm"
              >
                LINKEDIN
              </a>
              <a
                href="#"
                className="border border-white px-6 py-2 font-light tracking-wider hover:bg-white hover:text-black transition-all duration-500 text-sm"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
        <p className="font-light text-sm">
          &copy; 2025 Ankita Chatterjee. All rights reserved.
        </p>
      </footer>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
