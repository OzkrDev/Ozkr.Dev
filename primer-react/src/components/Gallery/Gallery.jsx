import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { galleryContent } from '../../data/content';
import './Gallery.css';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [activeTag, setActiveTag] = useState(null);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const filtered = activeTag
    ? galleryContent.items.filter((_, i) => {
        const tags = galleryContent.tags;
        const tagIdx = tags.indexOf(activeTag);
        return i % tags.length === tagIdx;
      })
    : galleryContent.items;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(gridRef.current.children, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openLightbox = (item, idx) => {
    setSelectedImg(item);
    setSelectedIdx(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    setSelectedIdx(null);
    document.body.style.overflow = '';
  };

  const navigate = (dir) => {
    const items = activeTag ? filtered : galleryContent.items;
    const newIdx = selectedIdx + dir;
    if (newIdx < 0 || newIdx >= items.length) return;
    setSelectedIdx(newIdx);
    setSelectedImg(items[newIdx]);
  };

  return (
    <section
      ref={sectionRef}
      className="gallery-section"
      id="galeria"
      aria-label="Galería de trabajos"
    >
      <div className="section-container">
        <div ref={headerRef} className="gallery-header">
          <div>
            <h2 className="section-title">{galleryContent.title}</h2>
            <p className="section-subtitle">{galleryContent.subtitle}</p>
          </div>
          <div className="gallery-tags">
            <button
              className={`gallery-tag ${activeTag === null ? 'active' : ''}`}
              onClick={() => setActiveTag(null)}
            >
              TODOS
            </button>
            {galleryContent.tags.map((tag) => (
              <button
                key={tag}
                className={`gallery-tag ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="gallery-grid">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              className="gallery-card"
              onClick={() => openLightbox(item, i)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.image}
                alt={item.label || `Tatuaje ${item.id}`}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <Heart className="gallery-heart-icon" />
                  <span className="gallery-likes">{item.likes}</span>
                </div>
                <span className="gallery-year">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <button
              className="gallery-lightbox-close"
              onClick={closeLightbox}
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>

            <button
              className="gallery-lightbox-nav prev"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              className="gallery-lightbox-content"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.image}
                alt={selectedImg.label || 'Tatuaje ampliado'}
                className="gallery-lightbox-image"
              />
              <div className="gallery-lightbox-info">
                <span className="gallery-lightbox-label">{selectedImg.label}</span>
                <span className="gallery-lightbox-separator">·</span>
                <span className="gallery-lightbox-year">{selectedImg.year}</span>
                <span className="gallery-lightbox-separator">·</span>
                <Heart size={14} className="gallery-lightbox-heart" />
                <span>{selectedImg.likes}</span>
              </div>
            </motion.div>

            <button
              className="gallery-lightbox-nav next"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              aria-label="Siguiente"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
