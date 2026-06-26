/**
 * ==============================================
 * COMPONENTE: Tattoos
 * Ubicación: components/Tattoos/Tattoos.jsx
 * ==============================================
 * 
 * PROPÓSITO:
 * Sección que muestra el portafolio de trabajos de tattoo
 * en un grid tipo "bento" con diferentes tamaños.
 * 
 * CARACTERÍSTICAS:
 * - Grid responsive de 12 columnas
 * - 4 items con diferentes tamaños
 * - Imágenes con grayscale → color en hover
 * - Overlay con gradiente al hover
 * - Tags de filtro (MINIMAL, GEOMÉTRICO)
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { tattoosContent } from '../../data/content';

const Tattoos = () => {
  // Referencias para animaciones
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  // Efecto para animaciones de entrada
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del header
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Animación de cada tarjeta con stagger
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="tattoos-section"
      id="tattoos"
      aria-label="Portafolio de trabajos"
    >
      <div className="section-container">
        {/* Header con título, subtítulo y tags */}
        <div ref={headerRef} className="tattoos-header">
          <div className="tattoos-header-left">
            <h2 className="section-title">{tattoosContent.title}</h2>
            <p className="section-subtitle">{tattoosContent.subtitle}</p>
          </div>
          
          {/* Línea divisoria (solo desktop) */}
          <div className="tattoos-header-divider" />
          
          {/* Tags de filtro */}
          <div className="tattoos-tags">
            {tattoosContent.tags.map((tag) => (
              <span key={tag} className="tattoo-tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Grid de trabajos */}
        <div className="tattoos-grid">
          {tattoosContent.items.map((item, i) => (
            <div
              key={item.id}
              ref={el => cardsRef.current[i] = el}
              className={`tattoo-card ${item.span} ${item.aspect} overflow-hidden group relative`}
            >
              {/* Imagen */}
              <img
                className="tattoo-image"
                src={item.image}
                alt={`Trabajo de tattoo ${item.id}`}
                loading="lazy"
              />
              
              {/* Overlay con gradiente */}
              <div className="tattoo-overlay" />
              
              {/* Label que aparece al hover */}
              {item.label && (
                <div className="tattoo-label">
                  <span>{item.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tattoos;
