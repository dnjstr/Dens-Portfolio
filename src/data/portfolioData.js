export const projects = [
  {
    id: 1,
    title: 'Movie Haven',
    description: 'A movie recommendation web app built with React and TypeScript that uses the TMDB API to provide personalized movie suggestions based on user preferences and viewing history.',
    tech: ['TypeScript', 'React', 'Node.js'],
    image: '/movie-haven.png',
  },
  {
    id: 2,
    title: 'JIA Integrated Management System',
    description: 'A centralized business management system built with React and Node.js that uses Express APIs with SQLite and PostgreSQL synchronization to automate inventory, POS transactions, attendance tracking, and e wallet payment management.',
    tech: ['React', 'Node.js', 'Express.js', 'SQLite', 'PostgreSQL'],
    image: '/jia-system.png',
  },
  {
    id: 3,
    title: 'LENS',
    description: 'A web based RFID attendance system that uses ESP32 scanning, a Flask ingestion service, an Express.js API with Redis caching, and a React TypeScript frontend to automate secure library check in and log management.',
    tech: ['ESP32', 'RFID', 'Flask', 'Express.js', 'Redis', 'React', 'TypeScript', 'Vite'],
    image: '/lens.png',
  },
];

export const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'AWS', level: 65 },
];

export const personalInfo = {
  name: 'Den Jester Antonio',
  title: 'Full Stack Developer & Creative Problem Solver',
  bio: [
    "I'm a passionate full-stack developer with 2+ years of experience building web applications. I love turning complex problems into simple, beautiful solutions.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community."
  ],
  social: {
    github: 'https://github.com/dnjstr',
    linkedin: 'https://www.linkedin.com/in/den-jester-antonio-291214349/',
    facebook: "https://www.facebook.com/denden.antonio.583"
  }
};

export const navLinks = ['home', 'about', 'projects', 'contact'];