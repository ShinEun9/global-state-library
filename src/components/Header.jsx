import React from "react";
import { useSnapshot } from "valtio";
import darkModeStore from "../store/darkModeStore";

export default function Header() {
  const snap = useSnapshot(darkModeStore);

  return (
    <header className={`header ${snap.isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
