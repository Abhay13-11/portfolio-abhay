export const portfolioData = {
  personal: {
    name: "Abhay Singh Chauhan",
    callsign: "ASC_01",
    roles: [
      "Cyber Security & CS Engineer",
      "Full-Stack MERN Developer",
      "Competitive Programmer (1697)",
      "AI Systems Integrator"
    ],
    tagline: "Engineering resilient systems, algorithmic mastery, and digital products.",
    bio: "Computer Science Engineering (Hons) undergraduate specializing in Cyber Security at GL Bajaj Institute of Technology and Management. Experienced in architecting full-stack MERN platforms, optimizing algorithms with 550+ LeetCode problems solved (1697 Contest Rating - Top 17.24% globally), and solving real production challenges across distributed APIs and AI integrations.",
    location: "Greater Noida, Uttar Pradesh, India",
    email: "singhabhaydpr@gmail.com",
    phone: "+91 9557794835",
    github: "https://github.com/Abhay13-11",
    linkedin: "https://www.linkedin.com/in/abhay-singh-chauhan13/",
    leetcode: "https://leetcode.com/u/Abhay_13_11/",
    resumeUrl: "/Abhay-Singh-Chauhan-Resume.pdf",
    avatar: "/avatar.jpg"
  },

  telemetry: {
    problemsSolved: "550+",
    contestRating: "1697",
    globalPercentile: "Top 17.24%",
    cgpa: "8.69",
    classXII: "95.66%",
    classX: "89%",
    gradYear: "2028",
    batch: "2024 - 2028",
    uptime: "99.98%",
    status: "READY_FOR_DEPLOYMENT"
  },

  projects: [
    {
      id: "deadline-ai",
      title: "DeadlineAI",
      subtitle: "AI-Powered Career & Deadline Operating System",
      type: "FEATURED_SYSTEM",
      badge: "PRODUCTION",
      accent: "green",
      status: "LIVE & DEPLOYED",
      description: "A full-stack task and deadline management platform turning natural language input into structured execution pipelines with automated priority scheduling and OCR document parsing.",
      highlights: [
        "Natural-language task extraction powered by Google Gemini API chat pipeline.",
        "Engineered OCR-to-task pipeline with date-format normalization preventing task drops.",
        "Hardened production deployment resolving database pooling and API reliability issues.",
        "Deployed with split architecture on Vercel (Frontend) and Render (Node/Express API)."
      ],
      stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Gemini API", "OCR", "Tailwind CSS"],
      liveUrl: "https://deadline-ai-client.vercel.app/",
      githubUrl: "https://github.com/Abhay13-11/DeadlineAI"
    },
    {
      id: "prehab360",
      title: "Prehab360",
      subtitle: "Personalized Digital Physiotherapy & Rehabilitation Platform",
      type: "FEATURED_SYSTEM",
      badge: "ACTIVE DEV",
      accent: "cyan",
      status: "LIVE PROTOTYPE",
      description: "A next-generation digital rehabilitation platform focused on structured physiotherapy plans, personalized exercise unlocks, and automated progression analytics.",
      highlights: [
        "Rule-based recommendation engine for condition-specific rehabilitation pathways.",
        "Dynamic exercise library with weekly unlock logic and patient compliance tracking.",
        "Exploratory camera-based posture tracking and movement verification architecture.",
        "Responsive, accessible interface crafted with Next.js, React, and Tailwind CSS."
      ],
      stack: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS", "Zustand"],
      liveUrl: "https://prehab360.lovable.app/",
      githubUrl: "https://github.com/Abhay13-11"
    },
    {
      id: "sorting-visualizer",
      title: "Sorting Algorithm Visualizer",
      subtitle: "Interactive Algorithmic Execution & Complexity Studio",
      type: "ALGORITHMIC_LAB",
      badge: "SHIPPED",
      accent: "violet",
      status: "STABLE",
      description: "Interactive visual environment for dissecting sorting algorithms in real-time, connecting low-level computational mechanics with visual feedback and time-complexity comparison graphs.",
      highlights: [
        "Step-by-step visual animation engine for Bubble Sort, Merge Sort, and Quick Sort.",
        "Dynamic speed controls, randomized input generators, and customizable array sizes.",
        "Integrated real-time Chart.js complexity benchmarks comparing execution curves."
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "Algorithms", "Chart.js", "Data Structures"],
      liveUrl: "https://github.com/Abhay13-11/sorting-visualizer",
      githubUrl: "https://github.com/Abhay13-11/sorting-visualizer"
    },
    {
      id: "telemed-healthbridge",
      title: "TeleMed-HealthBridge",
      subtitle: "Distributed Digital Healthcare Portal",
      type: "HEALTH_TECH",
      badge: "DEPLOYED",
      accent: "emerald",
      status: "ONLINE",
      description: "Telemedicine application engineered to bridge communication between remote patients and medical practitioners with unified consultation tracking.",
      highlights: [
        "Real-time consultation booking and medical records management.",
        "Engineered with clean RESTful API integration and modular UI components.",
        "Deployed and tested on Vercel edge infrastructure."
      ],
      stack: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Vercel"],
      liveUrl: "https://health-bridge-xi.vercel.app",
      githubUrl: "https://github.com/Abhay13-11/TeleMed-HealthBridge"
    }
  ],

  experience: [
    {
      id: "ewb-edutech",
      role: "JavaScript Web Development Intern",
      organization: "EWB Edutech Pvt. Ltd.",
      platform: "AICTE National Internship Portal",
      period: "Sep 2026 - Oct 2026",
      type: "INDUSTRY_INTERNSHIP",
      status: "COMPLETED & CERTIFIED",
      badge: "AICTE PORTAL • DPIIT",
      credentialId: "EWB/INT/2026/0620",
      certificateUrl: "/certificates/EWB-Edutech-Certificate.pdf",
      offerLetterUrl: "/certificates/EWB-Edutech-Offer-Letter.pdf",
      description: "Selected through the AICTE National Internship Portal (Student ID: STU69ed01dbcfa381777140187) to engineer real-world JavaScript web applications and interactive client solutions.",
      highlights: [
        "Built and shipped assigned real-world JavaScript web projects focusing on async workflows and responsive UI.",
        "Completed all weekly assessments, sprint milestones, and final mini-project evaluations with distinction.",
        "Verified credential issued: Certificate ID EWB/INT/2026/0620 (DPIIT Recognized Startup & MSME Registered)."
      ]
    },
    {
      id: "skill-nexis",
      role: "Web Developer Intern",
      organization: "Skill Nexis",
      platform: "AICTE & MSME Registered",
      period: "Sep 2026 - Oct 2026",
      type: "INDUSTRY_INTERNSHIP",
      status: "COMPLETED & CERTIFIED",
      badge: "6-WEEK INTERNSHIP",
      credentialDate: "03-10-2026",
      certificateUrl: "/certificates/Skill-Nexis-Certificate.png",
      offerLetterUrl: "/certificates/Skill-Nexis-Offer-Letter.pdf",
      description: "Completed an intensive 6-week web development internship program in HTML5, CSS3, and modern JavaScript, engineering assigned production tasks within strict deadlines.",
      highlights: [
        "Engineered responsive web applications and reusable frontend components matching design specifications.",
        "Delivered assigned project tasks and sprint deliverables ahead of schedule under engineering leadership.",
        "Successfully awarded official 6-Week Certificate of Completion by Founder & Program Head."
      ]
    },
    {
      id: "jpmc",
      role: "Software Engineering Virtual Experience",
      organization: "JPMorgan Chase & Co.",
      platform: "Forage",
      period: "2025",
      type: "INTERNSHIP_EXPERIENCE",
      status: "COMPLETED",
      badge: "VIRTUAL INTERNSHIP",
      description: "Engineered financial system simulations, interface integration, and data visualization pipelines within JPMorgan Chase's codebase framework.",
      highlights: [
        "Implemented perspective data feed components for financial market monitoring.",
        "Engineered streaming price data correlation graphs and ratio calculations.",
        "Resolved testing edge cases and validated patch integration (Repo: forage-midas)."
      ]
    },
    {
      id: "aws-forage",
      role: "Solutions Architecture Virtual Experience",
      organization: "Amazon Web Services (AWS)",
      platform: "Forage",
      period: "2025",
      type: "INTERNSHIP_EXPERIENCE",
      status: "COMPLETED",
      badge: "CLOUD ARCHITECTURE",
      description: "Designed resilient, scalable cloud architectures adhering to the AWS Well-Architected Framework for enterprise workloads.",
      highlights: [
        "Evaluated high-availability cloud migration models and distributed compute strategies.",
        "Structured multi-tier cloud topology diagrams emphasizing security and failover reliability."
      ]
    },
    {
      id: "colledge",
      role: "Top 5 Finalist Shortlist",
      organization: "Coll-Edge Connect Internship Selection",
      platform: "National Assessment",
      period: "2025 - 2026",
      type: "COMPETITIVE_SELECTION",
      status: "HONOR",
      badge: "TOP 5 OF 2,800+",
      description: "Competed through multi-stage technical screening and algorithmic problem-solving assessments, earning a top 5 ranking among ~2,800 applicants."
    }
  ],

  leadership: [
    {
      role: "Campus Ambassador",
      organization: "IIT Bombay (E-Cell)",
      credential: "Official Offer Letter Received",
      year: "2024 - 2025",
      icon: "ShieldAlert"
    },
    {
      role: "Campus Ambassador",
      organization: "Internshala",
      credential: "Official Offer Letter Received",
      year: "2024 - 2025",
      icon: "Award"
    },
    {
      role: "Open Source Contributor",
      organization: "GirlScript Summer of Code (GSSoC)",
      credential: "Earned Official Participation Badge",
      year: "2024",
      icon: "GitBranch"
    },
    {
      role: "Hackathon Competitor",
      organization: "Smart India Hackathon (SIH)",
      credential: "Official Team Participant",
      year: "2024",
      icon: "Terminal"
    }
  ],

  education: [
    {
      institution: "GL Bajaj Institute of Technology and Management",
      degree: "B.Tech (Hons.) in Computer Science & Engineering",
      specialization: "Specialization in Cyber Security",
      affiliation: "Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
      period: "Aug 2024 – Expected May 2028",
      score: "8.69 / 10",
      scoreLabel: "Current CGPA",
      status: "CURRENTLY ENROLLED (3rd Year)",
      highlights: [
        "Core Focus: Cyber Security Protocols, Cryptography, Secure Software Architecture.",
        "Consistent academic excellence with 8.69 cumulative grade point average."
      ]
    },
    {
      institution: "Central Board of Secondary Education (CBSE)",
      degree: "Senior Secondary School Examination (Class XII)",
      period: "Completed 2024",
      score: "95.66%",
      scoreLabel: "Aggregate Distinction",
      status: "MERIT COMPLETED",
      highlights: ["Physics, Chemistry, Mathematics, Computer Science."]
    },
    {
      institution: "Central Board of Secondary Education (CBSE)",
      degree: "Secondary School Examination (Class X)",
      period: "Completed 2022",
      score: "89.00%",
      scoreLabel: "Aggregate Score",
      status: "MERIT COMPLETED"
    }
  ],

  dsaArena: {
    totalSolved: "550+",
    contestRating: 1697,
    percentile: "Top 17.24% Globally",
    challenge: "45-Day Striver SDE Sheet Completed",
    primaryLanguage: "C++ (Optimized STL, Pointers, Memory Management)",
    categories: [
      { name: "Dynamic Programming", count: "80+", level: "Advanced" },
      { name: "Graphs & Trees", count: "110+", level: "Advanced" },
      { name: "Arrays & Strings", count: "140+", level: "Expert" },
      { name: "Binary Search & 2 Pointers", count: "90+", level: "Expert" },
      { name: "Sliding Window & Hashing", count: "75+", level: "Advanced" },
      { name: "Recursion & Backtracking", count: "55+", level: "Intermediate" }
    ]
  },

  certifications: [
    {
      title: "Internship Certificate — Web Development JavaScript",
      issuer: "EWB Courses / EWB Edutech Pvt. Ltd. (AICTE Portal & DPIIT)",
      date: "16 Oct 2026",
      credentialId: "EWB/INT/2026/0620",
      verified: true,
      category: "JavaScript Engineering"
    },
    {
      title: "Certificate of Completion — 6 Weeks Web Development",
      issuer: "Skill Nexis (AICTE & MSME Reg.)",
      date: "03 Oct 2026",
      verified: true,
      category: "Web Development"
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "Dec 2025",
      verified: true,
      category: "Cloud"
    },
    {
      title: "Oracle Cloud Infrastructure Foundations Associate",
      issuer: "Oracle",
      date: "2025",
      verified: true,
      category: "Cloud / OCI"
    },
    {
      title: "Software Engineering Virtual Experience",
      issuer: "JPMorgan Chase & Co. via Forage",
      date: "2025",
      verified: true,
      category: "Software Engineering"
    },
    {
      title: "Solutions Architecture Virtual Experience",
      issuer: "Amazon Web Services via Forage",
      date: "2025",
      verified: true,
      category: "Architecture"
    },
    {
      title: "Salesforce Agentblazer Program",
      issuer: "Salesforce",
      date: "2025",
      verified: true,
      category: "Enterprise AI"
    }
  ],

  skillClusters: [
    {
      category: "Core Languages",
      color: "green",
      skills: ["C++", "C", "Java", "JavaScript (ES6+)", "TypeScript", "Python"]
    },
    {
      category: "Cyber Security & Systems",
      color: "cyan",
      skills: ["Network Security", "Vulnerability Analysis", "Linux / Bash", "Cryptographic Fundamentals", "OWASP Best Practices"]
    },
    {
      category: "Full-Stack Development",
      color: "emerald",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "REST API Design", "Three.js (WebGL)"]
    },
    {
      category: "Databases & Storage",
      color: "violet",
      skills: ["MongoDB", "MongoDB Atlas", "Mongoose", "DBMS Architecture", "Indexing & Query Optimization"]
    },
    {
      category: "AI & Intelligence",
      color: "pink",
      skills: ["Google Gemini API", "OCR Document Pipelines", "Prompt Engineering", "AI Agent Integration"]
    },
    {
      category: "Cloud & Dev Environment",
      color: "amber",
      skills: ["Git & GitHub", "Vercel", "Render", "AWS Academy", "Postman", "VS Code"]
    }
  ]
};
