import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cvContent } from '../../data/content';
import './CV.css';

const CV = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll('.cv-item');
      gsap.from(items, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      gsap.from(leftRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cv-section"
      id="cv"
      aria-label="Currículum vitae"
    >
      <div className="section-container">
        <div className="cv-grid">
          <div ref={leftRef} className="cv-left">
            <div className="cv-block cv-item">
              <h3 className="cv-section-title">{cvContent.profile.title}</h3>
              <p className="cv-description">{cvContent.profile.description}</p>
            </div>

            <div className="cv-block cv-item">
              <h3 className="cv-section-title">ESPECIALIDAD</h3>
              <ul className="cv-skills">
                {cvContent.skills.map((skill) => (
                  <li key={skill.name} className="cv-skill">
                    <span className="cv-skill-name">{skill.name}</span>
                    <span className="cv-skill-level">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cv-right">
            <h3 className="cv-section-title cv-item">RECORRIDO PROFESIONAL</h3>

            {cvContent.experience.map((exp) => (
              <div key={exp.company} className="cv-experience cv-item">
                <div className="cv-experience-header">
                  <h4 className="cv-company">{exp.company}</h4>
                  <span className="cv-period">{exp.period}</span>
                </div>
                <p className="cv-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
