import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "./ThemeContext";

export default function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div
      className="footer"
      style={{
        backgroundColor: isDark ? "#262626" : "whitesmoke",
        color: isDark ? "#f3f6f4" : "black",
      }}
    >
      여기는 Footer입니다
      <button
        onClick={() => {
          setIsDark((prev) => !prev);
        }}
      >
        다크 모드!!
      </button>
    </div>
  );
}
