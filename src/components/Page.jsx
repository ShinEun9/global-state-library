import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import darkModeStore from "./store/darkModeStore";

export default function Page() {
  return (
    <div className="page">
      <Header darkMode={darkModeStore} />
      <Content darkMode={darkModeStore} />
      <Footer darkMode={darkModeStore} />
    </div>
  );
}
