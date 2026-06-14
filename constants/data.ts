export type PortfolioView = "ai" | "software";

export const personalInfo = {
  name: "Kaif Islam",
  email: "kaifislam48@gmail.com",
  phone: "7061210070",
  github: "https://github.com/Kaifislam48",
  linkedin: "https://www.linkedin.com/in/kaifislam49/"
};

export const profileViews: Record<
  PortfolioView,
  { title: string; tagline: string; about: string; typingWords: string[]; focusLabel: string; priorityCategories: string[] }
> = {
  ai: {
    title: "AI & ML Engineer",
    tagline: "I design and deploy intelligent systems powered by NLP, Computer Vision, and Generative AI.",
    about:
      "AI & ML Engineer focused on building intelligent, scalable solutions using Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI. Experienced in transforming data into production-ready AI systems that solve real-world challenges and create measurable impact.",
    typingWords: ["LLM workflows", "NLP pipelines", "Computer Vision", "Intelligent automation"],
    focusLabel: "AI Engineer Profile",
    priorityCategories: ["Data Science & ML", "AI / Advanced Systems", "Languages", "Tools / Platforms", "Core Skills"]
  },
  software: {
    title: "Software Engineer",
    tagline: "I design and deploy full-stack products with scalable architecture, clean APIs, and polished user experiences.",
    about:
      "Software Engineer with a strong focus on Full Stack Web Development using the MERN stack. Experienced in designing and delivering scalable applications with React, Node.js, Express, and MongoDB, while integrating AI capabilities where they add product value.",
    typingWords: ["MERN architecture", "Scalable APIs", "SaaS products", "Production systems"],
    focusLabel: "Software Engineer Profile",
    priorityCategories: ["Web Development", "Databases", "Languages", "Tools / Platforms", "Core Skills", "AI / Advanced Systems"]
  }
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "JavaScript", "Java", "Kotlin", "SQL"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"]
  },
  {
    category: "Web Development",
    items: ["React.js", "Node.js", "Flask", "FastAPI", "REST APIs", "HTML", "CSS", "Streamlit", "Express.js"]
  },
  {
    category: "Data Science & ML",
    items: [
      "Machine Learning",
      "Deep Learning (CNNs, RNNs, LSTM)",
      "Generative AI",
      "Large Language Models (LLMs)",
      "NLP",
      "Computer Vision",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV"
    ]
  },
  {
    category: "AI / Advanced Systems",
    items: [
      "Vector Search (FAISS)",
      "Embeddings (Sentence Transformers)",
      "Recommendation Systems",
      "AI Chatbots",
      "Resume Parsing (spaCy, PyMuPDF)",
      "Semantic Search"
    ]
  },
  {
    category: "Tools / Platforms",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Nginx",
      "Redis",
      "Prometheus",
      "Grafana",
      "Sentry",
      "VS Code",
      "PyCharm",
      "Jupyter",
      "Google Colab",
      "Figma"
    ]
  },
  {
    category: "Core Skills",
    items: [
      "Data Structures & Algorithms",
      "Problem Solving",
      "Object-Oriented Programming",
      "API Integration",
      "Unit Testing (Jest)",
      "Agile Methodology",
      "System Design Basics"
    ]
  }
] as const;

