/**
 * ==============================================
 * COMPONENTE: Navbar
 * Ubicación: components/Navbar/Navbar.jsx
 * ==============================================
 * 
 * PROPÓSITO:
 * Barra de navegación principal del sitio.
 * Incluye menú desktop y menú mobile (hamburger).
 * 
 * CARACTERÍSTICAS:
 * - Logo a la izquierda
 * - Links de navegación en desktop
 * - Botón hamburger en mobile
 * - Menú overlay animado en mobile
 * 
 * RESPONSIVE:
 * - Desktop: links horizontales visibles
 * - Mobile: hamburger menu con overlay fullscreen
 */

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { navigation } from '../../data/content';
import './Navbar.css';

const Navbar = ({ onNavigateCV, currentPage, activeSection = 'inicio', onNavigate, showBackButton = false, onBack }) => {
  // Estado para controlar si el menú mobile está abierto
  const [isOpen, setIsOpen] = useState(false);
  
  // Referencias a elementos animados
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Efecto para la animación de entrada de la navbar
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  // Efecto para el menú mobile
  useEffect(() => {
    if (isOpen) {
      // Bloquear scroll del body cuando el menú está abierto
      document.body.style.overflow = 'hidden';
      
      // Animar entrada del menú
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.6,
        ease: 'power3.out'
      });
    } else {
      // Restaurar scroll del body
      document.body.style.overflow = '';
      
      // Animar salida del menú
      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, {
          x: '-100%',
          duration: 0.6,
          ease: 'power3.in'
        });
      }
    }
  }, [isOpen]);

  // Función para cerrar el menú al hacer click en un link
  const handleLinkClick = () => setIsOpen(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ==========================================
          NAVBAR PRINCIPAL
          Barra fija en la parte superior
          ========================================== */}
      <nav 
        ref={navRef} 
        className="navbar"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="navbar-container">
          {/* Logo/Nombre del sitio o botón de volver */}
          {showBackButton ? (
            <button 
              className="navbar-logo navbar-back-button" 
              onClick={onBack}
              aria-label="Volver a la landing"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span>OZKR</span>
            </button>
          ) : (
            <a href="#inicio" className="navbar-logo">
              {navigation.desktop[0].label.replace('INICIO', 'Ozkr')}
            </a>
          )}

          {/* ==========================================
              LINKS DE NAVEGACIÓN (DESKTOP)
              Solo visibles en pantallas grandes
              ========================================== */}
          <div className="navbar-links desktop-only">
            {navigation.desktop.map((item) => {
              const isCVLink = item.label === 'CV';
              if (isCVLink) {
                return (
                  <button
                    key={item.href}
                    onClick={onNavigateCV}
                    className={`navbar-link ${currentPage === 'cv' ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                );
              }
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.href}
                  onClick={() => onNavigate && onNavigate(sectionId)}
                  className={`navbar-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* ==========================================
              BOTÓN HAMBURGER (MOBILE)
              Solo visible en pantallas pequeñas
              ========================================== */}
          <button
            className="navbar-toggle mobile-only"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* ==========================================
          MENÚ MOBILE (OVERLAY)
          Pantalla completa que aparece al abrir
          ========================================== */}
      <div
        ref={mobileMenuRef}
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Menú de navegación"
        aria-hidden={!isOpen}
      >
        {/* Botón para cerrar */}
        <button
          className="mobile-menu-close"
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar menú"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Links del menú */}
        <div className="mobile-menu-items">
          {navigation.mobile.map((item, i) => {
            const isCVLink = item.label === 'CV';
            if (isCVLink) {
              return (
                <button
                  key={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    onNavigateCV();
                  }}
                  className="mobile-menu-link"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {item.label}
                </button>
              );
            }
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.href}
                onClick={() => {
                  setIsOpen(false);
                  onNavigate && onNavigate(sectionId);
                }}
                className={`mobile-menu-link ${isActive ? 'active' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
