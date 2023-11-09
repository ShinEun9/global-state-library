import { observer } from "mobx-react";
import React from "react";
import darkModeStore from "./store/darkModeStore";

function Footer() {
  return (
    <footer className={`footer ${darkModeStore.isDark ? "dark" : "white"}`}>
      <button
        onClick={() => {
          darkModeStore.toggleThema();
        }}
      >
        테마 변경
      </button>
    </footer>
  );
}

export default observer(Footer);
