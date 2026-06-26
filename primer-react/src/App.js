/**
 * ==============================================
 * ARCHIVO: App.js
 * Componente principal de la aplicación
 * ==============================================
 * 
 * PROPÓSITO:
 * Componente raíz que ensambla todos los componentes
 * de la landing page.
 * 
 * ESTRUCTURA:
 * - Preloader (cargador inicial)
 * - CustomCursor (cursor personalizado)
 * - Navbar (navegación principal)
 * - main (contenido principal)
 *   - Hero
 *   - Gallery (Instagram-style grid + lightbox)
 *   - Testimonials + Bio
 *   - CV
 *   - Blog
 *   - Contact (CTA + formulario)
 * - Footer
 * - MobileNav (navegación móvil)
 * 
 * FUNCIONALIDADES:
 * - Smooth scrolling con Lenis
 * - Sincronización con GSAP ScrollTrigger
 * - Gestión del estado de carga
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Los estilos están en ./index.css (importado en index.js)

// Importar componentes
import Preloader from './components/Preloader/Preloader';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import CV from './components/CV/CV';
import CVPage from './components/CV/CVPage';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import MobileNav from './components/MobileNav/MobileNav';

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

// ==============================================
// COMPONENTE PRINCIPAL: App
// ==============================================

function App() {
  // Estado para saber si la página terminó de cargar
  const [loaded, setLoaded] = useState(true);
  // Estado para manejar la vista actual (landing o cvpage)
  const [currentPage, setCurrentPage] = useState('landing');
  // Estado para la sección activa (scroll spy)
  const [activeSection, setActiveSection] = useState('inicio');
  // Referencia para la instancia de Lenis
  const lenisRef = useRef(null);

  // Función para navegar a la página de CV
  const navigateToCV = () => {
    setCurrentPage('cv');
  };

  // Función para volver a la landing page
  const navigateToLanding = () => {
    setCurrentPage('landing');
  };

  // Función para hacer scroll a una sección usando Lenis
  const scrollToSection = (sectionId) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${sectionId}`, { offset: 0 });
    }
  };

  // ==============================================
  // EFECTO: Configurar Lenis (smooth scrolling)
  // Se ejecuta una vez al montar el componente
  // ==============================================
  useEffect(() => {
    // Crear nueva instancia de Lenis con opciones
    const lenis = new Lenis({
      duration: 1.2,
      // Función de easing personalizada para scroll suave
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Guardar referencia de Lenis
    lenisRef.current = lenis;

    // Sincronizar Lenis con GSAP ScrollTrigger
    // Esto asegura que las animaciones de scroll estén alineadas
    lenis.on('scroll', ScrollTrigger.update);

    // Loop de animación para Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Deshabilitar lag smoothing para mayor precisión
    gsap.ticker.lagSmoothing(0);

    // ==============================================
    // SCROLL SPY con IntersectionObserver
    // Detecta qué sección está visible y actualiza la navegación
    // ==============================================
    const sections = ['inicio', 'galeria', 'testimonios', 'cv', 'blog', 'contacto'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup: destruir Lenis y observer al desmontar
    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  // ==============================================
  // CALLBACK: Cuando termina el preloader
  // Se pasa como prop al componente Preloader
  // ==============================================
  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  // ==============================================
  // RENDER: Estructura de la aplicación
  // ==============================================
  return (
    <>
      {/* Link para saltar al contenido principal (accesibilidad) */}
      {currentPage === 'landing' && (
        <a href="#inicio" className="skip-link">
          Saltar al contenido
        </a>
      )}

      {/* Preloader: solo se muestra mientras no esté cargado */}
      {!loaded && <Preloader onComplete={handleLoadComplete} />}

      {/* Cursor personalizado: se muestra cuando está cargado en cualquier página */}
      {loaded && <CustomCursor />}

      {/* Navegación principal */}
      <Navbar 
        onNavigateCV={navigateToCV} 
        currentPage={currentPage}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        showBackButton={currentPage === 'cv'}
        onBack={navigateToLanding}
      />

      {/* Contenido basado en la página actual */}
      {currentPage === 'cv' ? (
        <CVPage onBack={navigateToLanding} />
      ) : (
        <main id="main-content">
          {/* Sección Hero: Presentación principal */}
          <Hero />

          {/* Sección Galería: Portafolio estilo Instagram */}
          <Gallery />

          {/* Sección Testimonios: Reseñas y biografía */}
          <Testimonials />

          {/* Sección CV: Perfil y experiencia */}
          <CV />

          {/* Sección Blog: Artículos y editorial */}
          <Blog />

          {/* Sección Contacto: Formulario de contacto */}
          <Contact />
        </main>
      )}

      {/* Footer: solo en landing page */}
      {currentPage === 'landing' && <Footer />}

      {/* Navegación móvil: Barra fija inferior (solo mobile y en landing) */}
      {currentPage === 'landing' && (
        <MobileNav 
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />
      )}
    </>
  );
}

// Exportar componente
export default App;
