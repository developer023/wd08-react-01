import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "./containers/Header/Header";
import { Footer } from "./containers/Footer/Footer";
import { Main } from "./pages/Main/Main";
import { About } from "./pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
