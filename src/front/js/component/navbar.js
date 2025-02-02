import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import logo_bebe from "../../img/logo_bebe.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    actions.logout();
    navigate('/login'); // Redirige a la página de login
  };

  if (!store.token) {
    // Si no hay token, no renderiza la Navbar
    return null;
  }

  return (
    <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: '#075E81' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Botón del menú hamburguesa */}
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <div className="custom-toggler-icon">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
          </div>
        </button>
        {/* Icono de perfil visible solo en pantallas grandes */}
        <div className="d-none d-md-flex justify-content-end">
          <Link to="/gestor_perfil">
            <i className="fa-solid fa-circle-user profile-icon" style={{ fontSize: '30px', color: 'white' }}></i>
          </Link>
        </div>
        <div className="offcanvas offcanvas-start text-bg-dark offcanvas-custom" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <h1 className="titulo-navItem" style={{ color: '#FBEE84' }}>
                  <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
                </h1>
                <ul className="no-bullets">
                  <li><Link to="/recipes" style={{ color: 'inherit', textDecoration: 'none' }}>Recipes</Link></li>
                  <li><Link to="/news" style={{ color: 'inherit', textDecoration: 'none' }}>News</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <h1 className="titulo-navItem">
                  <Link to="/dashboard" style={{ color: '#63DDFC', textDecoration: 'none' }}>Baby</Link>
                </h1>
                <ul className="no-bullets">
                  <li><Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'none' }}>Baby's Diary</Link></li>
                  <li><Link to="/gestor_bebes" style={{ color: 'inherit', textDecoration: 'none' }}>Manage Babies</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <h1 className="titulo-navItem" style={{ color: '#B4E49D' }}>Profile</h1>
                <ul className="no-bullets">
                  <li><Link to="/gestor_perfil" style={{ color: 'inherit', textDecoration: 'none' }}>See profile</Link></li>
                  <li>Edit profile</li>
                  <li><button className="btn btn-link" onClick={handleLogout} style={{ color: 'inherit', textDecoration: 'none' }}>Log Out</button></li>
                </ul>
              </li>
            </ul>
            <div className="logo-container">
              <img src={logo_bebe} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
