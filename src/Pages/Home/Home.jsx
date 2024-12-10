import React from 'react';
import HomeAbout from '/src/Component/Body/HomeAbout.jsx';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbCircleNumber5Filled, TbCircleNumber6Filled } from "react-icons/tb";
import People from '/src/Component/Body/People';
import Logo from '/src/Component/Body/Logo';
import Whyus from '/src/Component/Body/Whyus';
import ContactUs from '/src/Pages/ContactUs/Contactus.jsx';
import Mission from '/src/Component/Body/Mission';
import './Home.css';
function Home() {
  // Use `useInView` to animate the heading when it is in view
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  });

  // Define variants for the service items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Define hook for service items
  const useServiceItemInView = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
    return { ref, inView };
  };

  const { ref: itemRef1, inView: itemInView1 } = useServiceItemInView();
  const { ref: itemRef2, inView: itemInView2 } = useServiceItemInView();
  const { ref: itemRef3, inView: itemInView3 } = useServiceItemInView();
  const { ref: itemRef4, inView: itemInView4 } = useServiceItemInView();
  const { ref: itemRef5, inView: itemInView5 } = useServiceItemInView();
  const { ref: itemRef6, inView: itemInView6 } = useServiceItemInView();

  return (
    <div className='extra'>
        <div >
            <div className='d-flex flex-column align-items-center justify-content-center mb-5 mt-5' >
            <h1 style={{fontSize:"5vw"}}>PARADIGM ENGINEERING CONSULTANT</h1>
            <h3 className='mt-2'>--We Devicate to Create</h3></div>
            <div className="d-flex flex-column align-items-center justify-content-center">
            <img className="img-fluid mb-5 pb-5 px-3" src="/src/assets/building-with-modern-design.jpg" alt="" />
        </div></div>
      <div className='mt-5'>
        <HomeAbout />
      </div>
      <div className='mx-5'>
        <motion.h1
          ref={headingRef}
          className='ms-5 mt-5  mb-5'
          style={{ fontSize: '8vw' }}
          initial={{ opacity: 0, y: 50 }} // Initial state: hidden and moved down
          animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : 50 }} // Animate to full opacity and move up
          transition={{ duration: 0.6 }}
        >
          Services
        </motion.h1>
        <hr />
      </div>
      <div className="row mt-5 mx-4 fw-bold pb-5">
        <motion.div
          ref={itemRef1}
          className="col-sm-6 fs-2 p-2"
          initial="hidden"
          animate={itemInView1 ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TbCircleNumber1Filled /> Architecture

        </motion.div>
        <motion.div
          ref={itemRef2}
          className="col-sm-6 fs-2 p-2"
          initial="hidden"
          animate={itemInView2 ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TbCircleNumber2Filled />  Landscape

        </motion.div>
        <motion.div
          ref={itemRef3}
          className="col-sm-6 fs-2 p-2"
          initial="hidden"
          animate={itemInView3 ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <TbCircleNumber3Filled /> 
 Structural Engineering

        </motion.div>
        <motion.div
          ref={itemRef4}
          className="col-sm-6 fs-2 p-2"
          initial="hidden"
          animate={itemInView4 ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <TbCircleNumber4Filled /> Interior Architecture


        </motion.div>
        <motion.div
          ref={itemRef5}
          className="col-sm-6 fs-2 p-2"
          initial="hidden"
          animate={itemInView5 ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <TbCircleNumber5Filled /> Mechanical Engineering
         
        </motion.div>
        <motion.div
          ref={itemRef6}
          className="col-sm-6 fs-2 p-2"
          initial="hidden"
          animate={itemInView6 ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <TbCircleNumber6Filled />  Project Management
        </motion.div>
      </div>
      <div style={{marginTop:"100px"}}>
        <Whyus/>
      </div>
      <div style={{marginTop:"130px"}}>
        <Mission/>
      </div>
      <div style={{marginTop:"100px"}}>
          <Logo/>
      </div>

      <div className='mt-5 mb-5'>
        <People/>
      </div>
      
      <div className='mt-5'>
        <ContactUs/>
      </div>
    
    </div>
  );
}

export default Home;
