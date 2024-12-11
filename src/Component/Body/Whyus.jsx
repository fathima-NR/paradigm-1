import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './whyus.css';

function Whyus() {
  const { ref: headingRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const hoverEffects = {
    whileHover: { scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <div className="whyus-container">
      <div className=" mx-5">
        <motion.h1
          ref={headingRef}
          className="whyus-heading mt-5 mb-5"
          style={{ fontSize: '7vw'}}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          Why Us
        </motion.h1>
        <div className="divider"></div>
      </div>
      <div className="container mt-5">
        <div className="row g-4">
          {[
            {
              title: "On-Time Project Completion",
              description: " we are dedicated to delivering projects on time, ensuring that every step is executed efficiently to meet deadlines",
            },
            {
              title: "Exceptional Customer Service",
              description: "We are committed to providing exceptional customer service, from initial consultation through implementation and beyond.",
            },
            {
              title: "Quality Solutions for Every Budget",
              description: "Our experienced engineers deliver quality and cost-effective solutions tailored to your needs.",
            },
            {
              title: "Innovative Engineering Practices",
              description: "We use advanced technology and practices to deliver modern, effective solutions, setting high industry standards",
            },
          ].map((item, index) => (
            <motion.div
              className="col-md-6 col-lg-3"
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 * index }}
            >
              <motion.div
                className="card text-center border-0 shadow-sm py-4"
                style={{ borderRadius: "15px", background: "#f8f9fa" }}
                {...hoverEffects}
              >
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">{item.title}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whyus;
