import { Snowflake, Flame } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const Logo = ({ className = "", size = "md", variant = "dark" }: LogoProps) => {
  const sizes = {
    sm: { container: "h-14", icon: 24, text: "text-2xl" },
    md: { container: "h-20", icon: 32, text: "text-3xl" },
    lg: { container: "h-28", icon: 44, text: "text-4xl" },
  };

  const colors = {
    light: {
      primary: "text-white",
      accent: "text-accent",
      bg: "bg-white/10",
    },
    dark: {
      primary: "text-primary",
      accent: "text-accent",
      bg: "bg-primary/10",
    },
  };

  const s = sizes[size];
  const c = colors[variant];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon mark */}
      <div className={`relative ${s.container} aspect-square flex items-center justify-center`}>
        {/* Snowflake */}
        <Snowflake 
          className={`absolute ${c.accent}`} 
          size={s.icon * 1.8}
          strokeWidth={2}
        />
        {/* Flame overlay */}
        <Flame 
          className="absolute text-orange-500 opacity-90" 
          size={s.icon * 1.2}
          strokeWidth={2.5}
          style={{ transform: 'translateY(-2px)' }}
        />
      </div>
      
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className={`font-display font-bold ${s.text} ${c.primary}`}>
          SHS
        </span>
        <span className={`font-body text-xs ${variant === 'light' ? 'text-white/70' : 'text-muted-foreground'} tracking-wider uppercase`}>
          HVAC Services
        </span>
      </div>
    </div>
  );
};

export default Logo;