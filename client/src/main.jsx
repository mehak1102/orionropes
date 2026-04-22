import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0b1626",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.08)",
          },
          success: {
            duration: 2500,
          },
          error: {
            duration: 3000,
          },
        }}
      />
    </>
  </React.StrictMode>
);