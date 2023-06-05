import { createBrowserRouter } from "react-router-dom";
import pagesRoutes from "./pagesRoutes";
import { getRouterElement } from "./helper";

export const router = createBrowserRouter([
  {
    path: pagesRoutes.MAIN,
    element: getRouterElement(pagesRoutes.MAIN),
  },
  {
    path: pagesRoutes.ABOUT,
    element: getRouterElement(pagesRoutes.ABOUT),
  },
  {
    path: pagesRoutes.CONTACTS,
    element: getRouterElement(pagesRoutes.CONTACTS),
  },
  {
    path: pagesRoutes.SIGN_UP,
    element: getRouterElement(pagesRoutes.SIGN_UP),
  },
  {
    path: pagesRoutes.REGISTRATION,
    element: getRouterElement(pagesRoutes.REGISTRATION),
  },
  {
    path: pagesRoutes.PAG_EXAMPLE,
    element: getRouterElement(pagesRoutes.PAG_EXAMPLE),
  },
]);
