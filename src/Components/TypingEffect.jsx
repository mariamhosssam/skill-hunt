import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        currentIndex += 1;
        return text.slice(0, currentIndex);
      });

      if (currentIndex >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);


  return (
    <div>
  
      <span className="test-type text-center text-break fs-5 font-monospace">{displayText.split('~')[0]}</span>
      <hr />
      <span className="test-type text-center text-break fs-5 font-monospace">{displayText.split('~')[1]}</span>
    </div>
  );

};

export default TypingEffect;
