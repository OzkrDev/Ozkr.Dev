import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, MapPin, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { testimonialsContent, siteConfig } from '../../data/content';
import './Testimonials.css';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const bioRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(bioRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonials-section"
      id="testimonios"
      aria-label="Testimonios y biografía"
    >
      <div className="section-container">
        <div className="testimonials-header">
          <motion.span
            className="testimonials-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={12} />
            {testimonialsContent.subtitle}
          </motion.span>
          <h2 className="section-title">{testimonialsContent.title}</h2>
        </div>

        <div className="testimonials-grid">
          <div ref={bioRef} className="testimonials-bio">
            <div className="bio-icon">
              <Quote size={24} />
            </div>
            <h3 className="bio-title">{testimonialsContent.bio.title}</h3>
            {testimonialsContent.bio.text.split('\n\n').map((paragraph, i) => (
              <p key={i} className="bio-text">{paragraph}</p>
            ))}
            <div className="bio-signature">
              <span className="bio-name">{siteConfig.name}</span>
              <span className="bio-role">Tatuador · Director Creativo</span>
            </div>
          </div>

          <div className="testimonials-cards">
            {testimonialsContent.items.map((item, i) => (
              <div
                key={item.id}
                ref={el => cardsRef.current[i] = el}
                className="testimonial-card"
              >
                <div className="testimonial-stars">
                  {Array.from({ length: item.rating }).map((_, s) => (
                    <Star key={s} size={14} className="star-filled" />
                  ))}
                </div>
                <p className="testimonial-text">"{item.text}"</p>
                <div className="testimonial-meta">
                  <div className="testimonial-author">
                    <span className="testimonial-name">{item.name}</span>
                    <div className="testimonial-location">
                      <MapPin size={10} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <span className="testimonial-tattoo">{item.tattoo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
