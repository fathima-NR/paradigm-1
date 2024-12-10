import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './mission.css'; // Import your custom CSS file
import mission1 from "/src/assets/service-image5.jpg"
function Mission() {
  const [visibleSection, setVisibleSection] = useState(null);

  const handleToggle = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  // Fade-in and slide-up animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 }, // Start with the element out of view (lower)
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Hook to trigger animations when in view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div>
      <div className='mx-5'>
        <motion.h1
          className='mt-5 mb-5'
          style={{ fontSize: '8vw' }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          Mission
        </motion.h1>
        <hr />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        className="row mx-5 d-flex align-items-center justify-content-center mt-5"
      >
        <div className="col-sm-6">
          <motion.img 
            className='img-fluid' 
            src= {mission1}
            alt="Service"
            initial="hidden"
          
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          />
        </div>
        <div className="col-sm-6 text-dark mt-5 ps-5">
          <div className="section">
            <h4 className="heading">
              Vision
              <button className="toggle-button" onClick={() => handleToggle('vision')}>
                {visibleSection === 'vision' ? '-' : '+'}
              </button>
            </h4>
            {visibleSection === 'vision' && (
              <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
               Our vision is to become a trusted leader in the consultancy industry, renowned for empowering clients with transformative solutions. We aim to be at the forefront of design innovation, offering sustainable, cost-effective, and aesthetically pleasing solutions that stand the test of time.
              </motion.p>
            )}
          </div>
          <div className="section">
            <h4 className="heading">
              Version
              <button className="toggle-button" onClick={() => handleToggle('version')}>
                {visibleSection === 'version' ? '-' : '+'}
              </button>
            </h4>
            {visibleSection === 'version' && (
              <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
                At Paradigm Engineering Consultancy, we are committed to delivering innovative and high-quality architectural and engineering solutions that meet the evolving needs of our clients. Our mission is to provide exceptional value through creativity, precision, and timely project execution, ensuring client satisfaction at every stage.
              </motion.p>
            )}
          </div>
          <div className="section">
            <h4 className="heading">
              Strategy
              <button className="toggle-button" onClick={() => handleToggle('strategy')}>
                {visibleSection === 'strategy' ? '-' : '+'}
              </button>
            </h4>
            {visibleSection === 'strategy' && (
              <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
              We strive to deeply understand our clients’ goals and challenges to deliver bespoke solutions that align with their needs. Our strategy is built on a foundation of collaboration, innovation, and efficiency, ensuring every project is completed with the highest standards of quality, within budget, and on time.
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Mission;
