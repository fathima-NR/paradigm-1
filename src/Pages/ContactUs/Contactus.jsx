import React, { useEffect, useRef } from 'react';
import './Contactus.css'; // Ensure this path matches where your CSS file is located
import { MdOutlineArrowOutward } from "react-icons/md";
function ContactUs() {
  // Refs for the elements
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add(target.dataset.animationClass);
          console.log(`Observed element ${target} with animation class ${target.dataset.animationClass}`); // Debugging line
        }
      });
    }, {
      threshold: 0.5 // Adjust this value to your preference
    });

    // Observe the elements
    if (headingRef.current && paragraphRef.current && formRef.current) {
      headingRef.current.dataset.animationClass = 'animate-heading1';
      paragraphRef.current.dataset.animationClass = 'animate-paragraph';
      formRef.current.dataset.animationClass = 'animate-form';

      observer.observe(headingRef.current);
      observer.observe(paragraphRef.current);
      observer.observe(formRef.current);
    }

    return () => {
      if (headingRef.current && paragraphRef.current && formRef.current) {
        observer.unobserve(headingRef.current);
        observer.unobserve(paragraphRef.current);
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter1" style={{ '--i': index }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="row d-flex justify-content-center align-items-center mb-5 mt-5">
      <div className="col-sm-6">
        <h1
          ref={headingRef}
          className='heading1 fw-bold ms-5'
        >
          {splitText("Let's Talk" )} <MdOutlineArrowOutward/> 
        </h1>
        <div className='ms-5 mt-5'>
          <h2
            ref={paragraphRef}
            className='fw-normal fs-4'
          >
            Got a project on your mind? Let's discuss about the details.
          </h2>
        </div>
        <div className='text-start mt-5 ms-5 fw-normal mb-3'>
          <h4 className='fw-normal fs-5'>PARADIGM Engineering Consultant LLC,Office #806,Saheel Tower 1, Al Nahda 1, Dubai,UAE</h4>
          <h4 className='fw-normal fs-5'>+971 45850899</h4>
          <h4 className='fw-normal fs-5'>admin@PARAD-ec.com</h4>
        </div>
      </div>
      <div className="col-sm-6">
        <form
          ref={formRef}
          className="footer-form"
        >
          <input type="text" placeholder="Name" className="footer-input mx-5 mb-4 mt-3" required />
          <input type="tel" className="footer-input mx-5 mb-4 mt-2" id="phone" placeholder="Enter phone number" name="phone" required />
          <input type="email" className="footer-input mx-5 mb-4 mt-2" id="email" placeholder="Enter email" name="email" required />
          <textarea className="footer-input mx-5 mb-4 mt-2" id="message" placeholder="Enter message" name="message" required></textarea>
          <button type="submit" className="footer-button ms-5 mb-4 w-50 d-flex align-items-center justify-content-center p-2 mt-3">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
