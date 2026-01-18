import Layout from "../components/layout/Layout.tsx";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/index/Index.tsx";

// const rotate = (angle: number) => {
//   const newAngle = (angle + 1) % 360;
//   document.documentElement.style.setProperty("--angle", `${newAngle}deg`);
//   requestAnimationFrame(() => rotate(newAngle));
// };

// document.body.style.background = `
//   linear-gradient(
//     135deg,
//     #140505 0%,
//     #0d0b10 45%,
//     #050407 100%
//   )
// `;

function App() {
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: Index,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
