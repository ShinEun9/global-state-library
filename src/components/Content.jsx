import React from "react";
import useStore from "./store/useStore";

export default function Content() {
  const isDark = useStore((state) => state.isDark);
  return (
    <div className={`content ${isDark ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
