import React from "react";
import { useSnapshot } from "valtio";
import darkModeStore from "../store/darkModeStore";

export default function Content() {
  const snap = useSnapshot(darkModeStore);

  return (
    <div className={`content ${snap.isDark ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
