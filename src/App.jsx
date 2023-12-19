import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Page from "./Page";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  );
}

export default App;
