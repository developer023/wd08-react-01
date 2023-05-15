import { NavLink, useLocation } from "react-router-dom";
import pagesRoutes from "../../routes/pagesRoutes";
import styles from "./Header.module.css";

export const Header = () => {
  // const location = useLocation();
  const { pathname } = useLocation();

  return (
    <header>
      <h3>Header</h3>
      <nav>
        <NavLink
          to={pagesRoutes.MAIN}
          className={
            pagesRoutes.MAIN === pathname
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          Main
        </NavLink>{" "}
        <NavLink
          to={pagesRoutes.SIGN_UP}
          className={
            pagesRoutes.SIGN_UP === pathname
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          Sign Up
        </NavLink>{" "}
        <NavLink
          to={pagesRoutes.ABOUT}
          className={
            pagesRoutes.ABOUT === pathname
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          About
        </NavLink>{" "}
        <NavLink
          to={pagesRoutes.CONTACTS}
          className={
            pagesRoutes.CONTACTS === pathname
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};
