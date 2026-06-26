/**
 * ==============================================
 * COMPONENTE: CustomCursor
 * Ubicación: components/CustomCursor/CustomCursor.jsx
 * ==============================================
 * 
 * PROPÓSITO:
 * Cursor personalizado que sigue el mouse con un
 * efecto de "lag" suave. Cambia de tamaño al pasar
 * sobre elementos interactivos.
 * 
 * CARACTERÍSTICAS:
 * - Dos elementos: círculo grande (cursor) + punto pequeño
 * - Efecto de seguimiento suave (lerp)
 * - Expansión al hacer hover sobre elementos interactivos
 * 
 * IMPORTANTE:
 * - Solo se muestra en desktop (no mobile)
 * - El CSS ya maneja display: none en mobile
 */

import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  // Referencias a los elementos del DOM
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  // Posiciones del mouse (usamos refs para evitar re-renders)
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Posiciones actuales (para el efecto de lag)
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const dotPosRef = useRef({ x: 0, y: 0 });

  // Efecto para manejar el cursor
  useEffect(() => {
    // Verificar si es desktop (no mostrar en mobile)
    if (window.innerWidth < 768) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    // Función para actualizar la posición del mouse
    const moveCursor = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Función de animación usando requestAnimationFrame
    // Esto crea el efecto de seguimiento suave
    const animate = () => {
      // Interpolación lineal (lerp) para el cursor grande
      // El cursor va hacia la posición del mouse con un delay
      cursorPosRef.current.x += (mouseRef.current.x - cursorPosRef.current.x) * 0.1;
      cursorPosRef.current.y += (mouseRef.current.y - cursorPosRef.current.y) * 0.1;
      
      // Interpolación para el punto pequeño (más rápido)
      dotPosRef.current.x += (mouseRef.current.x - dotPosRef.current.x) * 0.3;
      dotPosRef.current.y += (mouseRef.current.y - dotPosRef.current.y) * 0.3;

      // Aplicar transformaciones
      if (cursor) {
        cursor.style.transform = `translate(${cursorPosRef.current.x - 10}px, ${cursorPosRef.current.y - 10}px)`;
      }
      if (dot) {
        dot.style.transform = `translate(${dotPosRef.current.x - 2}px, ${dotPosRef.current.y - 2}px)`;
      }

      // Continuar el loop de animación
      requestAnimationFrame(animate);
    };

    // Iniciar el loop de animación
    animate();

    // Agregar event listener para el movimiento del mouse
    window.addEventListener('mousemove', moveCursor);

    // Funciones para el hover effect
    const handleHover = () => cursor?.classList.add('hovering');
    const handleLeave = () => cursor?.classList.remove('hovering');

    // Agregar listeners a todos los elementos interactivos
    const interactives = document.querySelectorAll('a, button');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Círculo grande del cursor */}
      <div 
        ref={cursorRef} 
        className="custom-cursor" 
        aria-hidden="true"
      />
      
      {/* Punto pequeño que sigue más rápido */}
      <div 
        ref={dotRef} 
        className="cursor-dot" 
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
