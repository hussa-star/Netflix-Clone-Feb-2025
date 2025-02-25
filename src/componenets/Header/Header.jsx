import React, {useState, useEffect} from "react";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../../assets/images/Netflix_Logo_PMS.png";
import MenuIcon from "@mui/icons-material/Menu";


function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${styles["header-wrapper"]} ${
          show ? styles["header_black"] : ""
        }`}
      >
        <div className={styles["left-header"]}>
          <div className={styles["netflix-logo"]}>
            <img src={logo} alt="netflix-logo" />
          </div>
          <div className={styles["nav-links"]}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">TVShows</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Latests</a>
              </li>
              <li>
                <a href="#">Mylists</a>
              </li>
              <li>
                <a href="#">Brouse by Language</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["right-header"]}>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
          <div className={styles["menu-icon"]}>
            <MenuIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
