import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // ✅ IMPORTANT

  return (
    <div
      onClick={toggleTheme}
      style={{
        width: "50px",
        height: "25px",
        borderRadius: "50px",
        background: theme === "dark" ? "dark" : "#ddd",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: theme === "dark" ? "#fff" : "#000",
          position: "absolute",
          top: "2.5px",
          left: theme === "dark" ? "26px" : "4px",
          transition: "0.3s",
        }}
      />
    </div>
  );
};

export default ThemeToggle;