import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
      () => localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };



  return (
    <label className="flex items-center gap-2 cursor-pointer  ">
      <span className="text-sm">
        {theme === "dark" ? " Dark Mode" : " Light Mode"}
      </span>
      <input
        type="checkbox"
        className="toggle toggle-md"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
    </label>

  
  );
};

export default ThemeToggle;
