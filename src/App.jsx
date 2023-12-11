import { useState, useRef, useEffect } from 'react'
import './App.css'
import splash from './assets/splash.png'
import Lenis from '@studio-freight/lenis'

import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion"

function App() {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const {scrollYProgress } = useScroll({
    target: ref,
    offset: ["1.4 1", "2 1"]
  });

  const y = useTransform(scrollYProgress, [0,1], [0, 500]);

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <>
      <motion.div class="heroContainer" ref={ref} style={{y}}>
        <motion.div className="hero" id="test"
          initial={{ opacity: 0.001 }}
          animate={{  opacity: 1 }}
          transition={{
            duration: .7,
            delay: 1 }}>
          <motion.img src={splash} className="splash" initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{
            duration: .7,
            delay: 1 }}/>
        </motion.div>
      </motion.div>
      <motion.div className="aboutContainer" style={{y}}>
            Hi
      </motion.div>
      <div className="spacer"/>
    </>
  )
}

export default App
