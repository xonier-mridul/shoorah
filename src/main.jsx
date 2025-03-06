import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Panel from "./pages/panel.jsx";
import InstantSupport from "./components/InstantSupport.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Plans from "./components/Plans.jsx";
import SelectPlan from "./components/SelectPlan.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      
      {/* // it is for panels */}

      <Route path="/" element={<Panel />}>
        <Route index element={<Dashboard />} /> 
        <Route path="support" element={<InstantSupport />} />
        <Route path="plans" element={<Plans/>} />
        <Route path="select-plan" element={<SelectPlan/>} />
      </Route>

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
