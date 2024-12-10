// Whyus.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Whyus() {
  const { ref: headingRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <div className='mx-5'>
        <motion.h1
          ref={headingRef}
          className='mt-5 mb-5'
          style={{ fontSize: '8vw' }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          Why Us
        </motion.h1>
        <hr />
      </div>
      <div className="container mt-5">
        <div className="row g-3 mt-5">
          <motion.div
            className="col-sm-3 d-flex align-items-stretch"
            whileHover={{ borderColor: '#007bff', scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="border border-1 border-dark px-4 py-5"
              whileHover={{ borderColor: '#007bff' }}
              transition={{ duration: 0.3 }}
            >
              <h5 className='fw-bold pb-3'>On-Time Project Completion
             </h5>
              <p> At Paradigm Engineering Consultancy, we are dedicated to delivering projects on time, ensuring that every step is executed efficiently to meet deadlines.</p>
             
            </motion.div>
          </motion.div>
          <motion.div
            className="col-sm-3 d-flex align-items-stretch"
            whileHover={{ borderColor: '#007bff', scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="border border-1 border-dark px-4 py-5"
              whileHover={{ borderColor: '#007bff' }}
              transition={{ duration: 0.3 }}
            >
              <h5 className='fw-bold pb-3'>Exceptional Customer Service</h5>
              <p>We are committed to providing exceptional customer service, from initial consultation through implementation and beyond.</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="col-sm-3 d-flex align-items-stretch"
            whileHover={{ borderColor: '#007bff', scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="border border-1 border-dark px-4 py-5"
              whileHover={{ borderColor: '#007bff' }}
              transition={{ duration: 0.3 }}
            >
              <h5 className='fw-bold pb-3'>Quality Solutions for Every Budget</h5>
              <p>Our team of experienced engineers ensures quality and cost-effective solutions for all our clients.</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="col-sm-3 d-flex align-items-stretch"
            whileHover={{ borderColor: '#007bff', scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              className="border border-1 border-dark px-4 py-5"
              whileHover={{ borderColor: '#007bff' }}
              transition={{ duration: 0.3 }}
            >
              <h5 className='fw-bold pb-3'>Innovative Engineering Practices
             </h5>
              <p> By leveraging cutting-edge technology and advanced engineering practices, we ensure that our solutions are both modern and effective, setting industry standards for excellence.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
