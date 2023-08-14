import React, { useState, useEffect } from 'react';

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsDesktop(screenWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {isDesktop ? (
        <div
          className="hidden md:block absolute inset-0 z-[-1]"
          style={{ height: '100vh' }} 
        >
          <img src="/images/desktop_img.png" alt="Desktop Background" className="object-cover w-full h-full" />
        </div>
      ) : (
        <div className="md:hidden absolute inset-0 z-[-1]">
          <img src="/images/mobile_img.png" alt="Mobile Background" className="object-cover w-full h-full" />
        </div>
      )}

      {/* Centered image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/images/prizes_screen.png" alt="Prizes" className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default App;
