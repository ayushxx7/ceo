import React from "react";

export default function ShellBox({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div id={id} className="border border-neutral-700 bg-neutral-900/80 rounded-lg p-6 shadow-lg font-mono text-white max-w-2xl mx-auto my-12">
      {children}
    </div>
  );
} 