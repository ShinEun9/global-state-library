import React from "react";
import { useRecoilState } from "recoil";
import darkModeState from "../store/darkmodeState";

export default function Footer() {
  const [isDark, setIsDark] = useRecoilState(darkModeState);

  const toggleThema = () => {
    setIsDark((isDark) => !isDark);
  };
  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={toggleThema}>테마 변경</button>
    </footer>
  );
}
