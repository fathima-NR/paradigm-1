import React from 'react';
import './logo.css'; // Import the CSS file
import logo1 from "/src/assets/logo1.webp"
import logo2 from "/src/assets/logo2.webp"
import logo3 from "/src/assets/logo3.webp"
import logo4 from "/src/assets/logo4.webp"
import logo5 from "/src/assets/logo5.webp"
import logo6 from "/src/assets/logo6.webp"
import logo7 from "/src/assets/logo7.webp"
function Logo() {
  return (
    <div className="logo-container mt-5 pt-5">
      <div className="logo-slider">
        <img src={logo1} alt="Logo 1" width={300} height={150} />
        <img src={logo2} alt="Logo 2" width={300} height={150} />
        <img src={logo3} alt="Logo 3" width={300} height={150} />
        <img src={logo4} alt="Logo 4" width={300} height={150} />
        <img src={logo5} alt="Logo 5" width={300} height={150} />
        <img src={logo6} alt="Logo 6" width={300} height={150} />
        <img src={logo7} alt="Logo 7" width={300} height={150} />
        {/* Repeat images to create a continuous effect */}
        <img src={logo1} alt="Logo 1" width={300} height={150} />
        <img src={logo2} alt="Logo 2" width={300} height={150} />
        <img src={logo3} alt="Logo 3" width={300} height={150} />
        <img src={logo4} alt="Logo 4" width={300} height={150} />
        <img src={logo5} alt="Logo 5" width={300} height={150} />
        <img src={logo6} alt="Logo 6" width={300} height={150} />
        <img src={logo7} alt="Logo 7" width={300} height={150} />
      </div>
    </div>
  );
}

export default Logo;
