import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import { ThemeContext } from "./components/UseContextHook/UseContextHook.tsx";

export default function App() {


  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [{ index: true, element: <HomePage/> }],
    },
  ]);
  return (
    <>
      <ThemeContext.Provider value="dark">
      <RouterProvider router={routers}></RouterProvider>
      </ThemeContext.Provider>
    </>
  );
}
