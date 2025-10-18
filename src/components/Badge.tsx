interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'neon' | 'purple' | 'default';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = "" }: BadgeProps) {
  const variants = {
    primary: 'bg-primary/20 text-primary border-primary/50',
    neon: 'bg-accent-neon/20 text-accent-neon border-accent-neon/50',
    purple: 'bg-accent-purple/20 text-accent-purple border-accent-purple/50',
    default: 'bg-white/10 text-foreground/80 border-white/20'
  };

  return (
    <span
      className={`
        inline-block px-3 py-1 rounded-full border text-sm font-mono
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
