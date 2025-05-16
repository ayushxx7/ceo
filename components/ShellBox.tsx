import React from "react";

export default function ShellBox({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div id={id} className="border border-neutral-700 bg-neutral-900/80 rounded-lg p-3 sm:p-4 md:p-6 shadow-lg font-mono text-white max-w-2xl mx-auto my-6 sm:my-8 md:my-12">
      {children}
    </div>
  );
} 