export const projects = [
  {
    title: "TalentPilot AI",
    type: "ai",
    description:
      "AI SaaS platform for resume analysis, ATS scoring, semantic job matching, and real-time interview simulation with LLMs.",
    stack:
      "MERN, Socket.io, spaCy, PyMuPDF, Sentence Transformers, FAISS, Ollama, Docker, Prometheus",
    github: "https://github.com/Kaifislam48/TalentPilot-AI-Intelligent-Career-Acceleration-Platform",
    demo: ""
  },
  {
    title: "FlowMind AI",
    type: "ai",
    description:
      "Autonomous AI agent for business operations — automates lead analytics, CRM workflows, and data-driven decision-making with intelligent pipeline orchestration.",
    stack:
      "Node.js, Express, MongoDB, Gemini AI, Docker, GitHub Actions, REST APIs",
    github: "https://github.com/Kaifislam48/FlowMind-AI-Autonomous-Business-Operations-Agent",
    demo: ""
  },
  {
    title: "InterviewIQ",
    type: "software",
    description:
      "Enterprise-grade AI-powered technical assessment & interview intelligence platform with ATS resume feedback, AI mock interviews, timed assessments, sandboxed code execution, and progress analytics.",
    stack:
      "MERN, Gemini AI, JWT, Helmet, Docker, Node.js VM Sandbox, Mongoose, GitHub Actions, Vercel, Render",
    github: "https://github.com/Kaifislam48/InterviewIQ-AI-Powered-Technical-Assessment-Interview-Intelligence-Platform",
    demo: ""
  },
  {
    title: "ShopSense AI",
    type: "software",
    description:
      "Built AI-powered e-commerce platform with personalized recommendations, image search, and chatbot assistant using collaborative filtering + embeddings and LLM integrations (Ollama / Hugging Face).",
    stack:
      "JavaScript, Python, MERN, Redux Toolkit, Tailwind CSS, JWT, OAuth, scikit-learn, pandas, TensorFlow, Ollama, Redis, Nginx, Stripe, AWS, Vercel, MongoDB Atlas, Prometheus, Grafana, Jest",
    github: "https://github.com/Kaifislam48/ShopSense-AI-Intelligent-Commerce-Recommendation-Platform",
    demo: ""
  },
  {
    title: "AI-Based Crop Recommendation System",
    type: "ai",
    description:
      "ML-powered crop recommendation engine using environmental and soil features with high model accuracy and real-time prediction UI.",
    stack: "Python, Scikit-learn, Flask, Pandas, NumPy, Matplotlib",
    github: "https://github.com/Kaifislam48/AI-Based-Crop-Recommendation-System",
    demo: ""
  },
  {
    title: "IMDb Sentiment Classifier",
    type: "ai",
    description:
      "Deep learning NLP app for sentiment prediction over 50,000 labeled reviews using RNN, LSTM, GRU, and BiLSTM.",
    stack: "Python, TensorFlow, Keras, Flask",
    github: "https://github.com/Kaifislam48/IMDB-Movie-Reviews-Sentiment-Analysis-Using-Deep-Learning-Models",
    demo: ""
  }
] as const;

export const timeline = [
  {
    title: "B.Tech in Computer Science Engineering",
    org: "Lovely Professional University",
    date: "Aug 2022 - Present"
  },
  {
    title: "Deloitte Australia Data Analytics Simulation",
    org: "Forage",
    date: "Jun 2025",
    detail:
      "Built dashboard insights with Tableau and classified datasets for business recommendations."
  },
  {
    title: "DSA Internship / Training",
    org: "GeeksforGeeks",
    date: "May 2024 - Oct 2024",
    detail: "Solved 500+ coding problems with optimization-focused approach."
  }
];

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure Generative AI",
    issuer: "Oracle",
    date: "Jun 2025 - Oct 2025",
    link: "https://drive.google.com/file/d/1DoDqjBLiCG_kjI3cdrpKEW1kZLpCzfIx/view"
  },
  {
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft & LinkedIn Learning",
    date: "Jul 2025",
    link: "https://www.linkedin.com/learning/certificates/414a6e1d55acb541ed29ca0a03525db76853c837c06177ea4abeb02dc05743e3"
  },
  {
    title: "Docker Foundations Professional Certificate",
    issuer: "Docker",
    date: "Jun 2025",
    link: "https://drive.google.com/file/d/13oytWbYya11MrVAw-YPnFiwWcJ_fN95u/view"
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford Online (Coursera)",
    date: "Jan 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/RA6TAFGRN75P"
  },
  {
    title: "IELTS Preparation Specialization",
    issuer: "University of California, Irvine · Coursera",
    date: "Dec 2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/7KWYCQA73CPA"
  },
  {
    title: "Version Control with Git",
    issuer: "Atlassian (Coursera)",
    date: "Nov 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/N4V1UWFP9CKF"
  },
  {
    title: "Machine Learning Professional Certificate",
    issuer: "IBM / Coursera",
    date: "Jan 2024 - Dec 2024",
    link: "https://drive.google.com/file/d/1eAhIfQ5448nlA_c7Z1vocztlLkh4huUg/view"
  },
  {
    title: "Application Development using Microservices and Serverless",
    issuer: "Coursera · Authorized by IBM",
    date: "Credly",
    link: "https://www.credly.com/badges/6cf7a3c3-1747-436a-ac17-7c17f4c908cc/linked_in_profile"
  },
  {
    title: "Front-end Development with React V2",
    issuer: "Coursera · Authorized by IBM",
    date: "Credly",
    link: "https://www.credly.com/badges/c142d8d9-fc21-46fa-9a45-6a4e9aa2a87c/linked_in_profile"
  },
  {
    title: "Cloud Computing Certificate",
    issuer: "IIT Kharagpur",
    date: "NPTEL",
    link: "https://drive.google.com/file/d/1l5CZDHJ1WSnYfuefE-fIugcgqsHzmu-1/view"
  }
] as const;

