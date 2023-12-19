import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "./ThemeContext";

export default function Content() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "#262626" : "whitesmoke",
        color: isDark ? "#f3f6f4" : "black",
      }}
    >
      여기는 Content입니다
    </div>
  );
}
