import React, { useEffect, useState } from 'react';
import customCursorImage from '../images/corn_cursor.png';
import customCursorHoverImage from '../images/corn_cursor_hover.png';

function CustomCursor() {
  const [cursorImage, setCursorImage] = useState(customCursorImage);

  const handleMouseEnter = () => {
    setCursorImage(customCursorHoverImage);
  };

  const handleMouseLeave = () => {
    setCursorImage(customCursorImage);
  };

  useEffect(() => {
    const updateCursor = (e) => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      }

      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.top = `${e.clientY - 20}px`; // Adjusting to center ripple with cursor
      ripple.style.left = `${e.clientX - 20}px`; // Adjusting to center ripple with cursor
      document.body.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 1000); // Removing ripple after 1 second
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ cursor: 'none' }}>
      <img
        src={cursorImage}
        alt="Custom Cursor"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default CustomCursor;