export type AiStackIconKey =
  | "sparkles"
  | "bot"
  | "layers"
  | "cpu"
  | "terminal"
  | "github"
  | "cloud"
  | "wand"
  | "image"
  | "video"
  | "box"
  | "mic"
  | "music"
  | "notebook"
  | "search"
  | "book"
  | "presentation"
  | "flask"
  | "gitBranch"
  | "zap";

export interface AiStackTool {
  name: string;
  purpose: string;
  icon: AiStackIconKey;
}

export interface AiStackCategory {
  title: string;
  description: string;
  tools: AiStackTool[];
}

export const aiStackWorkflow: {
  sectionTitle: string;
  sectionLead: string;
  banner: string;
  categories: AiStackCategory[];
  howIUse: { title: string; points: string[] };
} = {
  sectionTitle: "AI Stack, Tools & Workflow",
  sectionLead:
    "Practical tooling for real delivery: choosing the right model, pairing it with strong prompts, and wiring it into products and automations—not toy demos.",
  banner: "Focused on Practical AI Integration: From LLMs to Production Workflows",
  categories: [
    {
      title: "LLMs & Reasoning Models",
      description:
        "Frontier chat and reasoning models for coding, analysis, and multimodal tasks—selected by context length, modality, cost, and how well they hold structure in production.",
      tools: [
        {
          name: "ChatGPT",
          purpose: "General-purpose LLM for coding, reasoning, debugging, and content generation.",
          icon: "sparkles"
        },
        {
          name: "Claude AI",
          purpose: "Long-context reasoning, document analysis, and structured outputs.",
          icon: "bot"
        },
        {
          name: "Google Gemini",
          purpose: "Multimodal AI for text, code, and image reasoning.",
          icon: "layers"
        },
        {
          name: "DeepSeek AI / DeepSeek-R1",
          purpose: "Advanced reasoning and cost-efficient coding intelligence.",
          icon: "cpu"
        }
      ]
    },
    {
      title: "AI Development & Coding Assistants",
      description:
        "IDE-native and pair-programming assistants that speed up implementation and review while preserving architectural decisions and ownership.",
      tools: [
        {
          name: "Cursor AI",
          purpose: "AI-powered IDE for code generation, debugging, and full-stack development.",
          icon: "terminal"
        },
        {
          name: "GitHub Copilot (Microsoft Copilot)",
          purpose: "Real-time code suggestions and productivity boost.",
          icon: "github"
        },
        {
          name: "Replit AI",
          purpose: "Rapid prototyping and cloud-based AI-assisted development.",
          icon: "cloud"
        },
        {
          name: "Lovable AI / Emergent AI",
          purpose: "AI-first app building and rapid MVP generation.",
          icon: "wand"
        }
      ]
    },
    {
      title: "Generative AI (Media & Content)",
      description:
        "Image, video, audio, and music generation for design exploration, storytelling, and stakeholder-ready assets—not just one-off prompts.",
      tools: [
        {
          name: "Midjourney",
          purpose: "High-quality AI image generation for design and branding.",
          icon: "image"
        },
        {
          name: "Sora AI",
          purpose: "AI video generation and storytelling.",
          icon: "video"
        },
        {
          name: "Luma AI",
          purpose: "3D capture and realistic scene generation.",
          icon: "box"
        },
        {
          name: "ElevenLabs",
          purpose: "AI voice synthesis and audio generation.",
          icon: "mic"
        },
        {
          name: "Suno",
          purpose: "AI music generation.",
          icon: "music"
        }
      ]
    },
    {
      title: "AI Productivity & Research Tools",
      description:
        "Search, notes, and narrative tools that shorten the loop from question to validated insight and shareable output.",
      tools: [
        {
          name: "Notion AI",
          purpose: "Knowledge management and AI-assisted documentation.",
          icon: "notebook"
        },
        {
          name: "Perplexity AI",
          purpose: "AI-powered search and research assistant.",
          icon: "search"
        },
        {
          name: "NotebookLM",
          purpose: "Context-aware learning and document-based AI insights.",
          icon: "book"
        },
        {
          name: "Gamma AI",
          purpose: "AI-powered presentations and storytelling.",
          icon: "presentation"
        },
        {
          name: "Google AI Studio",
          purpose: "Prompt experimentation and model testing.",
          icon: "flask"
        }
      ]
    },
    {
      title: "Automation & AI Workflows",
      description:
        "Orchestration and no-code glue to connect models, APIs, and business events into dependable, observable flows.",
      tools: [
        {
          name: "n8n",
          purpose: "Workflow automation and AI pipeline orchestration.",
          icon: "gitBranch"
        },
        {
          name: "Zapier",
          purpose: "No-code automation and app integrations.",
          icon: "zap"
        }
      ]
    }
  ],
  howIUse: {
    title: "How I Use AI in Development",
    points: [
      "AI-assisted coding with Cursor and Copilot for speed without skipping design tradeoffs.",
      "Prompt engineering and structured outputs for repeatable problem solving—not one-off chats.",
      "Workflow automation with n8n and Zapier to connect tools, data, and notifications.",
      "Rapid prototyping with AI-first builders to validate UX and APIs before hardening.",
      "AI for debugging, profiling hints, and optimization—always verified against tests and metrics."
    ]
  }
};

