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
  imageOrientation?: "landscape" | "portrait";
  githubUrl?: string;
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
    "Senior Full-Stack Software Engineer with nearly 5 years of experience designing, developing, and maintaining scalable web and mobile applications using React.js, React Native, Angular, TypeScript, Node.js, Express.js, MongoDB, and MySQL. Skilled in building RESTful APIs, responsive user interfaces, cloud deployments, CI/CD pipelines, and performance optimization. Experienced in designing scalable architectures, leading feature development, conducting code reviews, mentoring developers, and delivering reliable software solutions across the full software development lifecycle.",
  stats: [
    { value: 5, suffix: "", label: "Years Experience" },
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
        "Lead the design and development of scalable web and mobile applications using React.js, React Native, Angular, TypeScript, Node.js, Express.js, MongoDB, and MySQL, delivering enterprise solutions across multiple domains.",
        "Design and implement secure RESTful APIs for seamless communication between frontend and backend services.",
        "Improve application performance by optimizing database queries, API response times, and frontend rendering performance.",
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
    { title: "Frontend", items: ["React.js", "React Native", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { title: "Backend", items: ["Node.js", "Express.js", "NestJS", "REST APIs"] },
    { title: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Prisma ORM"] },
    { title: "Testing & Tools", items: ["Jest", "Git", "Figma", "Technical Documentation"] },
    { title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"] },
    { title: "Soft Skills", items: ["Code Review", "Mentoring", "Problem Solving", "Communication"] },
  ],
  projects: [
    {
      name: "CoreHR",
      category: "Enterprise",
      period: "Employee Management & Workforce Platform",
      description:
        "A full-stack workforce management platform designed for employee lifecycle management, including employee directories, leave workflows, notifications, and role-based access control. Built as a monorepo with a scalable backend and modern React frontend featuring authentication, workflow automation, and production-ready architecture.",
      technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "Prisma", "PostgreSQL", "Docker", "GitHub Actions"],
      githubUrl: "https://github.com/MK-theertha/CoreHR",
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
      name: "Elara",
      category: "Mobile",
      period: "Productivity App",
      description:
        "A cross-platform productivity application for managing tasks, calendars, notes, expenses, and shopping lists.",
      technologies: ["React Native", "Expo", "NestJS", "PostgreSQL", "TypeScript"],
      githubUrl: "https://github.com/MK-theertha/Elara",
      imageOrientation: "portrait" as const,
      images: [
        "/projects/mob-home.png",
        "/projects/mob-tasks.png",
        "/projects/mob-calender.png",
        "/projects/mob-expenses.png",
        "/projects/mob-settings.png",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (Electrical and Electronics Engineering)",
      institution: "College of Engineering Thalassery",
      location: "Kannur, Kerala",
      period: "2015 – 2019",
    },
    {
      degree: "Plus Two (Computer Science)",
      institution: "JNM GHSS Puduppanam - Vadakara",
      location: "Kozhikode, Kerala",
      period: "2013 – 2015",
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
  languages: ["English", "Malayalam"],
  contactMethods: [
    { label: "Email", value: "theerthamk1998@gmail.com", href: "mailto:theerthamk1998@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/theertha-m-k-94abb91b5", href: "https://linkedin.com/in/theertha-m-k-94abb91b5" },
  ],
};
