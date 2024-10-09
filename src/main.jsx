import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LLMModelProvider } from "./Contexts/LLMModelContext.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LLMModelProvider>
      <App />
      <Toaster />
    </LLMModelProvider>
  </StrictMode>
);
