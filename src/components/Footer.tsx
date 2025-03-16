import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        {/* Left Section - Logo */}
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>TreX</h2>
          <p className={styles.slogan}>ZAPATOS DE CALIDAD PARA GENTE DE CALIDAD</p>
        </div>

        {/* Center Section - Links */}
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Bottom Section - Social Media */}
      <div className={styles.bottomSection}>
        <div className={styles.socialIcons}>
          <FaInstagram />
          <FaTwitter />
          <FaGithub />
        </div>
        <p className={styles.copyright}>© Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
