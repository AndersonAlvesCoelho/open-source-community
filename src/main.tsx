import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./store/store";
import App from "./pages/App";

import "./global.css";
import { NavBar } from "./components/Navbars";
import SideBar from "./components/SideBar";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <div className="pt-12 lg:flex">
          <SideBar />
          <App />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
