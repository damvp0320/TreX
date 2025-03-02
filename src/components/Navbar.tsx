import { useState } from "react";
import styles from "../styles/navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TreX</div>

      {/* Enlaces de navegación */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><a href="#">Inicio</a></li>

        {/* Menú Hombres */}
        <li className={styles.dropdown}>
          <a href="#">Hombres ▾</a>
          <ul className={styles.dropdownMenu}>
            <li><a href="#">Sneakers</a></li>
            <li><a href="#">Botas</a></li>
            <li><a href="#">Sandalias</a></li>
            <li><a href="#">Deportivos</a></li>
          </ul>
        </li>

        {/* Menú Mujeres */}
        <li className={styles.dropdown}>
          <a href="#">Mujeres ▾</a>
          <ul className={styles.dropdownMenu}>
            <li><a href="#">Sneakers</a></li>
            <li><a href="#">Botas</a></li>
            <li><a href="#">Sandalias</a></li>
            <li><a href="#">Deportivos</a></li>
          </ul>
        </li>

        {/* Ofertas */}
        <li><a href="#">Ofertas</a></li>

        {/* Nuevas Colecciones */}
        <li><a href="#">Nuevas Colecciones</a></li>

        {/* Accesorios */}
        <li className={styles.dropdown}>
          <a href="#">Accesorios ▾</a>
          <ul className={styles.dropdownMenu}>
            <li><a href="#">Calcetines</a></li>
            <li><a href="#">Plantillas</a></li>
            <li><a href="#">Cuidado del calzado</a></li>
          </ul>
        </li>

        <li><a href="#">Contacto</a></li>
      </ul>

      {/* Botón de contacto */}
      <a href="#" className={styles.contactButton}>Comprar ahora</a>

      {/* Menú móvil */}
      <button className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}
