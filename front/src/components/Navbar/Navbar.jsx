import React, { useState } from "react";
import blackcat from "../../assets/blackcat.png";
import avatar from "../../assets/avatar.png";
import styles from "../Navbar/Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, setUserAppointments } from "../../redux/userSlice";

function NavBar() {
  const login = useSelector((state) => state.actualUser.userData.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(
    (state) => state.actualUser?.userData?.user?.name
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    const confirm = window.confirm("¿Seguro que quieres salir?");
    if (confirm) {
      dispatch(setUserData({ login: false }));
      dispatch(setUserAppointments([]));
      navigate("/");
    } else {
      return null;
    }
  };
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoSection}>
        <img src={blackcat} alt="logo" />
      </div>
      <div className={styles.linksElements}>
        <NavLink to="/home">
          <span>INICIO</span>
        </NavLink>
        {login && (
          <NavLink to="/appointments">
            <span>MIS RESERVAS</span>
          </NavLink>
        )}
        <NavLink to="/about">
          <span>ACERCA DE</span>
        </NavLink>
        <NavLink to="/contact">
          <span>CONTACTO</span>
        </NavLink>
      </div>
      <div className={styles.avatarSection}>
        {login ? (
          <div className={styles.avatarContainer} onClick={toggleMenu}>
            <span>{userName.charAt(0).toUpperCase() + userName.slice(1)}</span>
            <img src={avatar} alt="avatar" />
            {menuOpen && (
              <div className={styles.dropdownMenu}>
                <span onClick={handleLogout}>Desconectarse</span>
              </div>
            )}
          </div>
        ) : (
          <NavLink to="/login">
            <span>Iniciar sesión</span>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default NavBar;
