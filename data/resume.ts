export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  responsibilities: string[];
  technologies: string[];
};

export type ProjectItem = {
  name: string;
  category: string;
  period: string;
  description: string;
  technologies: string[];
  images?: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
};

export const resume = {
  name: "THEERTHA M K",
  title: "Senior Full-Stack Software Engineer",
  email: "theerthamk1998@gmail.com",
  phone: "+971541717980",
  location: "Dubai",
  linkedIn: "linkedin.com/in/theertha-m-k-94abb91b5",
  linkedInUrl: "https://linkedin.com/in/theertha-m-k-94abb91b5",
  website: "stevenpopovich.com",
  websiteUrl: "https://stevenpopovich.com",
  resumeUrl: "",
  summary:
    "Senior Full-Stack Software Engineer with around 4 years and 10 months of experience designing, developing, and maintaining scalable web and mobile applications using React.js, React Native, Angular, TypeScript, Node.js, Express.js, MongoDB, and MySQL. Experienced in building RESTful APIs, responsive user interfaces, cloud deployments, CI/CD pipelines, and performance optimization. Strong background in code reviews, technical mentoring, Agile development, and delivering reliable software solutions from design to deployment.",
  stats: [
    { value: 4, suffix: "y 10m", label: "Experience" },
    { value: 2, suffix: "", label: "Projects" },
    { value: 2, suffix: "", label: "Roles at Bititude" },
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Bititude Technologies",
      location: "Kozhikode, Kerala",
      period: "2024 – Present",
      responsibilities: [
        "Lead the design and development of scalable web and mobile applications using React.js, React Native, Angular, TypeScript, Node.js, Express.js, MongoDB, and MySQL.",
        "Design and implement secure RESTful APIs for seamless communication between frontend and backend services.",
        "Improve application performance by optimizing database queries, backend services, and frontend rendering.",
        "Conduct code reviews and enforce coding standards to ensure maintainable, high-quality software.",
        "Collaborate with UI/UX designers, QA engineers, and product managers to deliver features in Agile sprints.",
        "Implement authentication, authorization, and security best practices across applications.",
        "Manage application deployments and CI/CD pipelines using Git, Docker, AWS, and Kubernetes.",
        "Mentor junior developers through code reviews, technical guidance, and knowledge-sharing sessions.",
        "Participate in technical planning, architecture discussions, and estimation of new features.",
      ],
      technologies: [
        "React.js",
        "React Native",
        "Angular",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AWS",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Software Engineer",
      company: "Bititude Technologies",
      location: "Kozhikode, Kerala",
      period: "2021 – 2024",
      responsibilities: [
        "Developed responsive full-stack web applications using React.js, Node.js, Express.js, MongoDB, MySQL and cross-platform mobile applications using React Native.",
        "Built reusable React components and integrated RESTful APIs to improve development efficiency.",
        "Implemented backend business logic and optimized database queries for better application performance.",
        "Worked closely with cross-functional teams to analyze requirements and deliver high-quality software on schedule.",
        "Diagnosed and resolved production issues through debugging, testing, and performance optimization.",
        "Participated in code reviews and followed Agile/Scrum development practices.",
        "Assisted in application deployment, monitoring, and maintenance across development and production environments.",
      ],
      technologies: [
        "React.js",
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "REST APIs",
        "Git",
      ],
    },
  ],
  skills: [
    { title: "Frontend", items: ["React.js", "Angular", "TypeScript", "JavaScript", "React Native"] },
    { title: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "Authorization"] },
    { title: "Mobile", items: ["React Native", "Cross-platform mobile apps", "Responsive UI"] },
    { title: "Databases", items: ["MongoDB", "MySQL", "Database optimization", "Query tuning"] },
    { title: "Cloud", items: ["AWS", "Cloud deployments"] },
    { title: "DevOps", items: ["Docker", "Kubernetes", "CI/CD pipelines", "Git", "Deployment"] },
    { title: "Testing", items: ["Jest", "Debugging", "Testing", "Performance optimization"] },
    { title: "AI", items: ["OpenAI API", "AI-powered features", "AI chatbot"] },
    { title: "Programming Languages", items: ["Python", "TypeScript", "JavaScript"] },
    { title: "Tools", items: ["Git", "Docker", "Kubernetes", "Redis", "Technical documentation", "Code review"] },
  ],
  projects: [
    {
      name: "Enterprise Workforce Management Platform",
      category: "Enterprise",
      period: "Workforce Platform",
      description:
        "Developed a scalable workforce management platform with employee workflows, role-based access, REST APIs, authentication, and optimized backend services.",
      technologies: ["React.js", "Angular", "Node.js", "MongoDB", "AWS"],
      images: [
        "/projects/dashboard.png",
        "/projects/employees.png",
        "/projects/departments.png",
        "/projects/leave.png",
        "/projects/activity.png",
        "/projects/reports.png",
        "/projects/dashboard-report.png",
        "/projects/profile.png",
        "/projects/settings.png",
      ],
    },
    {
      name: "Chatbot",
      category: "AI",
      period: "Document Q&A",
      description:
        "Developed an AI chatbot for document-based question answering with conversational features, authentication, and AI-powered responses.",
      technologies: ["React.js", "Node.js", "OpenAI API"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (Electrical and Electronics Engineering)",
      institution: "College of Engineering Thalassery",
      location: "Kannur, Kerala",
      period: "2015 – 2019",
    },
  ],
  certifications: [
    "AWS Certified Cloud Practitioner (CLF-C02) Preparation - Udemy",
    "Docker & Kubernetes: The Practical Guide - Udemy",
    "AI & Python Development - 300+ Hands-on Projects - Udemy",
    "Chatbot Development Guide - Beginner to Advanced - Udemy",
  ],
  achievements: [
    "Best Monthly Performer Award for outstanding technical contributions and project delivery.",
    "Successfully delivered multiple full-stack web and mobile applications within project deadlines.",
    "Mentored junior developers through code reviews and technical guidance.",
    "Improved application performance by optimizing frontend rendering and backend database queries.",
  ],
  languages: ["English", "Malayalam", "Hindi (Read and write)"],
  contactMethods: [
    { label: "Email", value: "theerthamk1998@gmail.com", href: "mailto:theerthamk1998@gmail.com" },
    { label: "Phone", value: "+971 54 171 7980", href: "tel:+971541717980" },
    { label: "LinkedIn", value: "linkedin.com/in/theertha-m-k-94abb91b5", href: "https://linkedin.com/in/theertha-m-k-94abb91b5" },
    { label: "Website", value: "stevenpopovich.com", href: "https://stevenpopovich.com" },
  ],
};
