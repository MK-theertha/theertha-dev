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
  location: "Dubai, UAE",
  linkedIn: "linkedin.com/in/theertha-m-k-94abb91b5",
  linkedInUrl: "https://linkedin.com/in/theertha-m-k-94abb91b5",
  githubWork: "github.com/Theertha-mk",
  githubWorkUrl: "https://github.com/Theertha-mk",
  githubPersonal: "github.com/MK-theertha",
  githubPersonalUrl: "https://github.com/MK-theertha",
  website: "theertha-dev.vercel.app",
  websiteUrl: "https://theertha-dev.vercel.app",
  resumeUrl: "",
  summary:
    "Senior Full-Stack Software Engineer with almost 5 years of experience designing, developing, and maintaining scalable web and mobile applications. Experienced in React.js, React Native, Angular, TypeScript, Node.js, NestJS, Python, PostgreSQL, MongoDB, MySQL, and AWS. Strong background in RESTful API development, authentication and authorization, CI/CD, performance optimization, system design, code reviews, and mentoring developers. Proven ability to deliver features across the full software development lifecycle in Agile environments.",
  stats: [
    { value: 5, suffix: "", label: "Years Experience" },
    { value: 5, suffix: "", label: "Projects Delivered" },
    { value: 8, suffix: "", label: "Developers Mentored" },
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Bititude Technologies",
      location: "Kozhikode, Kerala",
      period: "2024 – Present",
      responsibilities: [
        "Led feature development across 2 full-stack web and mobile applications using Angular, React.js, React Native, TypeScript, Node.js, Express.js, and NestJS.",
        "Designed and implemented secure RESTful APIs, authentication, authorization, and application security practices.",
        "Optimized database queries, backend APIs, and frontend rendering to improve application performance and responsiveness.",
        "Managed application deployments and CI/CD workflows using Git and Docker.",
        "Mentored 8 junior developers through code reviews, technical guidance, and best-practice discussions.",
        "Collaborated with UI/UX designers, QA engineers, and product managers to deliver features within Agile sprints.",
        "Contributed to technical planning, system architecture, estimation, and technical decision-making.",
        "Created and maintained technical documentation covering architecture, setup procedures, development workflows, APIs, and implementation guidelines to support knowledge sharing and team onboarding.",
      ],
      technologies: [
        "React.js",
        "React Native",
        "Angular",
        "TypeScript",
        "Node.js",
        "Express.js",
        "NestJS",
        "Docker",
      ],
    },
    {
      title: "Software Engineer",
      company: "Bititude Technologies",
      location: "Kozhikode, Kerala",
      period: "2021 – 2024",
      responsibilities: [
        "Delivered features across 3 full-stack web and mobile applications using React.js, React Native, Node.js, Express.js, MongoDB, and MySQL.",
        "Built cross-platform mobile applications using React Native.",
        "Developed reusable React components and integrated RESTful APIs with authentication and offline capabilities.",
        "Implemented backend business logic and optimized database queries to support application performance.",
        "Diagnosed and resolved production issues through debugging, testing, and performance optimization.",
        "Worked closely with cross-functional teams throughout development, testing, deployment, and Agile/Scrum activities.",
        "Participated in code reviews and followed established coding standards and development practices.",
      ],
      technologies: [
        "React.js",
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
      ],
    },
  ],
  skills: [
    { title: "Frontend", items: ["React.js", "Next.js", "React Native", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Context API", "React Hooks", "Responsive Web Design", "Shopify"] },
    { title: "Backend & APIs", items: ["Node.js", "Express.js", "NestJS", "Python", "FastAPI", "REST APIs", "GraphQL"] },
    { title: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Prisma ORM"] },
    { title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"] },
    { title: "Testing & Tools", items: ["Unit Testing", "Integration Testing", "End-to-End (E2E) Testing", "Jest", "Git"] },
    { title: "Engineering & Soft Skills", items: ["Problem Solving", "Communication", "Collaboration", "Mentoring", "Organization", "Code Review", "Technical Documentation"] },
    { title: "AI & Development Tools", items: ["Claude", "ChatGPT", "GitHub Copilot", "Google Gemini API", "Prompt Engineering"] },
  ],
  projects: [
    {
      name: "CoreHR",
      category: "Enterprise",
      period: "Employee Management & Workforce Platform",
      description:
        "A full-stack workforce platform supporting employee management, leave workflows, role-based access control (RBAC), notifications, reporting, and audit logging. Built with FastAPI services backed by PostgreSQL for application data and Redis for caching and rate limiting, with JWT-based authentication and AWS S3 storage for secure file management. Delivery is automated with Docker, Terraform, and GitHub Actions.",
      technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "AWS", "Docker", "Terraform", "GitHub Actions"],
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
        "Cross-platform productivity application for managing tasks, calendars, notes, expenses, and shopping lists, enhanced with AI-powered features using the Google Gemini API.",
      technologies: ["React Native", "Expo", "NestJS", "PostgreSQL", "TypeScript", "Google Gemini API"],
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
  ],
  achievements: [
    "Received the Best Monthly Performer Award for strong technical contributions, ownership, and timely project delivery.",
    "Contributed to the successful delivery of 5 full-stack web and mobile projects across Software Engineer and Senior Software Engineer roles.",
    "Mentored 8 junior developers through technical guidance, code reviews, and best-practice discussions.",
    "Built personal full-stack projects using AWS, Docker, Terraform, CI/CD, Redis, FastAPI, and AI APIs to expand expertise across cloud, DevOps, backend, and AI technologies.",
  ],
  languages: ["English", "Malayalam"],
  contactMethods: [
    { label: "Email", value: "theerthamk1998@gmail.com", href: "mailto:theerthamk1998@gmail.com" },
    { label: "Phone", value: "+971541717980", href: "tel:+971541717980" },
    { label: "LinkedIn", value: "linkedin.com/in/theertha-m-k-94abb91b5", href: "https://linkedin.com/in/theertha-m-k-94abb91b5" },
    { label: "GitHub (Work)", value: "github.com/Theertha-mk", href: "https://github.com/Theertha-mk" },
    { label: "GitHub (Personal)", value: "github.com/MK-theertha", href: "https://github.com/MK-theertha" },
  ],
};
