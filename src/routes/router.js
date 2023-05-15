import { createBrowserRouter } from "react-router-dom";
import pagesRoutes from "./pagesRoutes";

import { Header } from "../containers/Header/Header";
import { Footer } from "../containers/Footer/Footer";
import { Main } from "../pages/Main/Main";
import { About } from "../pages/About/About";
import { Contacts } from "../pages/Contacts/Contacts";
import { SignUp } from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: pagesRoutes.MAIN,
    element: (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    ),
  },
  {
    path: pagesRoutes.ABOUT,
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: pagesRoutes.CONTACTS,
    element: (
      <>
        <Header />
        <Contacts />
        <Footer />
      </>
    ),
  },
  {
    path: pagesRoutes.SIGN_UP,
    element: (
      <>
        <Header />
        <SignUp />
        <Footer />
      </>
    ),
  },
]);
