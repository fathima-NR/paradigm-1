import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "/src/assets/logo.png";
function Footer() {
  return (
    <footer className="footer bg-dark ">
      <div className="row text-white gap-5 mx-2">
        <div className="col-sm-3 pe-4">
          <img src={logo} alt="Logo" width={250} />
          <p className='fw-bold ms-2 mt-3'>
          PARADIGM Engineering Consultant LLC,Office #806,Saheel Tower 1, Al Nahda 1, Dubai,UAE
            <br />
            admin@PARAD-ec.com
            <br />
            P:+971 45850899
          </p>
          <p className='mt-5 mb-5 fw-bold ms-2'>
          © PARADIGM -ENGINEERING CONSULTANT LLC All Copyright 2024


          </p>
        </div>
        <div className="col-sm-2 mt-3  pe-4">
          <h6 className='fw-bold fs-4'>Quick Links</h6>
          <ul className='list-unstyled mt-3 fw-bold' style={{ fontSize: "15px" }}>
            <li className='mt-2'><a href="/Services" className="text-decoration-none link">Services</a></li>
            <li className='mt-2'><a href="/Contactus" className="text-decoration-none link">Contact Us</a></li>
            <li className='mt-2'><a href="/Aboutus" className="text-decoration-none link">About Us</a></li>
          </ul>
        </div>
        <div className="col-sm-3 text-start mt-3  pe-4">
          <h6 className='fw-bold fs-4'>Services</h6>
          <ul className='list-unstyled mt-3 fw-bold' style={{ fontSize: "15px" }}>
            
            <li className='mt-2'><a href="/Cyber" className="text-decoration-none link">Architecture
</a></li>
            <li className='mt-2'><a href="/IT" className="text-decoration-none link">Landscape
</a></li>
            <li className='mt-2'><a href="/AMV" className="text-decoration-none link">Structural Engineering
</a></li>
            <li className='mt-2'><a href="/EVL" className="text-decoration-none link">Interior Architecture

</a></li>
            <li className='mt-2'><a href="/Cloud" className="text-decoration-none link">Mechanical Engineering
           </a></li>
            <li className='mt-2'><a href="/Web" className="text-decoration-none link">Project Management</a></li>
          </ul>
        </div>
        <div className="col-sm-2 mt-3 ">
          <h6 className='text-start' style={{ fontSize: "14px" }}>Have a project?</h6>
          <div className="d-flex justify-content-start"><a href="/Contactus">
            <button className="flash-effect mt-3 p-3 fw-bold">Get A Free Quote</button></a>
          </div>
          <div className='d-flex justify-content-start mt-3'>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <span className="icon-circle"><FaFacebookF /></span>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <span className="icon-circle"><FaInstagram /></span>
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <span className="icon-circle"><FaTwitter /></span>
  </a>
</div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
