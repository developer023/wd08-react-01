import pagesRoutes from "./pagesRoutes";

import { Header } from "../containers/Header/Header";
import { Footer } from "../containers/Footer/Footer";
import { Main } from "../pages/Main/Main";
import { About } from "../pages/About/About";
import { Contacts } from "../pages/Contacts/Contacts";
import { SignUp } from "../pages/SignUp/SignUp";
import { Registration } from "../pages/Registration/Registration";
import { PagExample } from "../pages/PagExample/PagExample";

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
    case pagesRoutes.REGISTRATION:
      Page = <Registration />;
      break;
    case pagesRoutes.PAG_EXAMPLE:
      Page = <PagExample />;
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
