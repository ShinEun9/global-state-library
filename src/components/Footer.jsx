import React from "react";
import { useSnapshot } from "valtio";
import darkModeStore from "../store/darkModeStore";

export default function Footer() {
  const snap = useSnapshot(darkModeStore);
  const toggleThema = () => {
    darkModeStore.isDark = !darkModeStore.isDark;
  };
  return (
    <footer className={`footer ${snap.isDark ? "dark" : "white"}`}>
      <button onClick={toggleThema}>테마 변경</button>
    </footer>
  );
}
