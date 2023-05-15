import pagesRoutes from "./pagesRoutes";

import { Header } from "../containers/Header/Header";
import { Footer } from "../containers/Footer/Footer";
import { Main } from "../pages/Main/Main";
import { About } from "../pages/About/About";
import { Contacts } from "../pages/Contacts/Contacts";
import { SignUp } from "../pages/SignUp/SignUp";

export const getRouterElement = (path) => {
  let Page = null;

  switch (path) {
    case pagesRoutes.SIGN_UP:
      Page = <SignUp />;
      break;
    case pagesRoutes.ABOUT:
      Page = <About />;
      break;
    case pagesRoutes.CONTACTS:
      Page = <Contacts />;
      break;
    default:
      Page = <Main />;
      break;
  }

  return (
    <>
      <Header />
      {Page}
      <Footer />
    </>
  );
};
