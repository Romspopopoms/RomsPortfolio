"use client";

interface CodeBlockProps {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language = "typescript" }: CodeBlockProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent-neon to-accent-purple rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
      <div className="relative bg-[#0a0e16] rounded-lg overflow-hidden border border-white/10">
        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
          <span className="text-xs text-foreground/60 font-mono">{language}</span>
          <button
            onClick={() => navigator.clipboard.writeText(children)}
            className="text-xs text-primary hover:text-accent-neon transition-colors"
          >
            Copier
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono text-foreground/90 leading-relaxed">
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
}
