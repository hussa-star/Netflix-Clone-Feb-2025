import React from "react";
import styles from "./Footer.module.css"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className={styles["footer-outer-container"]}>
      <div className={styles["footer-inner-container"]}>
        <div className={styles["footer-icon"]}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className={styles["footer-data"]}>
          <div>
            <ul>
              <li>Audio Descrption</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className={styles["help"]}>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className={styles["media"]}>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Use</li>
            </ul>
          </div>
        </div>
        <div className={styles["service-code"]}>
          <p>Service Code</p>
        </div>
        <div className="copy-write">&copy; 1997-2025 Netflix,Inc.</div>
      </div>
    </div>
  );
};

export default Footer;

