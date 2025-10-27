import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedShield = () => {
  const shieldRef = useRef(null);
  const innerCircleRef = useRef(null);
  const outerCircleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotating animations for the circles
      gsap.to(innerCircleRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center"
      });

      gsap.to(outerCircleRef.current, {
        rotation: -360,
        duration: 30,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center"
      });

      // Entrance animation for the shield
      gsap.fromTo(shieldRef.current,
        {
          scale: 0.8,
          opacity: 0,
          y: 20
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          delay: 0.5
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Animated circles */}
      <div className="absolute w-48 h-48 flex items-center justify-center">
        <div 
          ref={innerCircleRef} 
          className="absolute w-full h-full rounded-full border-2 border-dashed border-[#FFD700] opacity-20"
        />
        <div 
          ref={outerCircleRef}
          className="absolute w-[120%] h-[120%] rounded-full border-2 border-dashed border-[#FFD700] opacity-10"
        />
      </div>
      
      {/* Shield icon */}
      <div 
        ref={shieldRef}
        className="relative z-10 w-20 h-20 bg-[#FFD700] rounded-lg flex items-center justify-center transform rotate-45"
      >
        <div className="transform -rotate-45 text-black">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-10 h-10"
          >
            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedShield;