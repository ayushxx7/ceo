"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CommandBar() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();
      console.log("Command:", command);

      // Routing logic
      switch (command) {
        case "home":
          router.push("/");
          break;
        case "about":
          router.push("/about");
          break;
        case "experience":
          router.push("/experience");
          break;
        case "accomplishments":
          router.push("/accomplishments");
          break;
        case "projects":
          router.push("/projects");
          break;
        case "shelf":
        case "digital shelf":
          router.push("/shelf");
          break;
        default:
          alert(`Unknown command: ${command}`);
      }

      setInput("");
    }
  };

  return (
    <div className="fixed bottom-30 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-xl bg-black border border-green-400/30 text-white rounded-lg px-4 py-2 shadow-xl shadow-green-400/10">
      <div className="flex items-center space-x-2 font-mono text-sm">
        <span className="text-green-400">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter command..."
          className="flex-1 bg-transparent text-white placeholder-neutral-500 focus:outline-none"
        />
      </div>
    </div>
  );
}
