import React from "react";
import useStore from "./store/useStore";

export default function Footer() {
  const isDark = useStore((state) => state.isDark);
  const toggleThema = useStore((state) => state.toggleThema);

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={toggleThema}>테마 변경</button>
    </footer>
  );
}
