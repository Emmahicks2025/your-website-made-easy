import { Snowflake, Flame } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const Logo = ({ className = "", size = "md", variant = "dark" }: LogoProps) => {
  const sizes = {
    sm: { container: "h-12", icon: 22, text: "text-xl" },
    md: { container: "h-16", icon: 28, text: "text-2xl" },
    lg: { container: "h-32", icon: 52, text: "text-5xl" },
  };

  const colors = {
    light: {
      primary: "text-white",
      accent: "text-sky-400",
      bg: "bg-white/10",
      gradient: "from-white to-sky-200",
    },
    dark: {
      primary: "text-slate-800",
      accent: "text-sky-500",
      bg: "bg-primary/10",
      gradient: "from-sky-600 to-sky-400",
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
          className={`absolute text-sky-500`} 
          size={s.icon * 1.8}
          strokeWidth={2}
        />
        {/* Flame overlay */}
        <Flame 
          className="absolute text-orange-500" 
          size={s.icon * 1.2}
          strokeWidth={2.5}
          style={{ transform: 'translateY(-2px)' }}
        />
      </div>
      
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className={`font-display font-bold ${s.text} bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent`}>
          SHS
        </span>
        <span className={`font-body text-sm font-medium ${variant === 'light' ? 'text-sky-200' : 'text-sky-600'} tracking-widest uppercase`}>
          HVAC Services
        </span>
      </div>
    </div>
  );
};

export default Logo;