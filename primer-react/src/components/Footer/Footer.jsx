/**
 * ==============================================
 * COMPONENTE: Footer
 * Ubicación: components/Footer/Footer.jsx
 * ==============================================
 * 
 * PROPÓSITO:
 * Pie de página con links a redes sociales
 * y copyright.
 * 
 * CARACTERÍSTICAS:
 * - Links a redes sociales (Instagram, GitHub, etc.)
 * - Copyright con año y nombre
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { footerContent } from '../../data/content';

const Footer = () => {
  // Referencia para animación
  const footerRef = useRef(null);

  // Efecto para animación
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="footer"
      role="contentinfo"
    >
      <div className="footer-content">
        {/* Links de redes sociales */}
        <div className="footer-socials">
          {footerContent.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label={`Visitar ${social.name}`}
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer-copyright">
          {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
