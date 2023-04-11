import React, { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

const Greeting = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: `translateY(${isVisible ? '0px' : '-50px'})`
    },
    delay: 500
  });
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <animated.div style={animationProps}>
      <h1>Hello there!</h1>
      <p>Welcome to my portfolio website.</p>
    </animated.div>
  );
};

export default Greeting;
