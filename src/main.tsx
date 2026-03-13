import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Auto day/night theme based on time of day
function applyAutoTheme() {
  const hour = new Date().getHours();
  // Day: 6am-7pm, Night: 7pm-6am
  const isDark = hour < 6 || hour >= 19;
  document.documentElement.classList.toggle("dark", isDark);
}

applyAutoTheme();
// Re-check every 5 minutes
setInterval(applyAutoTheme, 5 * 60 * 1000);

createRoot(document.getElementById("root")!).render(<App />);