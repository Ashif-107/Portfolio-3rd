'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { color, motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    title: "Daily2Min",
    src: "d2m.png",
    color: "#000000",
    type: "Journaling application"
  },
  {
    title: "MotherLight",
    src: "ml.png",
    color: "#8C8C8C",
    type: "2D Platformer Game"
  },
  {
    title: "AshKrypt",
    src: "ak.png",
    color: "#706D63",
    type: "Web3 Dapp"
  },
  {
    title: "AshlaNote",
    src: "ashlanote.png",
    color: "#000000",
    type: "Node based Note app"
  },
  {
    title: "Iphone Clone",
    src: "ip.png",
    color: "#EFE8D3",
    type: "Animated clone web"
  },
  {
    title: "SpaceBot Rampage",
    src: "spacebot.png",
    color: "#A5AAB6",
    type: "Top Down Shooter Rougelike"
  },

]

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Home() {

  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  //for the text slider animation
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xpercent = 0;
  let direction = -1;
  const sliderRef = useRef(null);

  useEffect(() => {
    //text animation
    requestAnimationFrame(textAnimation);


    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
  }, [])

  const textAnimation = () => {
    if (xpercent <= -100) {
      xpercent = 0;
    }
    if (xpercent > 0) {
      xpercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xpercent })
    gsap.set(secondText.current, { xPercent: xpercent })
    xpercent += 0.15 * direction;
    requestAnimationFrame(textAnimation);
  }

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  return (
    <main onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} className={styles.projects}>
      <div className={styles.slidercontainer}>
        <div className={styles.slider} ref={sliderRef}>
          <p ref={firstText}>Featured Projects -</p>
          <p ref={secondText}>Featured Projects -</p>
        </div>
      </div>
      <div className={styles.body}>
        {
          projects.map((project, index) => {
            return <Project index={index} title={project.title} manageModal={manageModal} type={project.type} key={index} />
          })
        }
      </div>
      <Rounded>
        <p>More work</p>
      </Rounded>
      <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
          <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
            {
              projects.map((project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                  <Image
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
              })
            }
          </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
      </>
    </main>
  )
}
