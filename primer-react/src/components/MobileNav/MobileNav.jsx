/**
 * ==============================================
 * COMPONENTE: MobileNav
 * Ubicación: components/MobileNav/MobileNav.jsx
 * ==============================================
 * 
 * PROPÓSITO:
 * Barra de navegación fija en la parte inferior
 * de la pantalla, solo visible en dispositivos móviles.
 * 
 * CARACTERÍSTICAS:
 * - 4 items: Inicio, Tattoos, CV, Contacto
 * - Iconos de Material Symbols
 * - Posición fija en bottom
 * - Solo visible en mobile (hidden en desktop)
 */

import React from 'react';
import { navigation } from '../../data/content';
import './MobileNav.css';

const MobileNav = ({ activeSection = 'inicio', onNavigate }) => {
  const handleClick = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <nav 
      className="mobile-nav-bottom"
      aria-label="Navegación móvil"
    >
      {navigation.bottomNav.map((item) => {
        const sectionId = item.href.replace('#', '');
        const isActive = activeSection === sectionId;
        
        return (
          <button
            key={item.href}
            onClick={() => handleClick(sectionId)}
            className={`mobile-nav-item ${isActive ? 'active' : ''}`}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            {/* Icono */}
            <span className="material-symbols-outlined">
              {item.icon}
            </span>
            
            {/* Label */}
            <span className="mobile-nav-label">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default MobileNav;
