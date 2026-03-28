import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SearchMovies from "./components/SearchMovies";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <SearchMovies />
  </React.StrictMode>,
);
