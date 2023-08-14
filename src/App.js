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
          <img
            src="/images/desktop_img.png"
            alt="Desktop Background"
            className="object-cover w-full h-full"
          />
        </div>
      ) : (
        <div className="md:hidden absolute inset-0 z-[-1]">
          <img
            src="/images/mobile_img.png"
            alt="Mobile Background"
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Centered image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img
          src={isDesktop ? "/images/prizes_screen.png" : "/images/mobile_prizes.png"}
          alt="Prizes"
          className="max-w-full max-h-full"
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
          }}
        />

        {/* Text "PRIZES" */}
        <div className="text-above-image">
          <span className="blue-text">PR</span><span className="white-text">IZES</span>
        </div>
      </div>
    </div>
  );
};

export default App;
