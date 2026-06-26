import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Sparkles, Shield, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { contactContent, ctaContent } from '../../data/content';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="contact-section"
      id="contacto"
      aria-label="Contacto"
    >
      {/* CTA Section */}
      <motion.div
        ref={ctaRef}
        className="cta-banner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="cta-banner-content">
          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {ctaContent.title}
          </motion.h2>
          <motion.p
            className="cta-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {ctaContent.subtitle}
          </motion.p>
          <motion.div
            className="cta-features"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {ctaContent.features.map((feature, i) => (
              <div key={i} className="cta-feature">
                {i === 0 && <CalendarCheck size={14} />}
                {i === 1 && <Sparkles size={14} />}
                {i === 2 && <MapPin size={14} />}
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
          <motion.a
            href="mailto:ozkr@email.com"
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            {ctaContent.cta}
            <CalendarCheck size={16} className="cta-button-icon" />
          </motion.a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <div className="section-container">
        <div ref={contentRef} className="contact-header">
          <h2 className="section-title">{contactContent.title}</h2>
          <p className="contact-subtitle">{contactContent.subtitle}</p>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact-form-row">
            <div className="form-group">
              <input
                id="name"
                type="text"
                placeholder=" "
                required
                aria-label={contactContent.form.nameLabel}
              />
              <label htmlFor="name">{contactContent.form.nameLabel}</label>
            </div>

            <div className="form-group">
              <input
                id="email"
                type="email"
                placeholder=" "
                required
                aria-label={contactContent.form.emailLabel}
              />
              <label htmlFor="email">{contactContent.form.emailLabel}</label>
            </div>
          </div>

          <div className="form-group">
            <textarea
              id="message"
              placeholder=" "
              rows="4"
              required
              aria-label={contactContent.form.messageLabel}
            />
            <label htmlFor="message">{contactContent.form.messageLabel}</label>
          </div>

          <div className="contact-form-submit">
            <motion.button
              type="submit"
              className="contact-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {contactContent.form.submitText}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
