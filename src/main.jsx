import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <App />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>
)
