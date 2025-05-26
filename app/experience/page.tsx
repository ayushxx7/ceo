'use client';
import ShellBox from "@/components/ShellBox";
import Image from 'next/image';
// import Link from 'next/link';
import CommandBar from '@/components/TerminalCommandBar'

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: { name: string; color: string }[];
  label: string;
  logo: string;
}

interface OpenSource {
  title: string;
  projects: {
    name: string;
    link: string;
  }[];
  period: string;
  description: string[];
  technologies: { name: string; color: string }[];
}

const experiences: Experience[] = [
  {
    title: "Machine Learning (GenAI) Engineer → Technical Project Manager - DLP Team",
    company: "adeptmind.ai",
    period: "Oct 2023 – Present",
    location: "Remote, Delhi, India",
    description: [
      "Built the high-revenue Dynamic Landing Pages (DLP) product from scratch under CTO guidance, leading ML/GenAI efforts to auto-generate SEO-optimized retail pages that improved Google rankings and boosted client footfall.",
      "Built, scaled and maintained an in-house LLM service handling 100K+ requests/day using FastAPI, Celery, and Redis.",
      "Led cross-functional planning (Scrum, retrospectives), interfacing with product, engineering, and business stakeholders to align roadmap and delivery.",
      "Mentored new hires, contributed to core model development and MLOps (GitHub Actions, Kubernetes, Prefect) and drove documentation and process maturity."
    ],
    technologies: [
      { name: "FastAPI", color: "text-blue-400 border-blue-400" },
      { name: "Celery", color: "text-orange-400 border-orange-400" },
      { name: "Redis", color: "text-red-400 border-red-400" },
      { name: "LLM", color: "text-green-400 border-green-400" },
      { name: "Kubernetes", color: "text-blue-500 border-blue-500" },
      { name: "GitHub Actions", color: "text-gray-400 border-gray-400" },
      { name: "Prefect", color: "text-purple-400 border-purple-400" }
    ],
    label: "Work",
    logo: "/images/adeptmind-logo.png" // updated to .png
  },
  {
    title: "Machine Learning (Natural Language Processing) Engineer - Search Team",
    company: "adeptmind.ai",
    period: "Dec 2022 – Sep 2023",
    location: "Remote, Toronto, Canada",
    description: [
      "Maintained Content Understand (CU) and Query Understanding (QU) Machine Learning components using PyTorch, HuggingFace, FastAPI, distilbert, nlp.",
      "Built and deployed category & classification pipeline via AWS Sagemaker; migrated from TensorFlow."
    ],
    technologies: [
      { name: "PyTorch", color: "text-orange-400 border-orange-400" },
      { name: "HuggingFace", color: "text-pink-400 border-pink-400" },
      { name: "FastAPI", color: "text-blue-400 border-blue-400" },
      { name: "AWS Sagemaker", color: "text-green-400 border-green-400" },
      { name: "TensorFlow", color: "text-yellow-400 border-yellow-400" },
      { name: "distilbert", color: "text-purple-400 border-purple-400" }
    ],
    label: "Work",
    logo: "/images/adeptmind-logo.png" // updated to .png
  },
  {
    title: "Software Engineer - Data Team",
    company: "adeptmind.ai",
    period: "Apr 2022 – Nov 2022",
    location: "Remote, Toronto, Canada",
    description: [
      "Built scraping tools and live inventory software (Python, Go, TypeScript, SQL) for malls."
    ],
    technologies: [
      { name: "Python", color: "text-yellow-400 border-yellow-400" },
      { name: "Go", color: "text-cyan-400 border-cyan-400" },
      { name: "TypeScript", color: "text-blue-400 border-blue-400" },
      { name: "SQL", color: "text-green-400 border-green-400" }
    ],
    label: "Work",
    logo: "/images/adeptmind-logo.png" // updated to .png
  },
  {
    title: "Senior Member of Technical Staff – QA Automation Team",
    company: "now.gg",
    period: "Sep 2021 – Apr 2022",
    location: "Remote, Gurugram, India",
    description: [
      "Performance optimization for now.gg BlueStacks Android App Player on Cloud.",
      "5X reduction in test development time and 2X reduction in Suite Run Time using Data Analysis.",
      "Regression models for revenue prediction & release funnel tracking (big data, p-value analysis)."
    ],
    technologies: [
      { name: "QA Automation", color: "text-blue-400 border-blue-400" },
      { name: "Data Analysis", color: "text-cyan-400 border-cyan-400" },
      { name: "Regression", color: "text-green-400 border-green-400" },
      { name: "Big Data", color: "text-orange-400 border-orange-400" }
    ],
    label: "Work",
    logo: "/images/now.gg-logo.png"
  },
  {
    title: "Member of Technical Staff – Technical Support → QA Automation Team",
    company: "BlueStacks.com",
    period: "Jun 2019 – Aug 2021",
    location: "Remote/Onsite, Gurugram, India",
    description: [
      "Developed a multi-lingual PyTest-based automation suite for BlueStacks 5 (Windows 7, 8, 8.1, 10).",
      "Developed NLP-powered tools over Zendesk Support for SEO, log analysis, and automated replies.",
      "Integrated and customized Kommunicate.io – DialogFlow live chat into Zendesk and App Player."
    ],
    technologies: [
      { name: "PyTest", color: "text-yellow-400 border-yellow-400" },
      { name: "NLP", color: "text-purple-400 border-purple-400" },
      { name: "Zendesk", color: "text-blue-400 border-blue-400" },
      { name: "DialogFlow", color: "text-green-400 border-green-400" }
    ],
    label: "Work",
    logo: "/images/now.gg-logo.png" // use now.gg logo for BlueStacks
  }
];

