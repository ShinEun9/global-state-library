import React from "react";
import { useAtomValue } from "jotai";
import darkModeAtom from "../atoms/darkMode";

export default function Header() {
  const isDark = useAtomValue(darkModeAtom);

  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
