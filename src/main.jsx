import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChatProvider } from "./Providers/ChatProvider.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChatProvider>
      <App />
      <Toaster />
    </ChatProvider>
  </StrictMode>
);
