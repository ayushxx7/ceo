import { FC } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaHistory } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  stars: number;
  forks: number;
  commits: number;
  language: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  githubUrl,
  stars,
  forks,
  commits,
  language,
}) => {
  // Map languages to colors
  const languageColors: { [key: string]: string } = {
    'TypeScript': 'text-cyan-400 border-cyan-400',
    'Go': 'text-blue-500 border-blue-500',
    'Python': 'text-green-400 border-green-400',
    'C': 'text-orange-400 border-orange-400',
    'JavaScript': 'text-yellow-400 border-yellow-400',
    'Rust': 'text-red-400 border-red-400',
    'Java': 'text-purple-400 border-purple-400',
    'C++': 'text-blue-400 border-blue-400',
    'Ruby': 'text-red-500 border-red-500',
    'PHP': 'text-indigo-400 border-indigo-400',
    'Swift': 'text-orange-500 border-orange-500',
    'Kotlin': 'text-purple-500 border-purple-500',
    'Scala': 'text-red-600 border-red-600',
    'Haskell': 'text-blue-600 border-blue-600',
    'Elixir': 'text-purple-600 border-purple-600',
    'Clojure': 'text-green-500 border-green-500',
    'F#': 'text-blue-700 border-blue-700',
    'OCaml': 'text-yellow-500 border-yellow-500',
    'R': 'text-blue-800 border-blue-800',
    'MATLAB': 'text-orange-600 border-orange-600',
    'Shell': 'text-green-600 border-green-600',
    'HTML': 'text-orange-700 border-orange-700',
    'CSS': 'text-blue-900 border-blue-900',
    'SQL': 'text-cyan-500 border-cyan-500',
    'GraphQL': 'text-pink-500 border-pink-500',
    'Dart': 'text-blue-400 border-blue-400',
    'Objective-C': 'text-blue-500 border-blue-500',
    'Perl': 'text-blue-600 border-blue-600',
    'Lua': 'text-blue-700 border-blue-700',
    'Assembly': 'text-gray-400 border-gray-400',
    'VHDL': 'text-purple-700 border-purple-700',
    'Verilog': 'text-purple-800 border-purple-800',
    'Fortran': 'text-blue-800 border-blue-800',
    'COBOL': 'text-blue-900 border-blue-900',
    'Pascal': 'text-purple-900 border-purple-900',
    'Ada': 'text-indigo-900 border-indigo-900',
    'Lisp': 'text-pink-600 border-pink-600',
    'Prolog': 'text-pink-700 border-pink-700',
    'Smalltalk': 'text-pink-800 border-pink-800',
    'Erlang': 'text-red-700 border-red-700',
    'Elm': 'text-green-700 border-green-700',
    'PureScript': 'text-green-800 border-green-800',
    'Idris': 'text-green-900 border-green-900',
    'Agda': 'text-cyan-600 border-cyan-600',
    'Coq': 'text-cyan-700 border-cyan-700',
    'Lean': 'text-cyan-800 border-cyan-800',
    'Isabelle': 'text-cyan-900 border-cyan-900',
    'HOL': 'text-yellow-600 border-yellow-600',
    'ACL2': 'text-yellow-700 border-yellow-700',
    'PVS': 'text-yellow-800 border-yellow-800',
    'Nuprl': 'text-yellow-900 border-yellow-900',
    'Twelf': 'text-orange-800 border-orange-800',
    'Metamath': 'text-orange-900 border-orange-900',
    'Mizar': 'text-red-800 border-red-800',
    'Isar': 'text-red-900 border-red-900',
    'default': 'text-green-400 border-green-400'
  };

  return (
    <div className="border border-neutral-700 bg-neutral-900/80 rounded-lg p-4 sm:p-6 shadow-lg">
      <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-2">
        <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold">
        {title.length > 20 ? `${title.slice(0, 20)}…` : title}
        </h3>
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-green-300 transition-colors"
      >
        <FaGithub size={20} />
      </a>
      </div>
      
      <p className="text-neutral-300 text-xs sm:text-sm mb-4">{description}</p>
      
      {/* Stats like stars, forks, language */}
      <div className="flex items-center gap-4 text-xs sm:text-sm text-green-400 mb-2">
        <div className="flex items-center gap-1">
          <FaStar />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaCodeBranch />
          <span>{forks}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaHistory />
          <span>{commits}</span>
        </div>
      </div><br />
              <div className="flex items-center gap-1">
          <span className={`px-2 sm:px-3 py-0.5 sm:py-1 bg-neutral-800/80 border font-mono text-xs sm:text-sm rounded-md ${languageColors[language] || languageColors.default}`}>
            {language}
          </span>
        </div>
    </div>
  );
};

export default ProjectCard; 