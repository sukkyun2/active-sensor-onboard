import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./components/Splash";
import Main from "./components/Join";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Onboarding = React.lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return import("./components/Onboarding");
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/splash" element={<Splash></Splash>} />
        <Route
          path="/"
          element={
            <Suspense fallback={<Splash />}>
              <Onboarding />
            </Suspense>
          }
        />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
