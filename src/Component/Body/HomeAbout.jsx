import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './homeabout.css'; // Ensure the CSS file is correctly imported
import aboutimg1 from "/src/assets/medium-shot-architect-engineer-looking-plans.jpg"
function HomeAbout() {
  // States to track visibility
  const [isVisible, setIsVisible] = useState({
    image: false,
    heading: false,
    paragraph: false,
    progress: false,
  });

  // Refs for the elements
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const progressRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.dataset.type]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
    });

    // Observe the elements
    if (imageRef.current) observer.observe(imageRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    progressRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      progressRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div>
      <div className="row d-flex justify-content-center mx-5">
        <motion.div
          ref={imageRef}
          data-type="image"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible.image ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="col-sm-5 d-flex justify-content-center align-items-center"
        >
          <img className='img-fluid img1' src={aboutimg1} alt="" />
        </motion.div>

        <motion.div
          ref={headingRef}
          data-type="heading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible.heading ? 0 : 20, opacity: isVisible.heading ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="col-sm-7 d-flex flex-column justify-content-center align-items-center"
        >
          <h5 className='mb-1 mt-3'>Creating the Future</h5>
          <h3 className='mb-3 fs-2 fw-bold'>Every Business Deserves Top-Notch Solutions</h3>
          <p className='text-start mb-3 '>{`PARADIGM is a boutique consultancy offering cutting-edge services in architecture, structural design, interior design, and project management. With a focus on holistic solutions, it blends aesthetics and functionality, ensuring fast-track project delivery and exceeding client expectations.`}</p>

          <div className="w-100 mb-2">
            <div className='d-flex justify-content-between'>
              <h6 className='mb-2'>Productivity</h6>
              <h6>80%</h6>
            </div>
            <motion.div
              ref={progressRefs[0]}
              data-type="progress"
              initial={{ width: 0 }}
              animate={{ width: isVisible.progress ? '80%' : 0 }}
              transition={{ duration: 1 }}
              className="progress custom-progress-bar mb-3"
            >
              <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
            </motion.div>
          </div>

          <div className="w-100 mb-2">
            <div className='d-flex justify-content-between'>
              <h6 className='mb-2'>Reliable</h6>
              <h6>95%</h6>
            </div>
            <motion.div
              ref={progressRefs[1]}
              data-type="progress"
              initial={{ width: 0 }}
              animate={{ width: isVisible.progress ? '95%' : 0 }}
              transition={{ duration: 1 }}
              className="progress custom-progress-bar mb-3"
            >
              <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
            </motion.div>
          </div>

          <div className="w-100 mb-2">
            <div className='d-flex justify-content-between'>
              <h6 className='mb-2'>Efficiency</h6>
              <h6>90%</h6>
            </div>
            <motion.div
              ref={progressRefs[2]}
              data-type="progress"
              initial={{ width: 0 }}
              animate={{ width: isVisible.progress ? '90%' : 0 }}
              transition={{ duration: 1 }}
              className="progress custom-progress-bar mb-3"
            >
              <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeAbout;
