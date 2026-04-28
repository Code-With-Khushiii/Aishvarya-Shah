import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

type Paper = {
  title: string;
  publication: string;
  year: string;
  link: string;
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = ".NET Software Engineer with experience building scalable backend systems using ASP.NET Core, C#, REST APIs, microservices, LINQ, and Entity Framework for high-traffic enterprise applications supporting 3,000+ users. Improved SQL performance by 30%, reduced sync latency by over 50%, and delivered efficient backend solutions through performance optimization and clean architecture. Hands-on with Azure, Azure DevOps, CI/CD, Docker, Redis, and AWS S3 to strengthen deployment efficiency, system reliability, and API performance.";

  const experience = [
    {
      company: "Ethics Infotech LLP",
      role: "Senior Software Engineer",
      location: "",
      dates: "Sep 2020 - Nov 2023",
      highlights: [
        "Optimized background synchronization across .NET modules, reducing sync time from 2-3 minutes to under 1 minute by replacing full dataset polling with targeted API calls for new and updated records.",
        "Engineered a full-stack travel booking platform using React and .NET REST APIs, accelerating feature delivery by 25% through reusable component patterns, Redux conventions, and frontend development standards.",
        "Automated purchase-order generation for a C# WinForms POS used by 3,000+ clients, reducing manual effort by 3-4 minutes per transaction through workflow automation and SQL Server integration.",
        "Built secure OTP and Google OAuth authentication with backend verification, increasing successful sign-ins by 20% through seamless profile creation and streamlined registration flows.",
        "Improved code quality across enterprise applications by conducting code reviews, mentoring a junior developer, managing Git workflows and pull requests, and supporting release decisions in the manager's absence."
      ]
    },
    {
      company: "M3D Infotech",
      role: "Software Developer",
      location: "",
      dates: "Mar 2019 - Mar 2020",
      highlights: [
        "Optimized SQL Server reporting and transaction performance, reducing critical query execution time by 30% through index tuning, stored procedure optimization, and query restructuring.",
        "Enhanced 6 core sales and purchase modules in a C# WinForms pharmacy POS, improving UI responsiveness through multithreading and asynchronous processing for long-running operations.",
        "Implemented structured release support for POS enhancements, decreasing post-release defects by 20% through scenario validation across orders, invoices, and returns and coordinated issue resolution with stakeholders.",
        "Created 15+ Crystal Reports and RDLC templates for daily and monthly sales summaries, reducing manual reporting time by 60% through standardized layouts and parameterized data retrieval."
      ]
    },
    {
      company: "Anant Soft Computing",
      role: "Software Engineer",
      location: "",
      dates: "Dec 2016 - Apr 2018",
      highlights: [
        "Built an ASP.NET Library Management System, reducing overdue items by 25% through automated in-app notifications and streamlined SQL Server-based borrow and return workflows.",
        "Designed SQL Server schemas for 3 client projects, reducing data defects by 15% through normalized tables, constraints, relationships, and indexing strategies.",
        "Managed end-to-end SDLC for 3 projects, improving on-time delivery by 20% through test planning, execution, debugging, and production support without dedicated QA resources."
      ]
    }
  ];

  const projects = [
    {
      title: "Healthcare Performance Monitoring Dashboard",
      subtitle: "ASP.NET Core and React.js full-stack dashboard",
      category: "Full-Stack Healthcare",
      introduction: "Developed a full-stack Healthcare Performance Monitoring Dashboard using ASP.NET Core and React.js to track real-time KPIs across 5 REST API endpoints.",
      problem: "Healthcare teams needed a clearer way to monitor operational performance, API-fed metrics, and live KPI movement without relying on fragmented reports or manual refresh cycles.",
      objective: "Build a responsive dashboard that continuously processes healthcare performance metrics and presents them through reliable, interactive reporting.",
      methodology: [
        "Built ASP.NET Core REST APIs to expose KPI data across 5 endpoints.",
        "Created background data generation services for continuous metric processing.",
        "Developed React.js dashboard views using Recharts and Material UI.",
        "Structured API and UI flows for reliable dashboard updates and interactive reporting."
      ],
      results: [
        "Delivered real-time KPI tracking across healthcare performance dimensions.",
        "Improved visibility into continuously changing metrics through reusable dashboard components.",
        "Supported interactive reporting through chart-driven visualizations and backend metric services."
      ],
      conclusion: "Demonstrated end-to-end delivery of a healthcare analytics application using ASP.NET Core, React.js, REST APIs, and dashboard visualization libraries.",
      link: ""
    },
    {
      title: "Construction Project Management System",
      subtitle: "SaaS microservices platform",
      category: "Microservices SaaS",
      introduction: "Architected a Construction Project Management SaaS platform using ASP.NET Core and Ocelot API Gateway to route requests across 7 scalable microservices.",
      problem: "Construction teams required a secure, scalable platform for project coordination, document handling, service communication, and cloud-backed reliability across multiple business workflows.",
      objective: "Design and implement a microservices-based SaaS backend with secure authentication, cloud integration, caching, and reliable service routing.",
      methodology: [
        "Used ASP.NET Core and Ocelot API Gateway to route requests across 7 microservices.",
        "Implemented JWT authentication for secure user and service access.",
        "Added Redis caching and Docker-based service packaging for scalable deployment workflows.",
        "Integrated Azure Service Bus, Blob Storage, and Key Vault to improve communication, storage, and secret management."
      ],
      results: [
        "Created a scalable service architecture with centralized request routing.",
        "Strengthened platform reliability through caching, containerization, and Azure service integration.",
        "Improved security posture with JWT authentication and Azure Key Vault-backed secret handling."
      ],
      conclusion: "Showcased backend architecture skills across ASP.NET Core, microservices, API gateway routing, Redis, Docker, and Azure cloud services.",
      link: ""
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Programming',
      skills: ['C#', 'JavaScript', 'TypeScript', 'LINQ', 'Object-Oriented Programming', 'SOLID Principles', 'Performance Optimization', 'Static Code Analysis']
    },
    {
      icon: TrendingUp,
      title: 'Backend',
      skills: ['.NET Core', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework ORM', 'REST APIs', 'Microservices', 'Node.js', 'Middleware Integration', ]
    },
    {
      icon: Users,
      title: 'Frontend & Data',
      skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Redux', 'Lazy Loading', 'Code Splitting', 'SQL Server', 'MySQL', 'MongoDB']
    },
    {
      icon: Lightbulb,
      title: 'Cloud & Tools',
      skills: ['Azure', 'Azure DevOps', 'GitHub Actions', 'CI/CD', 'Docker', 'Redis', 'AWS S3', 'Postman', 'Crystal Reports', 'TFS', 'Visual Studio', 'VS Code', 'SDLC', 'Agile', 'Scrum']
    }
  ];

  const education = [
    {
      school: "Conestoga College",
      degree: "Post-Graduate Certificate in Web Development",
      location: "Ontario, Canada",
      dates: "Apr 2025",
      details: "Focused on modern web development practices, full-stack application delivery, and frontend/backend implementation."
    },
    {
      school: "Gujarat Technological University(GCET)",
      degree: "Bachelor of Engineering in Information Technology",
      location: "Gujarat, India",
      dates: "Jun 2016",
      details: "Built a foundation in software engineering, databases, application development, and information technology systems."
    }
  ];

  const papers: Paper[] = [
    // Add published papers below. Example format:
    // { title: "Paper Title", publication: "Journal/Conference Name", year: "2024", link: "https://..." },
  ];

  const certifications = [
    {
      title: "AWS Cloud Practitioner Essentials",
      platform: "AWS",
      description: "Completed foundational cloud training covering AWS cloud concepts, core services, security, architecture, pricing, and support.",
      link: ""
    },
    {
      title: "Generative AI Fundamentals",
      platform: "Certification",
      description: "Completed foundational training in generative AI concepts, use cases, and responsible application of AI-powered solutions.",
      link: ""
    }
  ];
  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              AISHVARYA SHAH
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificate' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificate' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Aishvarya Shah"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              AISHVARYA SHAH
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              .NET Software Engineer | ASP.NET Core, C#, Microservices
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              ONTARIO, CANADA | HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >VIEW EXPERIENCE</button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >CONTACT</button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'USERS SUPPORTED', value: '3,000+', detail: 'Enterprise Application Scale' },
              { label: 'SQL PERFORMANCE', value: '30%', detail: 'Query Execution Improvement' },
              { label: 'SYNC LATENCY', value: '50%+', detail: 'Background Sync Reduction' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Backend-focused .NET Software Engineer specializing in ASP.NET Core, C#, REST APIs, microservices, SQL optimization, and reliable enterprise application delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Backend Engineering',
                detail: 'Build scalable backend systems with ASP.NET Core, C#, REST APIs, microservices, LINQ, and Entity Framework for enterprise workloads.'
              },
              {
                icon: Rocket,
                title: 'Performance Optimization',
                detail: 'Improve SQL Server performance, background synchronization, API flows, and application responsiveness through clean architecture and targeted tuning.'
              },
              {
                icon: Lightbulb,
                title: 'Cloud & DevOps',
                detail: 'Hands-on with Azure, Azure DevOps, CI/CD, Docker, Redis, AWS S3, Git workflows, and release support for reliable delivery.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Software engineering experience across .NET backend systems, WinForms enterprise applications, POS platforms, SQL Server optimization, and full-stack delivery.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {[role.location, role.dates].filter(Boolean).join(' | ')}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              .NET backend, full-stack dashboard, microservices, cloud, and enterprise SaaS projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed technical implementation or project documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for more project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
              {projects[selectedProject].link && (
                <div>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">
                    {projects[selectedProject].subtitle?.includes('Capstone') ? 'PRESENTATION DECK (PDF)' : 'LINK'}
                  </h3>
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    {projects[selectedProject].subtitle?.includes('Capstone') ? 'View Presentation Deck (PDF)' : 'View Project'}
                    <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              .NET, backend engineering, frontend, database, cloud, DevOps, and delivery skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} Â· {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in software engineering and technology.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} | {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                <p className="text-brown leading-relaxed font-light">{cert.description}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss .NET software engineering, backend systems, microservices, or full-stack development opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+15195022287"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (519) 502-2287
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/aishvarya-shah-608534100/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:aishvarya.softwareengineer@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                aishvarya.softwareengineer@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Aishvarya Shah | .NET Software Engineering.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;



