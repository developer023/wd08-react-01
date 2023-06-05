import { NavLink, useLocation } from "react-router-dom";
import pagesRoutes from "../../routes/pagesRoutes";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

export const Header = () => {
  const { pathname } = useLocation();
  const { email, firstname } = useSelector((state) => state.user);

  return (
    <header>
      {!email && <h3>Header</h3>}

      {email && firstname && (
        <>
          <h3>{firstname}</h3>
          <h3>{email}</h3>
        </>
      )}

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
        <NavLink
          to={pagesRoutes.REGISTRATION}
          className={
            pagesRoutes.REGISTRATION === pathname
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          Registration
        </NavLink>
        <NavLink
          to={pagesRoutes.PAG_EXAMPLE}
          className={
            pagesRoutes.PAG_EXAMPLE === pathname
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          Pag_Example
        </NavLink>
      </nav>
    </header>
  );
};
