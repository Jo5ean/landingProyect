// screenSizeDetector.js
function detectScreenSize() {
    if (typeof window !== 'undefined') {
        // Código que utiliza APIs del navegador
        return window.innerWidth < 768 ? "mobile" : "desktop";
      }
  }
  
  export { detectScreenSize };
  