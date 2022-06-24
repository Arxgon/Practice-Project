import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";

createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<App />
	</ContextProvider>
);
