// Static portfolio data — sourced from public GitHub + uploaded resume PDF.

export const PROFILE = {
  name: "Neeraj Kiran Janakula",
  handle: "Jack26-bit",
  location: "Bangalore, IND",
  email: "neerajkiran26@gmail.com",
  phone: "+91 63647 52666",
  github: "https://github.com/Jack26-bit",
  linkedin: "https://www.linkedin.com/in/neeraj-kiran-janakula-904643384/",
  resume: "/Neeraj-Kiran-Janakula-Resume.pdf",
  roles: [
    "AI/ML Engineer",
    "Satellite Systems Enthusiast",
    "Full-Stack Developer",
  ],
  pitch:
    "Exploring the intersection of Artificial Intelligence, Space Systems, Backend Engineering, and Quantitative Finance through research.",
  about:
    "Based in Bangalore. Co-Founder & CTO at an early-stage venture, ML Lead on a CubeSat payload research project, and a builder of cross-platform products — Flutter mobile apps, RL trading agents, IoT telemetry systems. I work like a katana: small, sharp, intentional.",
};

// Skills bands grouped roughly by category — Languages on band 1, ML/Systems on band 2.
export const SKILLS_BAND_1 = [
  "Python",
  "TypeScript",
  "JavaScript",
  "C",
  "C++",
  "Dart",
  "SQL",
  "HTML",
  "CSS",
  "Embedded C/C++",
];

export const SKILLS_BAND_2 = [
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
  "OpenCV",
  "RAG · AI Agents",
  "MLOps",
  "Flutter",
  "React · Next.js",
  "Node · Express",
  "ESP32 · Arduino",
  "GCP · Firebase",
  "Docker · Linux",
  "MongoDB · Postgres",
];

// Skill capability grid — 4 distilled pillars.
export const SKILL_PILLARS = [
  {
    n: "(01)",
    t: "AI / ML Systems",
    d: "Predictive time-series, signal processing, generative AI, RAG and AI-agent architectures.",
  },
  {
    n: "(02)",
    t: "Aerospace · CubeSat",
    d: "CubeSat payload research, NavIC/GNSS ionospheric scintillation prediction, telemetry systems.",
  },
  {
    n: "(03)",
    t: "Full-Stack Product",
    d: "React / Node / Flutter / Firebase / Mongo — shipping startup MVPs end-to-end.",
  },
  {
    n: "(04)",
    t: "Embedded / IoT",
    d: "ESP32, Arduino, GPS + environmental sensing, wireless telemetry, ground-station dashboards.",
  },
];

export const PROJECTS = [
  {
    slug: "ai-weather-drones",
    index: "I",
    title: "AI Weather Assistant",
    subtitle: "Drones & Small Aircraft",
    year: "2025",
    discipline: "AI / Aerospace",
    description:
      "Real-time weather monitoring, flight-safety analysis and intelligent risk recommendations for unmanned aerial operators.",
    stack: ["Python", "ML", "Weather APIs"],
    href: "https://github.com/Jack26-bit/AI_weather_Assistant_for_Drones_and_Small_Aircrafts",
    image:
      "https://images.unsplash.com/photo-1477840539360-4a1d23071046?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
    size: "large",
  },
  {
    slug: "cansat",
    index: "II",
    title: "CanSat Live Telemetry",
    subtitle: "1st Prize — IoT Expo 2025",
    year: "2025",
    discipline: "Space Systems",
    description:
      "End-to-end CanSat platform: ESP32 firmware, GPS + environmental sensing, real-time wireless telemetry and a ground-station dashboard. Released open-source.",
    stack: ["ESP32", "Embedded C++", "GPS"],
    href: "https://github.com/Jack26-bit/How-to-build-a-Cansat",
    image:
      "https://images.unsplash.com/photo-1710267224163-0ee7e0d7a7ce?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
    size: "medium",
  },
  {
    slug: "trading-algo-ai",
    index: "III",
    title: "Navi Trade",
    subtitle: "Reinforcement Learning Quant Engine",
    year: "2024",
    discipline: "Quant Finance",
    description:
      "Experimental RL trading platform with real-time paper-trading simulation — watch an agent learn strategy from the tape.",
    stack: ["Python", "RL", "PyTorch"],
    href: "https://github.com/Jack26-bit/Trading_Algo_AI",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
    size: "medium",
  },
  {
    slug: "iko",
    index: "IV",
    title: "IKO",
    subtitle: "Tasks as Quests — RPG Productivity",
    year: "2024",
    discipline: "Mobile / Creative",
    description:
      "A Flutter mobile app that transforms real-life habits and tasks into a role-playing game. Complete quests, earn XP, level up your life.",
    stack: ["Flutter", "Dart", "Firebase"],
    href: "https://github.com/Jack26-bit/IKO",
    image:
      "https://images.unsplash.com/photo-1776702683574-f91f73a3cd26?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
    size: "small",
  },
  {
    slug: "resq",
    index: "V",
    title: "ResQ",
    subtitle: "AI-Powered Emergency Response",
    year: "2026",
    discipline: "AI / Full-Stack",
    description:
      "Voice-to-text incident reporting, ML-based request classification, real-time location-aware coordination. Submitted to the Google Build with AI Challenge.",
    stack: ["React", "Node", "Python", "MongoDB", "GCP"],
    href: "https://github.com/Jack26-bit/Resq",
    image:
      "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
    size: "medium",
  },
  {
    slug: "chess",
    index: "VI",
    title: "Multiplayer Chess",
    subtitle: "Offline Two-Player Engine",
    year: "2023",
    discipline: "Game / Python",
    description:
      "An interactive offline chess engine in Python + Pygame — full movement rules, piece highlights, pawn promotion and win detection.",
    stack: ["Python", "Pygame"],
    href: "https://github.com/Jack26-bit/Multi_player_chess_game",
    image:
      "https://images.unsplash.com/photo-1739416333363-4b01dd9874c0?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
    size: "small",
  },
];

