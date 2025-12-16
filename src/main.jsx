import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Expertise from "./pages/Expertise.jsx";
import Personal from "./pages/Personal.jsx";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Projects", element: <Project /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/Personal", element: <Personal /> },
  { path: "/Expertise", element: <Expertise /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
