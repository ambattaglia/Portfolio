export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'AI / ML' | 'Frontend' | 'Cloud & Tools';
  description: string;
  longDescription: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image: string;
  imageSources?: string[];
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  period: string;
  description: string;
  skills: string[];
}

export const portfolioData = {
  personalInfo: {
    name: "Andrea M Battaglia",
    role: "Frontend Engineer building responsive, high-performance interfaces with React and TypeScript",
    tagline: "Operations leader with 10+ years of experience driving process improvements, cross-functional execution, and high-quality customer experiences.",
    bio: "Frontend Engineer with 10+ years of leadership and operations experience, newly completing full-stack frontend training. Specialized in crafting responsive, high-performance interfaces using modern frameworks like React and Next.js, integrating AI-powered features, and optimizing user experience through animation, accessibility, and component architecture. Proven ability to drive cross-functional collaboration and deliver production-ready solutions.",
    location: "Hamburg, NY",
    status: "Open to remote opportunities",
    email: "am.battaglia@yahoo.com",
    resumeUrl: "/andrea-battaglia-resume.pdf",
    socials: {
      github: "https://github.com/ambattaglia",
      linkedin: "https://linkedin.com/in/ambattaglia",
      email: "mailto:am.battaglia@yahoo.com",
    },
    stats: [
      { label: "Years Professional Experience", value: "10+" },
      { label: "Tech Projects", value: "15+" },
      { label: "Certifications", value: "3" },
      { label: "Code Contributions", value: "100+" },
    ]
  },

  categories: ['All', 'Full Stack', 'AI / ML', 'Frontend', 'Cloud & Tools'] as const,

  projects: [
    {
      id: "missing-persons",
      title: "Missing Persons",
      subtitle: "Searchable missing-persons information platform",
      category: "Frontend",
      description: "A focused public-information experience that helps people search and filter missing-persons records by name, location, and identifying details.",
      longDescription: "Missing Persons turns a sensitive, information-heavy subject into a clear and approachable search experience. The interface combines prominent awareness messaging with searchable records, category filters, and concise result presentation.",
      highlights: [
        "Designed a responsive search interface for discovering missing-persons records",
        "Added filtering by location and record details to support focused searches",
        "Created a clear, accessible layout for presenting sensitive public information"
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "Responsive Design", "Vercel"],
      liveUrl: "https://missingpersons.vercel.app/",
      featured: true,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
      imageSources: [
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
      ],
      metrics: "Live Search Experience"
    },
    {
      id: "skinstric-ai",
      title: "Skinstric AI",
      subtitle: "AI-powered personalized skincare analysis",
      category: "AI / ML",
      description: "A sophisticated skincare experience that uses AI-powered analysis to create a personalized routine tailored to each user's skin needs.",
      longDescription: "Skinstric combines a refined editorial interface with an AI skin analysis workflow and personalized skincare recommendations. The experience guides users from discovery through an interactive assessment and tailored routine.",
      highlights: [
        "Built a real-time skin analysis experience with Next.js and OpenAI Vision API",
        "Created a polished AI workflow for evaluating skin conditions and recommendations",
        "Optimized the experience for fast feedback and smoother interaction flow"
      ],
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "GSAP", "Lottie", "OpenAI Vision API"],
      liveUrl: "https://skinstric-project-ashen.vercel.app/",
      featured: true,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80",
      metrics: "AI Skin Analysis"
    },
    {
      id: "ultraverse-nft-market",
      title: "Ultraverse NFT World",
      subtitle: "Digital asset marketplace interface",
      category: "Frontend",
      description: "A responsive marketplace experience for discovering, collecting, and selling digital items through a clear, conversion-focused interface.",
      longDescription: "Ultraverse presents a polished NFT marketplace with search, discovery navigation, wallet connection, and a visual hero experience designed to make digital assets approachable and easy to explore.",
      highlights: [
        "Created a responsive marketplace layout with discovery-focused navigation",
        "Designed clear entry points for exploring, collecting, and selling digital items",
        "Built an interface with wallet connection and search workflows"
      ],
      technologies: ["React", "JavaScript", "CSS", "Responsive Design", "Vercel"],
      liveUrl: "https://andrea-internship-379x.vercel.app/",
      featured: true,
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      metrics: "Live Marketplace UI"
    },
    {
      id: "vibe-frequency",
      title: "Vibe Frequency",
      subtitle: "Music discovery and playlist experience",
      category: "Frontend",
      description: "A dark, immersive music discovery interface for searching artists, exploring albums, and organizing a personalized listening experience.",
      longDescription: "Vibe Frequency focuses on music exploration through a bold visual system, persistent navigation, search, trending album content, and dedicated paths for playlists, artists, videos, and podcasts.",
      highlights: [
        "Built an immersive music discovery dashboard with persistent navigation",
        "Added search by title, artist, or genre for faster content discovery",
        "Designed dedicated views for playlists, hot artists, albums, videos, and podcasts"
      ],
      technologies: ["React", "JavaScript", "CSS", "Responsive Design", "Vercel"],
      liveUrl: "https://react-music-discovery-client.vercel.app/",
      featured: true,
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
      metrics: "Music Discovery App"
    },
    {
      id: "sienna-makeup-studio",
      title: "Sienna Studio",
      subtitle: "Luxury beauty brand website with conversion-first design",
      category: "Frontend",
      description: "A premium beauty brand experience built to feel elevated, editorial, and highly conversion-focused for bridal, editorial, and event bookings.",
      longDescription: "Sienna Studio is a polished frontend concept built around high-end branding, strong visual hierarchy, and conversion-focused UX. The experience combines luxury storytelling with clear service positioning, helping visitors quickly understand offerings, pricing, and booking intent while preserving a refined, premium aesthetic from first impression to final action.",
      highlights: [
        "Designed a luxury visual system with strong editorial composition and premium brand cues",
        "Built a conversion-optimized flow to guide users from discovery to quote and booking intent",
        "Developed a responsive, polished experience tailored to premium beauty and lifestyle audiences"
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "Responsive Design", "UI/UX", "Vercel"],
      liveUrl: "https://sienna-sigma.vercel.app/",
      featured: true,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
      imageSources: [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
      ],
      metrics: "Luxury Brand UX"
    },
  ] as Project[],

  skillCategories: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "HTML5 / CSS3", level: 94 },
        { name: "Responsive Design", level: 94 }
      ]
    },
    {
      title: "Styling & Animation",
      skills: [
        { name: "TailwindCSS", level: 95 },
        { name: "Sass / SCSS", level: 88 },
        { name: "GSAP", level: 85 },
        { name: "Lottie Animations", level: 82 },
        { name: "Component Architecture", level: 90 },
        { name: "Accessibility (A11y)", level: 88 }
      ]
    },
    {
      title: "AI, APIs & Tools",
      skills: [
        { name: "OpenAI Vision API", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Performance Optimization", level: 88 },
        { name: "Git / GitHub", level: 92 },
        { name: "Figma", level: 85 },
        { name: "Vercel", level: 85 }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      role: "Frontend Engineer",
      company: "Skinstric AI",
      location: "Remote",
      period: "Feb 2026 - Sept 2026",
      description: [
        "Architected a real-time skin analysis platform using Next.js and OpenAI Vision API for personalized skincare recommendations.",
        "Built responsive UI with TailwindCSS, GSAP, and modular component patterns to create a more engaging user journey.",
        "Optimized performance using Next.js Server Components and Lottie animations for smoother interactions and faster feedback.",
        "Developed a custom GSAP timeline animation system for seamless analysis transitions and more intuitive onboarding.",
        "Designed a reusable component library for skincare product displays, enabling rapid iteration on recommendation layouts.",
        "Implemented an efficient image-processing pipeline combining OpenAI Vision API with 4D Mini model to improve skin tone and texture analysis."
      ],
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "GSAP", "Lottie", "OpenAI Vision API", "Component Architecture"]
    },
    {
      role: "Vice President, Line Manager II",
      company: "M&T Bank",
      location: "Buffalo, NY",
      period: "2019 - Dec 2025",
      description: [
        "Directed operations for auto, RV, and boat loan workflows, ensuring documentation accuracy and compliance.",
        "Managed call center operations handling loan support, escalations, and high-volume monetary transactions.",
        "Conducted QC reviews to mitigate risk and maintain regulatory standards.",
        "Analyzed performance data using Power BI to identify bottlenecks and improve workflows.",
        "Collaborated with underwriting, risk, technology, and branch partners to streamline processes."
      ],
      technologies: ["Power BI", "Data Analysis", "Operations Management", "Risk Management"]
    },
    {
      role: "Regional Manager",
      company: "Solidifi",
      location: "Buffalo, NY",
      period: "2013 - 2019",
      description: [
        "Managed relationships with 200+ appraisers, ensuring service quality and regulatory compliance.",
        "Oversaw full appraisal lifecycle including assignment, monitoring, quality checks, and escalations.",
        "Conducted performance reviews and training to strengthen service delivery.",
        "Analyzed regional metrics to support operational goals and identify improvement opportunities."
      ],
      technologies: ["Operations Management", "Regulatory Compliance", "Performance Analysis"]
    },
    {
      role: "Regional Field Services Manager / Quality Assurance Agent",
      company: "Mueller Services",
      location: "Tonawanda, NY",
      period: "2007 - 2013",
      description: [
        "Managed 75+ employees across New York State, overseeing scheduling, performance, payroll, and operations.",
        "Ensured timely completion of 2,000+ weekly loss-control surveys while maintaining quality standards.",
        "Reviewed survey reports for accuracy and provided coaching to improve performance.",
        "Supported onboarding and training to strengthen operational consistency.",
        "Managed budgets and operational plans to meet expense goals."
      ],
      technologies: ["Operations Management", "Team Leadership", "Quality Assurance", "Budget Management"]
    }
  ] as Experience[],

  certifications: [
    {
      title: "Frontend Development Certificate of Graduation",
      issuer: "FES Institute",
      period: "Completed 2026",
      description: "Successfully completed the Frontend Development Bootcamp, including a practical internship in a professional environment and demonstrated proficiency in modern frontend technologies.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "TypeScript", "Redux"]
    },
    {
      title: "Frontend Development Training",
      issuer: "Frontend Simplified",
      period: "2026",
      description: "Completed a structured, project-based program focused on HTML, CSS, JavaScript, React, responsive design, and modern frontend workflows with hands-on portfolio work.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Git", "GitHub", "Accessibility"]
    }
  ] as Certification[]
};
