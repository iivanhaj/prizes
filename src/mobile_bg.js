import React from 'react';

const MobileBackground = () => {
  return (
    <div className="md:hidden absolute inset-0 z-[-1]">
      <img src="/mobile-bg.jpg" alt="Mobile Background" className="object-cover w-full h-full" />
    </div>
  );
};

export default MobileBackground;
