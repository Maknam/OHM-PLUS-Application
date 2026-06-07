import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      <Sun 
        className={`h-5 w-5 absolute transition-all duration-300 ${
          theme === 'light' 
            ? 'rotate-0 scale-100 opacity-100' 
            : 'rotate-90 scale-0 opacity-0'
        }`}
      />
      <Moon 
        className={`h-5 w-5 absolute transition-all duration-300 ${
          theme === 'dark' 
            ? 'rotate-0 scale-100 opacity-100' 
            : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </Button>
  );
}