"use client";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodePreviewProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodePreview({ code, language = 'javascript', title }: CodePreviewProps) {
  return (
    <div className="code-preview border border-border-primary rounded-lg overflow-hidden my-6">
      {title && (
        <div className="code-preview-header bg-bg-secondary px-4 py-2 border-b border-border-primary flex items-center justify-between">
          <span className="code-title text-xs font-mono text-text-tertiary tracking-tight">
            // {title}
          </span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-error opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-warning opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-success opacity-60" />
          </div>
        </div>
      )}
      <SyntaxHighlighter 
        language={language} 
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '0',
          padding: '1.5rem',
          fontSize: '0.875rem',
          margin: 0,
          background: 'transparent'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
