import React from "react";
import { observer } from "mobx-react-lite";
import darkModeStore from "./store/darkModeStore";

function Header() {
  return (
    <header className={`header ${darkModeStore.isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}

export default observer(Header);
