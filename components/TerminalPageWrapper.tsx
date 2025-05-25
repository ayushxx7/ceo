import React from "react";

export default function TerminalPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-black border border-green-500 p-4 sm:p-6 rounded-md w-full max-w-xl mx-auto shadow-xl 
        min-h-[70vh] flex flex-col justify-center items-center font-mono text-green-300"
      style={{
        boxShadow: "0 0 32px 8px rgba(34,213,238,0.15)",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      {children}
    </div>
  );
}