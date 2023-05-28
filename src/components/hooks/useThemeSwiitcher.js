import React, { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
    const preferDarkScheme = '(prefers-color-scheme: dark)';
    const [mode, setMode] = useState('');
  
    useEffect(() => {
      const mediaquery = window.matchMedia(preferDarkScheme);
      const usePref = localStorage.getItem('theme');
  
      const handleChange = () => {
        if (usePref) {
          const check = usePref === 'dark' ? 'dark' : 'light';
          setMode(check);
          if (check === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } else {
          const check = mediaquery.matches ? 'dark' : 'light';
          setMode(check);
          if (check === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      };

      handleChange();
  
      mediaquery.addEventListener('change', handleChange);
  
      return () => mediaquery.removeEventListener('change', handleChange);
    }, []);
  
    useEffect(() => {
      if (mode === 'dark') {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      }

      if(mode ==="light"){
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
      }
    }, [mode]);
  
    return [mode, setMode];
  };
  
  export default useThemeSwitcher;
