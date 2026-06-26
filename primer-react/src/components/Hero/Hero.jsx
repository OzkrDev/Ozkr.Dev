/**
 * ==============================================
 * COMPONENTE: Hero
 * Ubicación: components/Hero/Hero.jsx
 * ==============================================
 * 
 * PROPÓSITO:
 * Sección principal de la landing page que presenta
 * al artista con su nombre, tagline y llamadas a la acción.
 * 
 * CARACTERÍSTICAS:
 * - Título con animación 3D flip
 * - Texto decorativo de fondo con parallax
 * - Badge "ESTÉTICA CURADA"
 * - Dos botones CTA
 * - Indicador de scroll animado
 * 
 * ANIMACIONES:
 * - Entrada escalonada de elementos (badge → título → subtítulo → CTAs)
 * - Efecto 3D flip en el título
 * - Parallax en el texto de fondo
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { heroContent, siteConfig } from '../../data/content';
import './Hero.css';

const Hero = () => {
  // ==========================================
  // REFS: Referencias a elementos para animaciones
  // ==========================================
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const bgTextRef = useRef(null);

  // ==========================================
  // EFECTO: Animaciones de entrada
  // Se ejecuta cuando el componente se monta
  // ==========================================
  useEffect(() => {
    // Verificar que los refs existen
    if (!badgeRef.current || !titleRef.current || !subtitleRef.current || !ctaRef.current) {
      console.log('Refs not found');
      return;
    }

    console.log('Hero refs found, animating...');

    // Animación simple sin timeline para probar
    gsap.to(badgeRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6
    });

    gsap.to(titleRef.current.children, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.1
    });

    gsap.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6
    });

    gsap.to(ctaRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.1
    });
  }, []);

  // ==========================================
  // RENDER: Estructura HTML
  // ==========================================
  return (
    <section
      ref={heroRef}
      className="hero-section"
      id="inicio"
      aria-label="Sección principal"
    >
      {/* ==========================================
          VIDEO DE FONDO
          Video posicionado abajo-izquierda
          ========================================== */}
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          src="/Tatuado_Rojo_1.mp4"
        />
        <div className="hero-video-gradient" />
      </div>

      {/* ==========================================
          TEXTO DECORATIVO DE FONDO
          Texto gigante que se ve detrás del contenido
          Con efecto parallax
          ========================================== */}
      <div ref={bgTextRef} className="hero-bg-text" aria-hidden="true">
        {siteConfig.name}
      </div>

      {/* ==========================================
          CONTENIDO PRINCIPAL
          Todo el contenido visible de la sección
          ========================================== */}
      <div className="hero-content">
        {/* Badge decorativo */}
        <span ref={badgeRef} className="hero-badge">
          {heroContent.badge}
        </span>

        {/* Título principal con dos líneas */}
        <h1 ref={titleRef} className="hero-title">
          <span>{heroContent.titleLine1}</span>
          <span className="hero-title-accent">
            {heroContent.titleLine2}
          </span>
        </h1>

        {/* Descripción/subtítulo */}
        <p ref={subtitleRef} className="hero-subtitle">
          {heroContent.subtitle}
        </p>

        {/* Botones de acción (CTAs) */}
        <div ref={ctaRef} className="hero-cta">
          <a href="#tattoos" className="hero-btn-primary">
            {heroContent.ctaPrimary}
          </a>
          <a href="#contacto" className="hero-btn-secondary">
            {heroContent.ctaSecondary}
          </a>
        </div>
      </div>

      {/* ==========================================
          INDICADOR DE SCROLL
          Animación que indica que hay más contenido
          Solo visible en desktop
          ========================================== */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="hero-scroll-text">{heroContent.scrollText}</span>
        <div className="hero-scroll-line">
          <div className="hero-scroll-progress" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
