/**
 * ==============================================
 * COMPONENTE: Blog
 * Ubicación: components/Blog/Blog.jsx
 * ==============================================
 * 
 * PROPÓSITO:
 * Sección de artículos/editorial que muestra
 * publicaciones del blog.
 * 
 * CARACTERÍSTICAS:
 * - Grid de 3 columnas en desktop
 * - Cards con imagen, categoría, título y excerpt
 * - Hover effects en imágenes y títulos
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { blogContent } from '../../data/content';

const Blog = () => {
  // Referencias para animaciones
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  // Efecto para animaciones
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del header
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Animación de cada card
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="blog-section"
      id="blog"
      aria-label="Artículos y editorial"
    >
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="blog-header">
          <h2 className="section-title">{blogContent.title}</h2>
          <div className="blog-header-line" />
        </div>

        {/* Grid de artículos */}
        <div className="blog-grid">
          {blogContent.articles.map((article, i) => (
            <article
              key={article.title}
              ref={el => cardsRef.current[i] = el}
              className="blog-card"
            >
              {/* Imagen */}
              <div className="blog-image-container">
                <img
                  className="blog-image"
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                />
              </div>

              {/* Contenido */}
              <div className="blog-content">
                <span className="blog-category">{article.category}</span>
                <h4 className="blog-title">{article.title}</h4>
                <p className="blog-excerpt">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
