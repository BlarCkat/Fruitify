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
     <svg width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M139.75 26.875H32.25C29.3989 26.875 26.6646 28.0076 24.6486 30.0236C22.6326 32.0396 21.5 34.7739 21.5 37.625V75.25C21.5 110.671 38.6462 132.138 53.0311 143.909C68.5245 156.58 83.9373 160.88 84.6092 161.062C85.5331 161.313 86.5073 161.313 87.4311 161.062C88.103 160.88 103.496 156.58 119.009 143.909C133.354 132.138 150.5 110.671 150.5 75.25V37.625C150.5 34.7739 149.367 32.0396 147.351 30.0236C145.335 28.0076 142.601 26.875 139.75 26.875ZM116.691 73.6778L79.0662 111.303C78.5671 111.803 77.9743 112.199 77.3217 112.47C76.6692 112.74 75.9698 112.879 75.2634 112.879C74.5571 112.879 73.8576 112.74 73.2051 112.47C72.5526 112.199 71.9598 111.803 71.4606 111.303L55.3356 95.1778C54.3271 94.1692 53.7604 92.8013 53.7604 91.375C53.7604 89.9487 54.3271 88.5808 55.3356 87.5722C56.3442 86.5636 57.7121 85.997 59.1384 85.997C60.5648 85.997 61.9327 86.5636 62.9412 87.5722L75.25 99.9011L109.072 66.0722C109.572 65.5728 110.164 65.1767 110.817 64.9064C111.469 64.6361 112.169 64.497 112.875 64.497C113.581 64.497 114.281 64.6361 114.933 64.9064C115.586 65.1767 116.178 65.5728 116.678 66.0722C117.177 66.5716 117.573 67.1644 117.844 67.8169C118.114 68.4694 118.253 69.1688 118.253 69.875C118.253 70.5812 118.114 71.2806 117.844 71.9331C117.573 72.5856 117.177 73.1784 116.678 73.6778H116.691Z" fill="#FFC32A"/>
</svg>

    </div>
  );
};

export default AnimatedShield;