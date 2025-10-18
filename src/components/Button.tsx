interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'neon' | 'purple' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = 'primary', className = "", onClick }: ButtonProps) {
  const variants = {
    primary: 'bg-primary hover:bg-primary/80 text-white border-primary',
    neon: 'bg-accent-neon hover:bg-accent-neon/80 text-background border-accent-neon',
    purple: 'bg-accent-purple hover:bg-accent-purple/80 text-white border-accent-purple',
    outline: 'bg-transparent hover:bg-white/10 text-foreground border-white/30 hover:border-primary'
  };

  const baseClasses = `
    inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2
    font-medium transition-all duration-300
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
