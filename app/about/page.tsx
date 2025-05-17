import ShellBox from "@/components/ShellBox";
import Link from 'next/link';

const toolGroups = [
  {
    label: "Languages",
    items: [
      { name: "Go", color: "text-cyan-400 border-cyan-400" },
      { name: "C++", color: "text-blue-500 border-blue-500" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", color: "text-blue-400 border-blue-400" },
      { name: "Redis", color: "text-red-400 border-red-400" },
    ],
  },
  {
    label: "Technologies",
    items: [
      { name: "REST", color: "text-green-300 border-green-300" },
      { name: "Go Fiber", color: "text-emerald-400 border-emerald-400" },
      { name: "Tekton", color: "text-pink-400 border-pink-400" },
      { name: "Kafka Event Streams", color: "text-orange-400 border-orange-400" },
    ],
  },
  {
    label: "Version Control",
    items: [
      { name: "Git", color: "text-orange-500 border-orange-500" },
      { name: "GitHub", color: "text-gray-300 border-gray-300" },
    ],
  },
  {
    label: "Monitoring",
    items: [
      { name: "IBM Cloud Monitoring", color: "text-blue-300 border-blue-300" },
      { name: "Sysdig", color: "text-indigo-400 border-indigo-400" },
      { name: "Prometheus", color: "text-orange-300 border-orange-300" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Kubernetes", color: "text-blue-500 border-blue-500" },
      { name: "Docker & Containerisation", color: "text-blue-300 border-blue-300" },
      { name: "CI/CD", color: "text-green-400 border-green-400" },
    ],
  },
  {
    label: "Quantum Computing",
    items: [
      { name: "Qiskit Advocate", color: "text-purple-400 border-purple-400" },
      { name: "Qiskit Developer", color: "text-purple-300 border-purple-300" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Distributed Systems", color: "text-teal-300 border-teal-300" },
      { name: "Microservices Architecture", color: "text-fuchsia-400 border-fuchsia-400" },
      { name: "Gateways", color: "text-lime-400 border-lime-400" },
      { name: "Ingress-Egress", color: "text-amber-400 border-amber-400" },
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
    degree: "Master of Technology in Computer Science",
    school: "Indian Institute of Technology, Guwahati",
    period: "2018 - 2020",
    location: "Guwahati, India",
    address: "Assam, India (781039)",
    type: "mtech"
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Government College of Engineering, Aurangabad",
    period: "2014 - 2018",
    location: "Aurangabad, India",
    address: "Maharashtra, India (431005)",
    type: "be"
  },
  {
    degree: "Higher Secondary Education (10+2)",
    school: "Saraswati Bhuvan High School",
    period: "2012 - 2014",
    location: "Ch. Sambhajinagar, India",
    address: "Maharashtra, India (431001)",
    type: "hsc"
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
            With a passion for innovation and a knack for solving complex problems, I thrive in the dynamic world of technology. As a Backend Developer and DevOps practitioner, I specialize in architecting large-scale, event-driven systems, mastering cloud technologies, and automating workflows. I&apos;m a Certified Kubernetes Application Developer (CKAD) and a Qiskit Advocate, deeply immersed in cloud-native solutions, microservices, and quantum computing.<br /><br />
            My expertise spans across API gateways, REST API design and implementation, multiple SQL and NoSQL databases, event streams, and microservices architecture. I leverage Bash scripting, Tekton, and Jenkins for cloud automation and CI/CD pipelines, and I enjoy working on and contributing to open source projects that drive real-world impact.<br /><br />
            Outside of tech, I&apos;m a motorsport enthusiast and a dedicated Formula 1 and cricket fan. When I&apos;m not architecting systems or writing code, you&apos;ll often find me relaxing behind the virtual wheel in Euro Truck Simulator and American Truck Simulator — a digital escape that fuels my love for long-haul journeys and logistics.<br /><br />
            I also share my knowledge through technical blogs and YouTube videos, covering underrated technologies, real-world project implementations, and clever engineering hacks.<br /><br />
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