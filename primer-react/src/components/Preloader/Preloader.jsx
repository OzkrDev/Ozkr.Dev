/**
 * ==============================================
 * COMPONENTE: Preloader
 * Ubicación: components/Preloader/Preloader.jsx
 * ==============================================
 * 
 * PROPÓSITO:
 * Pantalla de carga inicial que se muestra mientras
 * la página se está cargando. Incluye una barra de
 * progreso animada.
 * 
 * CARACTERÍSTICAS:
 * - Logo animado de DAGGA
 * - Barra de progreso que crece
 * - Transición suave al terminar (fade out)
 * 
 * PROPS:
 * - onComplete: Función que se llama cuando termina de cargar
 * 
 * ACCESIBILIDAD:
 * - role="status" indica que es un indicador de estado
 * - aria-label para describir qué está pasando
 */

import React, { useState, useEffect } from 'react';
import { preloaderContent } from '../../data/content';

const Preloader = ({ onComplete }) => {
  // Estado para el progreso de la barra (0-100)
  const [progress, setProgress] = useState(0);

  // Efecto para simular la carga y manejar el callback
  useEffect(() => {
    // Intervalo que aumenta el progreso gradualmente
    const interval = setInterval(() => {
      setProgress(prev => {
        // Si llegó al 100%, limpiar el intervalo
        if (prev >= 100) {
          clearInterval(interval);
          // Esperar 500ms antes de completar (para la transición)
          setTimeout(onComplete, 500);
          return 100;
        }
        // Aumentar de 2 en 2 cada 30ms
        // (Tarda aproximadamente 1.5 segundos en total)
        return prev + 2;
      });
    }, 30);

    // Cleanup: asegurar que el intervalo se limpie si el componente se desmonta
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className="preloader" 
      role="status" 
      aria-label="Cargando página"
    >
      {/* Logo/texto animado */}
      <div className="preloader-text font-headline">
        {preloaderContent.text}
      </div>

      {/* Barra de progreso */}
      <div className="preloader-bar">
        {/* Barra que crece según el progreso */}
        <div 
          className="preloader-progress" 
          style={{ width: `${progress}%` }} 
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
};

export default Preloader;
