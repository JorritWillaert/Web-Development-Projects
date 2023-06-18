import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Sepolia } from "@thirdweb-dev/chains";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThirdwebProvider activeChain={Sepolia}>
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
);
