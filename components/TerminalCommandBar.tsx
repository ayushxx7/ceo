"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const PAGES = [
  { command: "home", path: "/", description: "Go to Home page" },
  { command: "about", path: "/about", description: "Learn about me" },
  { command: "experience", path: "/experience", description: "See my experience" },
  { command: "accomplishments", path: "/accomplishments", description: "Check my accomplishments" },
  { command: "projects", path: "/projects", description: "View my projects" },
  { command: "shelf", path: "/shelf", description: "See my digital shelf" },
  { command: "whoami", path: "#whoami", description: "Who I am section" },
  { command: "skills", path: "#skills", description: "My skills section" },
  { command: "education", path: "#education", description: "My education section" },
  { command: "opensource", path: "#opensource", description: "My open source work" },
  { command: "career", path: "#career", description: "My career journey" },
  { command: "blog", path: "#blog", description: "My blog posts" },
  { command: "yt", path: "#yt", description: "My YouTube content" },
];

function parseCdArg(arg: string) {
  const match = PAGES.find(
    (p) => p.command === arg || p.path.replace("/", "") === arg
  );
  return match ? match.path : null;
}

function lsOutput() {
  return PAGES.map((p) => `${p.command}`).join("    ");
}

function catOutput(arg: string) {
  const match = PAGES.find(
    (p) => p.command === arg || p.path.replace("/", "") === arg
  );
  return match
    ? `# ${match.command}\n${match.description}\nPath: ${match.path}`
    : `cat: ${arg}: No such page`;
}

export default function TerminalCommandBar() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number | null>(null);
  const [output, setOutput] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleCommand = (raw: string) => {
    const input = raw.trim();
    if (!input) return;
    setHistory((prev) => [...prev, input]);
    setHistoryIdx(null);

    const [cmd, ...argsRaw] = input.split(/\s+/);
    const args = argsRaw.join(" ");
    let handled = false;

    if (cmd === "cd") {
      const path = parseCdArg(args);
      if (path) {
        setOutput((prev) => [...prev, `$ ${input}`, `Navigating to ${path}...`]);
        router.push(path);
        handled = true;
      } else {
        setOutput((prev) => [...prev, `$ ${input}`, `cd: ${args}: No such page`]);
        handled = true;
      }
    } else if (cmd === "ls") {
      setOutput((prev) => [...prev, `$ ${input}`, lsOutput()]);
      handled = true;
    } else if (cmd === "cat") {
      setOutput((prev) => [...prev, `$ ${input}`, catOutput(args)]);
      handled = true;
    } else if (cmd === "clear") {
      setOutput([]);
      handled = true;
    } else {
      const page = PAGES.find((p) => p.command === cmd);
      if (page) {
        setOutput((prev) => [...prev, `$ ${input}`, `Navigating to ${page.path}...`]);
        router.push(page.path);
        handled = true;
      }
    }

    if (!handled) {
      setOutput((prev) => [...prev, `$ ${input}`, `Unknown command: ${cmd}`]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      if (history.length === 0) return;
      setHistoryIdx((idx) =>
        idx === null ? history.length - 1 : Math.max(idx - 1, 0)
      );
    } else if (e.key === "ArrowDown") {
      if (history.length === 0) return;
      setHistoryIdx((idx) =>
        idx === null
          ? null
          : idx + 1 >= history.length
          ? null
          : idx + 1
      );
    }
  };

  useEffect(() => {
    if (historyIdx === null) return;
    setInput(history[historyIdx]);
  }, [historyIdx]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-8 left-20 z-[110] bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        {isOpen ? "Close Terminal" : "Open Terminal"}
      </button>

      {/* Terminal Command Bar */}
      {isOpen && (
        <div className="fixed bottom-20 left-0 w-full z-[100] pointer-events-none">
          <div className="flex items-end justify-center w-full">
            <div className="bg-black/95 border-t border-green-400/30 text-white rounded-t-lg px-4 py-2 shadow-xl shadow-green-400/10 w-full max-w-2xl mx-2 mb-2 pointer-events-auto">
              <div
                style={{
                  maxHeight: 140,
                  overflowY: "auto",
                  fontFamily: "monospace",
                  fontSize: "0.95em",
                  marginBottom: 2,
                }}
              >
                {output.slice(-5).map((line, idx) => (
                  <div
                    key={idx}
                    className="whitespace-pre-line text-green-300"
                  >
                    {line}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2 font-mono text-sm">
                <span className="text-green-400">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder='Type "ls", "cd about", "cat projects"...'
                  className="flex-1 bg-transparent text-white placeholder-neutral-500 focus:outline-none"
                  style={{ fontFamily: "inherit" }}
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
