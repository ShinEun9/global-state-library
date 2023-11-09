import React from "react";
import { useAtom } from "jotai";
import darkModeAtom from "../atoms/darkMode";

export default function Footer() {
  const [isDark, setIsDark] = useAtom(darkModeAtom);
  const toggleThema = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={toggleThema}>테마 변경</button>
    </footer>
  );
}
