import React, { forwardRef } from 'react';

// We expect cup.png and diamond.png to be in the assets folder
// For now, if they are not there, they will just show a broken image icon.
import cupImage from '../assets/images/cup.png';
import diamondImage from '../assets/images/diamond.png';

const Cup = forwardRef(({ id, hasDiamond, onClick, isClickable }, ref) => {
  return (
    <div 
      className="cup-wrapper" 
      ref={ref} 
      onClick={() => isClickable && onClick(id)}
      style={{ cursor: isClickable ? 'pointer' : 'default' }}
    >
      <img src={cupImage} alt="Cup" className="cup-image" />
      {hasDiamond && (
        <img src={diamondImage} alt="Diamond" className="diamond" />
      )}
    </div>
  );
});

export default Cup;