export const uiUxDesign = {
  sectionTitle: "UI/UX Design & Prototyping",
  subtext: "Focused on clean, user-centric, and conversion-driven design",
  tools: [
    {
      name: "Figma",
      summary: "UI/UX design, wireframing, prototyping, and design systems",
      useCase: "Design systems, wireframes, interactive prototypes",
      icon: "pen" as const
    },
    {
      name: "Canva",
      summary: "Rapid visual design, social assets, and presentation design",
      useCase: "Quick design assets, presentations, and branding",
      icon: "palette" as const
    }
  ],
  designPhilosophy: {
    title: "Design Philosophy",
    points: ["Simplicity", "Accessibility", "Performance-first UI"] as const
  }
};

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "kaif_islam",
    label: "Problem Solving",
    link: "https://leetcode.com/u/kaif_islam/",
    accent: "from-orange-500/30 to-amber-300/10",
    border: "border-orange-300/35",
    logo: "LC",
    stat: "Solved: --"
  },
  {
    platform: "HackerRank",
    username: "kaifislam48",
    label: "Programming Practice",
    link: "https://www.hackerrank.com/profile/kaifislam48",
    accent: "from-emerald-500/30 to-green-300/10",
    border: "border-emerald-300/35",
    logo: "HR",
    stat: "Badges: --"
  },
  {
    platform: "HackerEarth",
    username: "kaif42",
    label: "Competitive Programming",
    link: "https://www.hackerearth.com/@kaif42/",
    accent: "from-cyan-500/30 to-blue-300/10",
    border: "border-cyan-300/35",
    logo: "HE",
    stat: "Rank: --"
  },
  {
    platform: "Codeforces",
    username: "Kaifislam123",
    label: "Contest Coding",
    link: "https://codeforces.com/profile/Kaifislam123",
    accent: "from-blue-500/30 to-rose-400/10",
    border: "border-blue-300/35",
    logo: "CF",
    stat: "Rating: --"
  },
  {
    platform: "CodeChef",
    username: "kaifislam48",
    label: "Algorithmic Challenges",
    link: "https://www.codechef.com/users/kaifislam48",
    accent: "from-amber-700/35 to-yellow-300/10",
    border: "border-yellow-300/35",
    logo: "CC",
    stat: "Stars: --"
  },
  {
    platform: "Stack Overflow",
    username: "kaif-islam",
    label: "Q&A / Developer Community",
    link: "https://stackoverflow.com/users/20499033/kaif-islam",
    accent: "from-orange-600/35 to-orange-300/10",
    border: "border-orange-300/35",
    logo: "SO",
    stat: "Reputation: --"
  }
] as const;
