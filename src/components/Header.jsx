import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <i> site logo </i>
      <nav className={classes.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dogs">Dogs</NavLink>
        <NavLink to="/cats">Cats</NavLink>
      </nav>
    </header>
  );
};
