import ShellBox from "@/components/ShellBox";
import Link from 'next/link';

const toolGroups = [
  {
    label: "Machine Learning",
    items: [
      { name: "Linear/Logistic Regression", color: "text-blue-400 border-blue-400" },
      { name: "XGBoost", color: "text-orange-400 border-orange-400" },
      { name: "SVM", color: "text-purple-400 border-purple-400" },
      { name: "Clustering (K-Means, DBSCAN)", color: "text-pink-400 border-pink-400" },
      { name: "Time Series", color: "text-cyan-400 border-cyan-400" },
    ],
  },
  {
    label: "Deep Learning",
    items: [
      { name: "CNN", color: "text-blue-500 border-blue-500" },
      { name: "RNN, LSTM, GRU", color: "text-purple-300 border-purple-300" },
      { name: "Transfer Learning", color: "text-emerald-400 border-emerald-400" },
      { name: "Transformers", color: "text-orange-300 border-orange-300" },
    ],
  },
  {
    label: "Generative AI",
    items: [
      { name: "OpenAI (GPT-4/o/mini)", color: "text-blue-400 border-blue-400" },
      { name: "SORA", color: "text-pink-400 border-pink-400" },
      { name: "Grok", color: "text-cyan-400 border-cyan-400" },
      { name: "LangChain", color: "text-yellow-400 border-yellow-400" },
      { name: "RAG", color: "text-green-400 border-green-400" },
      { name: "Prompt Engineering", color: "text-purple-400 border-purple-400" },
      { name: "Agentic AI", color: "text-fuchsia-400 border-fuchsia-400" },
    ],
  },
  {
    label: "NLP",
    items: [
      { name: "BERT, distilBERT", color: "text-green-300 border-green-300" },
      { name: "spaCy", color: "text-blue-300 border-blue-300" },
      { name: "HuggingFace", color: "text-yellow-300 border-yellow-300" },
      { name: "Lexical/Semantic/Syntactic Parsing", color: "text-emerald-300 border-emerald-300" },
    ],
  },
  {
    label: "Cloud & MLOps",
    items: [
      { name: "AWS (SageMaker, S3)", color: "text-orange-300 border-orange-300" },
      { name: "GCP, BigQuery", color: "text-blue-400 border-blue-400" },
      { name: "Docker, Kubernetes", color: "text-blue-500 border-blue-500" },
      { name: "Jenkins", color: "text-purple-400 border-purple-400" },
      { name: "Prefect", color: "text-indigo-400 border-indigo-400" },
    ],
  },
  {
    label: "Languages & Frameworks",
    items: [
      { name: "Python, JavaScript, Dart", color: "text-yellow-400 border-yellow-400" },
      { name: "Flask, Django, FastAPI", color: "text-green-400 border-green-400" },
      { name: "React, MCP, A2A", color: "text-blue-500 border-blue-500" },
    ],
  },
];

const sections = [
  { id: 'whoami', label: 'whoami' },
  { id: 'education', label: 'education' },
  { id: 'skills', label: 'skills' },
];

const education = [
  {
    degree: "Product Management & Agentic AI",
    school: "IIT Patna x Masai",
    period: "6 months",
    location: "Patna, India",
    address: "Bihar, India",
    type: "cert"
  },
  {
    degree: "Advanced Generative AI Certification",
    school: "upGrad & Microsoft",
    period: "7 months",
    location: "Online",
    address: "Online",
    type: "cert"
  },
  {
    degree: "Master's in Machine Learning and Artificial Intelligence",
    school: "Liverpool John Moores University, United Kingdom",
    period: "Jul’22 to Nov’22",
    location: "Liverpool, UK",
    address: "United Kingdom",
    type: "masters"
  },
  {
    degree: "PG Diploma – ML and AI",
    school: "International Institute of Information and Technology Bangalore",
    period: "Jun’21 to Jun’22",
    location: "Bangalore, India",
    address: "Karnataka, India",
    type: "pgd"
  },
  {
    degree: "B. Tech (Computer Science)",
    school: "Maharaja Surajmal Institute of Technology, GGSIPU",
    period: "May’15 to Jun’19",
    location: "Delhi, India",
    address: "Delhi, India",
    type: "btech"
  }
];

export default function AboutPage() {
  return (
    <div className="flex justify-center relative">
      {/* Main Content */}
      <div className="flex-1 max-w-2xl space-y-6 px-4 sm:px-6">
        {/* Whoami Section */}
        <ShellBox id="whoami">
          <div className="flex justify-between items-center">
            <p className="text-green-400 text-sm sm:text-base md:text-lg font-mono">$ whoami</p>
          </div>
          <p className="mt-2 text-white text-xs sm:text-sm md:text-base">
            <b>Ayush Mandowara</b> | New Delhi<br />
            <a href="mailto:ayushxx7@gmail.com" className="text-green-400">ayushxx7@gmail.com</a> | <a href="https://linkedin.com/in/ayush_mandowara" className="text-green-400">LinkedIn</a> | <a href="https://github.com/ayushmandowara" className="text-green-400">GitHub</a>
            <br /><br />
            Machine Learning Engineer with 6+ years of experience building scalable solutions across NLP, GenAI, and Deep Learning. Currently a Lead Software Engineer (GenAI) at Virtusa, working on enterprise-grade conversational agents at scale.
            <br /><br />
            I have proven expertise in deploying LLM services, managing MLOps pipelines, and driving cross-functional product development. My background includes building high-revenue GenAI products from scratch, scaling LLM services to 100K+ requests/day, and leading AI initiatives at adeptmind.ai and BlueStacks.
            <br /><br />
            Let&apos;s build, automate, and innovate — together.
          </p>
        </ShellBox>

        {/* Education Section */}
        <ShellBox id="education">
          <div className="flex justify-between items-center">
            <p className="text-green-400 text-sm sm:text-base md:text-lg font-mono">$ cat education.txt</p>
          </div>
          <div className="mt-6 space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="text-white">
                <div className="flex items-start gap-2">
                <span className="text-green-400 font-mono text-xs sm:text-sm w-20 inline-block">
                  [{edu.type.toUpperCase()}]
                </span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold">{edu.degree}</h3>
                        <p className="text-neutral-400 text-xs sm:text-sm">{edu.school}</p>
                        <p className="text-neutral-400 text-xs sm:text-sm">{edu.address}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 text-xs sm:text-sm">{edu.period}</p>
                        <p className="text-neutral-400 text-xs sm:text-sm">{edu.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ShellBox>

        {/* Tools Section */}
        <ShellBox id="skills">
          <div className="flex justify-between items-center">
            <p className="text-green-400 text-sm sm:text-base md:text-lg font-mono">$ printenv | grep --skills</p>
          </div>
          <div className="mt-3 space-y-4">
            {toolGroups.map(group => (
              <div key={group.label}>
                <span className="text-green-400 font-mono text-xs sm:text-sm"># {group.label}</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {group.items.map(item => (
                    <span
                      key={item.name}
                      className={`bg-neutral-800/80 border ${item.color} rounded px-2 sm:px-3 py-0.5 sm:py-1 font-mono text-xs sm:text-sm`}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ShellBox>

        <ShellBox>
          {/* Home Link */}
            <Link href="/" className="text-green-400 text-sm sm:text-base md:text-lg font-mono">
              $ cd /home
            </Link>
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