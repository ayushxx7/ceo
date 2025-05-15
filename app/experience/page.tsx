'use client';
import ShellBox from "@/components/ShellBox";
import Image from 'next/image';

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

interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  address: string;
}

const experiences: Experience[] = [
    // {
    //     title: "Software Engineer L2",
    //     company: "Stripe",
    //     period: "2025 - Present",
    //     location: "Bangalore, India",
    //     description: [
    //       "Architected and developed large-scale, event-driven systems using Go and microservices architecture",
    //       "Implemented and maintained CI/CD pipelines using Tekton and Jenkins for cloud automation",
    //       "Designed and developed REST APIs and microservices for enterprise applications",
    //       "Worked extensively with Kubernetes, Docker, and cloud-native technologies",
    //       "Contributed to open-source projects and maintained internal tools"
    //     ],
    //     technologies: [
    //       { name: "Go", color: "text-cyan-400 border-cyan-400" },
    //       { name: "Kubernetes", color: "text-blue-500 border-blue-500" },
    //       { name: "Docker", color: "text-blue-300 border-blue-300" },
    //       { name: "REST APIs", color: "text-green-300 border-green-300" },
    //       { name: "Microservices", color: "text-fuchsia-400 border-fuchsia-400" },
    //       { name: "Tekton", color: "text-pink-400 border-pink-400" },
    //       { name: "Jenkins", color: "text-orange-400 border-orange-400" },
    //       { name: "PostgreSQL", color: "text-blue-400 border-blue-400" },
    //       { name: "Redis", color: "text-red-400 border-red-400" },
    //       { name: "Kafka", color: "text-orange-400 border-orange-400" }
    //     ],
    //     label: "Work",
    //     logo: "/images/stripe-logo.svg"
    //   },    
  {
    title: "Senior Software Engineer",
    company: "IBM, India Software Labs",
    period: "Jul 2020 - Jun 2025",
    location: "Bangalore, India",
    description: [
      "Architected and developed large-scale, event-driven systems using Go and microservices architecture",
      "Implemented and maintained CI/CD pipelines using Tekton and Jenkins for cloud automation",
      "Designed and developed REST APIs and microservices for enterprise applications",
      "Worked extensively with Kubernetes, Docker, and cloud-native technologies",
      "Contributed to open-source projects and maintained internal tools"
    ],
    technologies: [
      { name: "Go", color: "text-cyan-400 border-cyan-400" },
      { name: "Kubernetes", color: "text-blue-500 border-blue-500" },
      { name: "Docker", color: "text-blue-300 border-blue-300" },
      { name: "REST APIs", color: "text-green-300 border-green-300" },
      { name: "Microservices", color: "text-fuchsia-400 border-fuchsia-400" },
      { name: "Tekton", color: "text-pink-400 border-pink-400" },
      { name: "Jenkins", color: "text-orange-400 border-orange-400" },
      { name: "PostgreSQL", color: "text-blue-400 border-blue-400" },
      { name: "Redis", color: "text-red-400 border-red-400" },
      { name: "Kafka", color: "text-orange-400 border-orange-400" }
    ],
    label: "Work",
    logo: "/images/ibm-logo.svg"
  },
  {
    title: "Extreme Blue Intern",
    company: "IBM, India Software Labs",
    period: "May 2019 - Jul 2019",
    location: "Bangalore, India",
    description: [
      "Worked on the project by 'building insights' team, where we have developed a ML module to predict and minimize the electricity consumption of the big enterprise",
      "Got Best Project - 1st Runners up position (Public votes) prize in the Extreme Blue internship program"
    ],
    technologies: [
      { name: "Machine Learning", color: "text-purple-400 border-purple-400" },
      { name: "Python", color: "text-blue-400 border-blue-400" },
      { name: "Data Analysis", color: "text-cyan-400 border-cyan-400" },
      { name: "Energy Analytics", color: "text-green-400 border-green-400" },
      { name: "IBM Cloud", color: "text-blue-500 border-blue-500" }
    ],
    label: "Intern",
    logo: "/images/ibm-logo.svg"
  }
];

export default function ExperiencePage() {
  return (
    <div className="flex justify-center relative">
      <div className="flex-1 max-w-2xl space-y-6">
        {/* Work Experience Section */}
        <ShellBox id="experience">
          <p className="text-green-400">$ cat experience.txt</p>
          <div className="mt-6 space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="text-white">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-mono">[{exp.label}]</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <div className="flex items-center gap-2">
                            <Image
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <span className="inline-block bg-green-900/20 text-green-300 text-sm px-2 py-1 rounded-md">
                                {exp.company}
                            </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400">{exp.period}</p>
                        <p className="text-neutral-400 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-neutral-300 text-sm">• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`bg-neutral-800/80 border ${tech.color} rounded px-3 py-1 text-xs`}
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

        {/* Home Link */}
        <a href="/" className="block text-green-400 hover:text-green-300 underline font-mono">$ cd /home</a>
      </div>
    </div>
  );
} 