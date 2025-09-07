import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
      const [isDark, setIsDark] = useState(false);

      useEffect(() => {
            const stored = localStorage.getItem("theme");
            const isDarkMode = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
            setIsDark(isDarkMode);
            document.documentElement.classList.toggle("dark", isDarkMode);
      }, []);

      const toggleTheme = () => {
            const newTheme = !isDark;
            setIsDark(newTheme);
            localStorage.setItem("theme", newTheme ? "dark" : "light");
            document.documentElement.classList.toggle("dark", newTheme);
      };

      return (
            <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  className="bg-background/80 backdrop-blur-sm"
            >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
      );
};