const openSourceContributions: OpenSource[] = [
  {
    title: "Core Contributor",
    projects: [
      {
        name: "DiceDB",
        link: "https://github.com/DiceDB"
      }
    ],
    period: "2024 - Present",
    description: [
      "Contributing to DiceDB, an open-source, fast, reactive, in-memory database optimized for modern hardware",
      "Working on core features and performance optimizations",
      "Collaborating with the community to improve documentation and code quality"
    ],
    technologies: [
      { name: "Go", color: "text-cyan-400 border-cyan-400" },
      { name: "Database", color: "text-blue-400 border-blue-400" },
      { name: "Reactivity", color: "text-purple-400 border-purple-400" },
      { name: "In-Memory", color: "text-green-400 border-green-400" }
    ]
  },
  {
    title: "Contributor",
    projects: [
      {
        name: "Qiskit Localization",
        link: "https://github.com/Qiskit/documentation"
      },
    ],
    period: "Summer 2022",
    description: [
      "One of the top contributors during the Qiskit Localization Summer Sprint 2022",
      "Received swag from the Qiskit team for contributions",
      "Helped improve Qiskit documentation and localization"
    ],
    technologies: [
      { name: "Documentation", color: "text-blue-400 border-blue-400" },
      { name: "Localization", color: "text-green-400 border-green-400" },
      { name: "Open Source", color: "text-purple-400 border-purple-400" }
    ]
  },
  {
    title: "Hacktoberfest Contributor",
    projects: [
      {
        name: "Vertex",
        link: "https://github.com/vertex-center/vertex"
      },
      {
        name: "Ockam",
        link: "https://github.com/build-trust/ockam"
      }
    ],
    period: "Winter 2023",
    description: [
      "One of the top contributors during the Qiskit Localization Summer Sprint 2022",
      "Received swag from the Qiskit team for contributions",
      "Helped improve Qiskit documentation and localization"
    ],
    technologies: [
      { name: "Go", color: "text-cyan-400 border-cyan-400" },
      { name: "Server", color: "text-green-400 border-green-400" },
      { name: "Open Source", color: "text-purple-400 border-purple-400" }
    ]
  }
];

const sections = [
  { id: 'experience', label: 'career' },
  { id: 'open-source', label: 'opensource' },
];

export default function ExperiencePage() {
  return (
    <div className="flex justify-center relative">
      <div className="flex-1 max-w-2xl space-y-6 px-4 sm:px-6">
        {/* Work Experience Section */}
        <CommandBar/>
        <ShellBox id="experience">
          <div className="flex justify-between items-center">
            <p className="text-green-400 text-sm sm:text-base md:text-lg font-mono">$ ls ~/career/</p>
          </div>
          <div className="mt-4 sm:mt-6 space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="text-white">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-mono text-xs sm:text-sm">[{exp.label}]</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold">{exp.title}</h3>
                        <div className="flex items-center gap-2">
                            <Image
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                width={16}
                                height={16}
                                className="object-contain sm:w-5 sm:h-5"
                            />
                            <span className="inline-block bg-green-900/20 text-green-300 text-xs sm:text-sm px-2 py-0.5 sm:py-1 rounded-md">
                                {exp.company}
                            </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 text-xs sm:text-sm">{exp.period}</p>
                        <p className="text-neutral-400 text-xs sm:text-sm">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-neutral-300 text-xs sm:text-sm">• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`bg-neutral-800/80 border ${tech.color} rounded px-2 sm:px-3 py-0.5 sm:py-1 text-xs`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ShellBox>

        {/* Open Source Section */}
        <ShellBox id="open-source">
          <div className="flex justify-between items-center">
            <p className="text-green-400 text-sm sm:text-base md:text-lg font-mono">$ opensourcectl get all</p>
          </div>
          <div className="mt-4 sm:mt-6 space-y-6 sm:space-y-8">
            {openSourceContributions.map((contribution, index) => (
              <div key={index} className="text-white">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-mono text-xs sm:text-sm">[Open Source]</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold">{contribution.title}</h3>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
                          {contribution.projects.map((project, i) => (
                            <a 
                              key={i}
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-green-900/20 text-green-300 text-xs sm:text-sm px-2 py-0.5 sm:py-1 rounded-md hover:bg-green-900/30 transition-colors"
                            >
                              {project.name}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 text-xs sm:text-sm">{contribution.period}</p>
                      </div>
                    </div>
                    <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2">
                      {contribution.description.map((item, i) => (
                        <li key={i} className="text-neutral-300 text-xs sm:text-sm">• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2">
                      {contribution.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`bg-neutral-800/80 border ${tech.color} rounded px-2 sm:px-3 py-0.5 sm:py-1 text-xs`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ShellBox>

        
      </div>

      {/* Vertical Section Indicator - fixed to right center */}
      <div className="hidden lg:flex flex-col items-end gap-4 fixed right-0 top-1/2 -translate-y-1/2 z-50 pr-2">
        {sections.map((section) => (
          <div key={section.id} className="flex items-center gap-2 group">
            <a 
              href={`#${section.id}`}
              className="text-green-400/40 group-hover:text-green-400 font-mono text-base transition-colors"
            >
              {section.label}
            </a>
            <div className="w-0.5 h-8 bg-green-400/40 group-hover:bg-green-400 transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  );
}