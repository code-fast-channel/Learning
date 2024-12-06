(window as any).global = window;

// Simple polyfill for process object
(window as any).process = { env: {} };


(window as any).process = { 
    env: {}, 
    nextTick: (cb: Function) => setTimeout(cb, 0) // Simple polyfill for nextTick
  };