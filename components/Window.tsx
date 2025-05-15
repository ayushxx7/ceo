export default function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg bg-neutral-800 text-white shadow-lg border border-neutral-700 w-full max-w-xl mx-auto my-6">
      <div className="flex items-center px-3 py-2 bg-neutral-700 border-b border-neutral-600">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <span className="ml-4 font-mono text-sm">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm">{children}</div>
    </div>
  )
}
