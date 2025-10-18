interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'primary' | 'neon' | 'purple' | 'none';
  hover?: boolean;
}

export default function Card({ children, className = "", glowColor = 'none', hover = true }: CardProps) {
  const glowClasses = {
    primary: 'glow-primary',
    neon: 'glow-neon',
    purple: 'glow-purple',
    none: ''
  };

  return (
    <div
      className={`
        bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6
        ${hover ? 'transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:scale-[1.02]' : ''}
        ${glowClasses[glowColor]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
