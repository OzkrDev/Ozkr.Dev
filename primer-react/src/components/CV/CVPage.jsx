/**
 * ==============================================
 * COMPONENTE: CVPage
 * Ubicación: components/CV/CVPage.jsx
 * ==============================================
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cvPageContent } from '../../data/content';
import ShaderBackground from '../lightswind/shader-background';
import './CVPage.css';

const CVPage = ({ onBack }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.cv-hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      });

      tl.from('.cv-hero-title span', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      }, '-=0.3');

      tl.from('.cv-hero-text > *', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, '-=0.5');

      tl.from('.cv-hero-cta a', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      }, '-=0.3');

      tl.from('.cv-hero-decorative', {
        opacity: 0,
        duration: 0.8,
      }, '-=0.3');

      tl.from('.cv-header-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, '-=0.3');

      gsap.from('.cv-section-reveal', {
        scrollTrigger: {
          trigger: '.cv-section-reveal',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from('.cv-exp-item', {
        scrollTrigger: {
          trigger: '.cv-exp-list',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
      });

      gsap.from('.cv-impact-number', {
        scrollTrigger: {
          trigger: '.cv-impact-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });

      gsap.from('.cv-competency-item', {
        scrollTrigger: {
          trigger: '.cv-competencies-list',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      });

      gsap.from('.cv-method-card', {
        scrollTrigger: {
          trigger: '.cv-methods-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const competencies = [
    { name: 'UI/UX Design', level: 80 },
    { name: 'React / JavaScript', level: 80 },
    { name: 'CSS / Animaciones', level: 75 },
    { name: 'PHP / Backend', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'MySQL', level: 85 },
  ];

  const impactStats = [
    { number: '03+', label: 'Años de experiencia' },
    { number: '10+', label: 'Módulos desenvolvidos' },
    { number: '1000+', label: 'Usuarios受益' },
    { number: '05+', label: 'Releases exitosas' },
  ];

  return (
    <div ref={containerRef} className="cv-page-new">
      {/* Hero Section */}
      <section className="cv-hero">
        <div className="cv-hero-bg-grid"></div>
        <div className="cv-hero-glow"></div>
        <ShaderBackground color="#b9030f" className="cv-hero-shader" />
        <div className="cv-hero-content">
          <div className="cv-hero-badge">
            <span>UI Developer & ICT Engineer</span>
          </div>
          <h2 className="cv-hero-title">
            <span>PRECISIÓN</span>
            <span className="cv-hero-text-stroke">EN CÓDIGO</span>
            <span>Y DISEÑO.</span>
          </h2>
          <div className="cv-hero-text">
            <p>
              Uniendo la brecha entre el diseño conceptual de alto nivel y la implementación técnica robusta. Especializado en sistemas institucionales y arquitectura digital.
            </p>
          </div>
          <div className="cv-hero-cta">
            <a href="#contact-section" className="cv-btn-primary">Iniciar Proyecto</a>
            <a href="#experience-section" className="cv-btn-secondary">Ver Historial</a>
          </div>
        </div>
        <div className="cv-hero-decorative">
          <span>const user = "Oscar Manuel"</span>
          <div className="cv-hero-decorative-line"></div>
          <span>Loc: 20.6597° N, 103.3496° W</span>
        </div>
      </section>

      {/* Header Card con Contacto */}
      <section className="cv-section-reveal cv-contact-header">
        <div className="cv-container">
          <div className="cv-header-card">
            <h1 className="cv-header-name">OSCAR MANUEL LOZANO ALEJANDRE</h1>
            <p className="cv-header-title">Desarrollador Frontend / UI Developer</p>
            <p className="cv-header-location">
              <span className="material-symbols-outlined">location_on</span>
              Morelia, Michoacán, México
            </p>
            <div className="cv-header-contact">
              <a href={`mailto:${cvPageContent.contact.email}`} className="cv-contact-link">
                <span className="material-symbols-outlined">mail</span>
                <span>{cvPageContent.contact.email}</span>
              </a>
              <a href={`tel:${cvPageContent.contact.phone}`} className="cv-contact-link">
                <span className="material-symbols-outlined">call</span>
                <span>{cvPageContent.contact.phone}</span>
              </a>
            </div>
            <div className="cv-header-socials">
              <a href={cvPageContent.contact.links.linkedin} target="_blank" rel="noopener noreferrer" className="cv-social-link" aria-label="LinkedIn">
                <span>LinkedIn</span>
              </a>
              <a href={cvPageContent.contact.links.github} target="_blank" rel="noopener noreferrer" className="cv-social-link" aria-label="GitHub">
                <span>GitHub</span>
              </a>
              <a href={cvPageContent.contact.links.portfolio} target="_blank" rel="noopener noreferrer" className="cv-social-link" aria-label="Portfolio">
                <span>Portfolio</span>
              </a>
              <a href={cvPageContent.contact.links.instagram} target="_blank" rel="noopener noreferrer" className="cv-social-link" aria-label="Instagram">
                <span>IG</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="cv-section-reveal cv-profile-section">
        <div className="cv-container">
          <div className="cv-profile-grid">
            <div className="cv-profile-text">
              <h2 className="cv-section-title-lg">Perfil</h2>
              <div className="cv-profile-description">
                <p>Con más de 3 años de experiencia dedicada en la industria tecnológica, he cultivado un perfil híbrido único como Diseñador UI y Desarrollador Frontend.</p>
                <p>Mi metodología se centra en la mentalidad del "Curador": cada línea de código y cada píxel es intencional, orientada a crear sistemas institucionales profesionales de alto rendimiento.</p>
              </div>
            </div>
            <div className="cv-profile-stats">
              <div className="cv-stat-card cv-stat-highlight">
                <span className="cv-stat-number">03+</span>
                <span className="cv-stat-label">Años de Experiencia</span>
              </div>
              <div className="cv-stat-card">
                <span className="cv-stat-number">ICT</span>
                <span className="cv-stat-label">Ingeniería</span>
              </div>
              <div className="cv-stat-card cv-stat-wide">
                <div className="cv-stat-icon">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <div>
                  <span className="cv-stat-title">Arquitectura de Sistemas</span>
                  <span className="cv-stat-subtitle">Escalabilidad y seguridad de grado institucional.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="cv-section-reveal cv-experience-section" id="experience-section">
        <div className="cv-container">
          <div className="cv-exp-header">
            <h2 className="cv-section-title-lg">Trayectoria<br/>Profesional</h2>
            <span className="cv-exp-years">2023-2026</span>
          </div>
          <div className="cv-exp-list">
            {cvPageContent.experience.map((exp, index) => (
              <div key={index} className="cv-exp-item">
                <div className="cv-exp-company">
                  <span className="cv-exp-company-name">{exp.company}</span>
                  <span className="cv-exp-company-type">{exp.institution}</span>
                </div>
                <div className="cv-exp-details">
                  <h3 className="cv-exp-role">{exp.role}</h3>
                  <p className="cv-exp-description">{exp.description}</p>
                  <div className="cv-exp-tags">
                    <span className="cv-exp-tag">UI Development</span>
                    <span className="cv-exp-tag">React</span>
                    <span className="cv-exp-tag">System Architecture</span>
                  </div>
                </div>
                <div className="cv-exp-period">
                  <span>{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Results Section */}
      <section className="cv-section-reveal cv-impact-section">
        <div className="cv-container">
          <h2 className="cv-section-title-center">Impacto y Resultados</h2>
          <div className="cv-impact-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className="cv-impact-card">
                <span className="cv-impact-number">{stat.number}</span>
                <span className="cv-impact-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="cv-section-reveal cv-competencies-section">
        <div className="cv-container">
          <h2 className="cv-section-title-center">Competencias</h2>
          <div className="cv-competencies-list">
            {competencies.map((skill, index) => (
              <div key={index} className="cv-competency-item">
                <div className="cv-competency-header">
                  <span className="cv-competency-name">{skill.name}</span>
                  <span className="cv-competency-percent">{skill.level}%</span>
                </div>
                <div className="cv-competency-bar">
                  <div 
                    className="cv-competency-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="cv-section-reveal cv-method-section">
        <div className="cv-container">
          <h2 className="cv-section-title-center">Cómo Trabajo</h2>
          <div className="cv-method-quote">
            <span className="cv-quote-icon">"</span>
            <p className="cv-quote-text">
              No solo escribo código; diseño soluciones. Me encargo de que la estructura sea sólida, la estética impecable y que el usuario siempre sepa exactamente hacia dónde ir.
            </p>
            <span className="cv-quote-icon">"</span>
          </div>
          <div className="cv-methods-grid">
            <div className="cv-method-card">
              <span className="material-symbols-outlined cv-method-icon">devices</span>
              <h3>Responsive</h3>
              <p>Mobile-first design. Se ve bien en cualquier dispositivo.</p>
            </div>
            <div className="cv-method-card">
              <span className="material-symbols-outlined cv-method-icon">speed</span>
              <h3>Performance</h3>
              <p>Código optimizado. Rápido y eficiente.</p>
            </div>
            <div className="cv-method-card">
              <span className="material-symbols-outlined cv-method-icon">accessibility</span>
              <h3>Accesible</h3>
              <p>Diseños que todos pueden usar. WCAG Ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="cv-section-reveal cv-contact-section" id="contact-section">
        <div className="cv-container">
          <div className="cv-contact-grid">
            <div className="cv-contact-info">
              <h2 className="cv-contact-title">Comencemos<br/><span>el Diálogo.</span></h2>
              <p className="cv-contact-subtitle">Disponible para desarrollo UI de alto impacto, consultorías de productos digitales y proyectos de arquitectura de sistemas.</p>
              <div className="cv-contact-details">
                <a href={`mailto:${cvPageContent.contact.email}`} className="cv-contact-detail-item">
                  <div className="cv-contact-icon">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <span>{cvPageContent.contact.email}</span>
                </a>
                <div className="cv-contact-detail-item">
                  <div className="cv-contact-icon">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <span>Available Remote / Worldwide</span>
                </div>
              </div>
            </div>
            <form className="cv-contact-form">
              <div className="cv-form-row">
                <div className="cv-form-group">
                  <label>Nombre Completo</label>
                  <input type="text" placeholder="TU NOMBRE" />
                </div>
                <div className="cv-form-group">
                  <label>Correo Electrónico</label>
                  <input type="email" placeholder="EMAIL@DOMAIN.COM" />
                </div>
              </div>
              <div className="cv-form-group">
                <label>Consulta del Proyecto</label>
                <textarea placeholder="DESCRIBE EL ALCANCE Y LOS OBJETIVOS..." rows="4"></textarea>
              </div>
              <button type="submit" className="cv-btn-submit">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cv-footer">
        <div className="cv-footer-content">
          <div className="cv-footer-brand">
            <span className="cv-footer-logo">OZKR</span>
            <span className="cv-footer-copy">© 2026 OZKR PRECISIÓN EN CÓDIGO Y DISEÑO</span>
          </div>
          <div className="cv-footer-links">
            <a href={cvPageContent.contact.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={cvPageContent.contact.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={cvPageContent.contact.links.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CVPage;