export const EXPERIENCE = [
  {
    slug: "ml-lead-cubesat",
    year: "2026 —",
    role: "Machine Learning Lead",
    org: "CubeSat Payload Research",
    summary:
      "Researching AI/ML for real-time NavIC/GNSS ionospheric-scintillation prediction and automated interference classification. Designing intelligent payload architectures for next-generation small-satellite systems.",
  },
  {
    slug: "cofounder-cto",
    year: "2025 — 2026",
    role: "Co-Founder & CTO",
    org: "Startup Venture",
    summary:
      "Architected and led end-to-end product development — full-stack frontend, backend APIs, database design, cloud deployment. Top 100 Team at SmartIDEAthon 2025.",
  },
  {
    slug: "resq-builder",
    year: "2026",
    role: "Full-Stack & AI/ML Developer",
    org: "ResQ · Google Build with AI",
    summary:
      "Built an AI-powered emergency-response platform — voice-to-text reporting, ML request classification, secure REST backend, real-time coordination. Submitted to Google Build with AI Challenge.",
  },
  {
    slug: "cansat-iot",
    year: "2025",
    role: "Embedded · Aerospace Builder",
    org: "CanSat Live Telemetry",
    summary:
      "Designed and built an end-to-end CanSat platform on ESP32 — hardware, firmware, telemetry, ground station. Released as open-source education. Won 1st Prize at IoT Expo 2025.",
  },
];

export const EDUCATION = [
  {
    slug: "btech-aiml",
    year: "2025 — 2029",
    degree: "B.Tech, Artificial Intelligence & Machine Learning",
    school: "REVA University, Bangalore",
  },
  {
    slug: "pre-university",
    year: "2023 — 2025",
    degree: "Pre-University · PCMC (Physics · Chem · Math · CS)",
    school: "Nagarjuna Pre-University College",
  },
  {
    slug: "icse",
    year: "2023",
    degree: "ICSE — 10th Standard",
    school: "Euro School",
  },
];

export const ACHIEVEMENTS = [
  {
    slug: "iot-expo-1st",
    label: "1st Prize",
    title: "IoT Expo 2025",
    description:
      "CanSat Live Telemetry System — recognised for excellence in embedded systems, IoT and aerospace engineering.",
  },
  {
    slug: "smartideathon",
    label: "Top 100",
    title: "SmartIDEAthon 2025",
    description:
      "Selected among thousands of national teams at the ideation stage for innovation and technical concept.",
  },
  {
    slug: "google-build-ai",
    label: "Submission",
    title: "Google Build with AI · 2026",
    description:
      "ResQ — AI-driven emergency-response platform demonstrating applied ML for real-world social impact.",
  },
];

export const CERTIFICATIONS = [
  {
    slug: "wadhwani",
    year: "2026",
    title: "Startup & Entrepreneurship · Proficiency",
    issuer: "Wadhwani Foundation",
  },
  {
    slug: "ibm-py",
    year: "2026",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
  },
  {
    slug: "codedex-py",
    year: "2025",
    title: "Python Programming",
    issuer: "Codedex",
  },
];
