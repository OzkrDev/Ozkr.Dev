/**
 * ==============================================
 * HOOK: useLenis
 * Ubicación: hooks/useLenis.js
 * ==============================================
 * 
 * PROPÓSITO:
 * Este hook configura e inicializa Lenis para smooth scrolling.
 * Lenis es una librería que proporciona desplazamiento suave
 * de alta calidad, similar al de sitios web premium (Awwwards).
 * 
 * CARACTERÍSTICAS:
 * - Smooth scrolling en desktop y mobile
 * - Sincronización con GSAP ScrollTrigger
 * - Soporte para gestos táctiles
 * - Performance optimizada
 * 
 * USO:
 * const { lenis, raf } = useLenis(options);
 * 
 * OPTIONS:
 * - duration: Duración de la animación de scroll (default: 1.2)
 * - smoothWheel: Habilitar smooth scroll con mouse (default: true)
 * - wheelMultiplier: Multiplicador para velocidad de scroll (default: 1)
 * - touchMultiplier: Multiplicador para gestos táctiles (default: 2)
 * 
 * IMPORTANTE:
 * Este hook debe usarse en el componente App o en un Provider
 * para que Lenis esté disponible globalmente.
 */

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook para inicializar y gestionar Lenis
 * @param {Object} options - Opciones de configuración de Lenis
 * @returns {Object} - Instancia de Lenis y estado de carga
 */
export const useLenis = (options = {}) => {
  // Estado para saber si Lenis está listo
  const [isReady, setIsReady] = useState(false);
  
  // Ref para guardar la instancia de Lenis
  const lenisRef = useRef(null);

  // Configuración por defecto
  const defaultOptions = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  };

  // Merge de opciones
  const config = { ...defaultOptions, ...options };

  useEffect(() => {
    // Crear nueva instancia de Lenis
    const lenis = new Lenis(config);
    
    // Guardar referencia
    lenisRef.current = lenis;

    // Función de animación del frame
    function raf(time) {
      // Pasar tiempo a Lenis
      lenis.raf(time);
      
      // Continuar el loop
      requestAnimationFrame(raf);
    }

    // Iniciar el loop de animación
    requestAnimationFrame(raf);

    // Sincronizar con GSAP ScrollTrigger
    // Esto asegura que las animaciones de scroll estén sincronizadas
    lenis.on('scroll', ScrollTrigger.update);

    // Configurar GSAP ticker para que Lenis funcione con GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Deshabilitar lag smoothing para mayor precisión
    gsap.ticker.lagSmoothing(0);

    // Marcar como listo
    setIsReady(true);

    // Cleanup: destruir Lenis cuando el componente se desmonte
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [
    config.duration,
    config.orientation,
    config.gestureOrientation,
    config.smoothWheel,
    config.wheelMultiplier,
    config.touchMultiplier,
    config.infinite,
  ]);

  // Retornar instancia y estado
  return {
    lenis: lenisRef.current,
    isReady,
  };
};

/**
 * Hook para obtener la dirección del scroll
 * Útil para mostrar/ocultar elementos basados en scroll direction
 * @returns {string} - 'up' | 'down' | null
 */
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      // Solo actualizar si hay un cambio de dirección
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [lastScrollY, scrollDirection]);

  return scrollDirection;
};

export default useLenis;
