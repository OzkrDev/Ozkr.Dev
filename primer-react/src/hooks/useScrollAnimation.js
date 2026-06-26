/**
 * ==============================================
 * HOOK: useScrollAnimation
 * Ubicación: hooks/useScrollAnimation.js
 * ==============================================
 * 
 * PROPÓSITO:
 * Este hook encapsula la lógica de animación de GSAP ScrollTrigger.
 * Permite animar elementos cuando entran en el viewport con scroll.
 * 
 * USO:
 * const { ref, animate } = useScrollAnimation(options);
 * 
 * OPTIONS:
 * - triggerStart: Cuándo inicia la animación (default: 'top 80%')
 * - y: Traslación Y inicial (default: 60)
 * - opacity: Opacidad inicial (default: 0)
 * - duration: Duración de la animación (default: 0.8)
 * - stagger: Delay entre elementos animados (default: 0.1)
 * - delay: Delay antes de iniciar (default: 0)
 * - ease: Función de easing (default: 'power3.out')
 * 
 * NOTA:
 * - Si pasas un ref array, animarás múltiples elementos con stagger
 * - Si pasas un ref simple, animarás un solo elemento
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar el plugin globally
gsap.registerPlugin(ScrollTrigger);

/**
 * Hook para animación de scroll
 * @param {Object} options - Opciones de animación
 * @returns {Object} - Refs y función de cleanup
 */
export const useScrollAnimation = (options = {}) => {
  // Configuración por defecto
  const defaultOptions = {
    triggerStart: 'top 80%',
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    delay: 0,
    ease: 'power3.out',
  };

  // Merge de opciones
  const config = { ...defaultOptions, ...options };

  // Ref para el contenedor
  const containerRef = useRef(null);

  useEffect(() => {
    // Si no hay contenedor, no hacer nada
    if (!containerRef.current) return;

    // Crear contexto de GSAP para cleanup fácil
    const ctx = gsap.context(() => {
      // Buscar todos los elementos con clase 'animate-in'
      const elements = containerRef.current.querySelectorAll('.animate-in');

      if (elements.length > 0) {
        // Animar múltiples elementos con stagger
        gsap.from(elements, {
          y: config.y,
          opacity: config.opacity,
          duration: config.duration,
          stagger: config.stagger,
          delay: config.delay,
          ease: config.ease,
          scrollTrigger: {
            trigger: containerRef.current,
            start: config.triggerStart,
            toggleActions: 'play none none reverse',
          },
        });
      } else {
        // Animar el contenedor directamente
        gsap.from(containerRef.current, {
          y: config.y,
          opacity: config.opacity,
          duration: config.duration,
          delay: config.delay,
          ease: config.ease,
          scrollTrigger: {
            trigger: containerRef.current,
            start: config.triggerStart,
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, containerRef);

    // Cleanup: revertir contexto cuando el componente se desmonte
    return () => ctx.revert();
  }, [
    config.y,
    config.opacity,
    config.duration,
    config.stagger,
    config.delay,
    config.ease,
    config.triggerStart,
  ]);

  return { ref: containerRef };
};

/**
 * Hook alternativo para animaciones más específicas
 * @param {Function} animationFn - Función que recibe el elemento a animar
 * @param {Array} dependencies - Dependencias del useEffect
 */
export const useCustomScrollAnimation = (animationFn, dependencies = []) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      animationFn(ref.current);
    }, ref);

    return () => ctx.revert();
  }, dependencies);

  return ref;
};

export default useScrollAnimation;
