import ShellBox from "@/components/ShellBox";
import Link from 'next/link';

const toolGroups = [
  {
    label: "Machine Learning",
    items: [
      { name: "Regression (Linear, Logistic, Ridge, Lasso)", color: "text-blue-400 border-blue-400" },
      { name: "SVM", color: "text-purple-400 border-purple-400" },
      { name: "Decision Trees", color: "text-green-400 border-green-400" },
      { name: "Random Forest", color: "text-green-300 border-green-300" },
      { name: "Gradient Boosting", color: "text-yellow-400 border-yellow-400" },
      { name: "XGBoost", color: "text-orange-400 border-orange-400" },
      { name: "Clustering (K-Means, DBSCAN)", color: "text-pink-400 border-pink-400" },
      { name: "Time Series Analysis", color: "text-cyan-400 border-cyan-400" },
    ],
  },
  {
    label: "Deep Learning",
    items: [
      { name: "ANN", color: "text-fuchsia-400 border-fuchsia-400" },
      { name: "CNN", color: "text-blue-500 border-blue-500" },
      { name: "RNN, GRU, LSTM", color: "text-purple-300 border-purple-300" },
      { name: "Transfer Learning", color: "text-emerald-400 border-emerald-400" },
      { name: "Generative Pretrained Transformer", color: "text-orange-300 border-orange-300" },
    ],
  },
  {
    label: "Generative AI",
    items: [
      { name: "LLMs", color: "text-green-400 border-green-400" },
      { name: "OpenAI (gpt-3.5, gpt-4, gpt-4o-mini, chatgpt, SORA)", color: "text-blue-400 border-blue-400" },
      { name: "x.ai Grok", color: "text-pink-400 border-pink-400" },
      { name: "perplexity.ai", color: "text-cyan-400 border-cyan-400" },
      { name: "GenAI Image/Video Generation", color: "text-yellow-400 border-yellow-400" },
      { name: "Prompt Engineering", color: "text-purple-400 border-purple-400" },
    ],
  },
  {
    label: "NLP",
    items: [
      { name: "Lexical/Syntactic/Semantic Processing", color: "text-green-300 border-green-300" },
      { name: "pandas, numpy, sklearn, scikit-learn, spacy", color: "text-blue-300 border-blue-300" },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "Python", color: "text-yellow-400 border-yellow-400" },
      { name: "JavaScript", color: "text-blue-400 border-blue-400" },
      { name: "Dart", color: "text-cyan-400 border-cyan-400" },
      { name: "Flutter", color: "text-teal-400 border-teal-400" },
    ],
  },
  {
    label: "Web Development",
    items: [
      { name: "HTML, CSS, BootStrap", color: "text-pink-400 border-pink-400" },
      { name: "Django, Flask, FastAPI", color: "text-green-400 border-green-400" },
      { name: "React.js, Redux", color: "text-blue-500 border-blue-500" },
      { name: "RabbitMQ, celery", color: "text-orange-400 border-orange-400" },
    ],
  },
  {
    label: "Cloud & MLOps",
    items: [
      { name: "AWS, GCP, BigQuery", color: "text-orange-300 border-orange-300" },
      { name: "AWS SageMaker", color: "text-green-400 border-green-400" },
      { name: "Kubernetes", color: "text-blue-500 border-blue-500" },
      { name: "Google Cloud Storage", color: "text-blue-300 border-blue-300" },
      { name: "Jenkins", color: "text-purple-400 border-purple-400" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git, GitHub", color: "text-gray-300 border-gray-300" },
      { name: "neoVim", color: "text-green-300 border-green-300" },
      { name: "Android Studio", color: "text-blue-400 border-blue-400" },
      { name: "JIRA", color: "text-orange-400 border-orange-400" },
      { name: "Docker", color: "text-blue-300 border-blue-300" },
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
    degree: "Product Management & Agentic AI (Ongoing)",
    school: "IIT Patna",
    period: "2025",
    location: "Patna, India",
    address: "Bihar, India",
    type: "cert"
  },
  {
    degree: "Advanced Generative AI Certification",
    school: "upGrad",
    period: "2024",
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
            <a href="mailto:ayush.mandowara.97@gmail.com" className="text-green-400">ayush.mandowara.97@gmail.com</a> | 9818994579 | <a href="https://linkedin.com" className="text-green-400">LinkedIn</a> | <a href="https://blog" className="text-green-400">Blog</a> | <a href="https://github.com" className="text-green-400">GitHub</a>
            <br /><br />
            I am a passionate machine learning engineer with proven expertise in building highly scalable and robust solutions using core techniques of Data Science, Data Analytics, Deep Learning, Generative AI and Natural Language Processing. I also have a knack for Quality Assurance, especially Automated Test Suites and Product Management via JIRA.
            <br /><br />
            I have led ML and Generative AI initiatives, scaling in-house LLM services at adepthmind.ai, and developed automation suites and NLP-powered tools at BlueStacks and now.gg. 
            <br /><br />
            My academic journey includes hands-on work in hierarchical text classification using contrastive learning and distilbert, video gesture recognition with MobileNet and GRU, and telecom churn analysis with PCA, XGBoost, and logistic regression. 
            
            <br /><br />
            I have also built automatic ticket classification systems, participated in hackathons (Top 15% in Black Friday Sales Prediction), and created bots for Facebook and WhatsApp using PyAutoGUI. Additionally, I have delivered over 30 knowledge transfer sessions and contributed to projects in game-playing AI and recommendation engines.<br /><br />
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