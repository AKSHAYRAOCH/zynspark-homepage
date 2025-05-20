"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Flip from 'gsap/Flip';
import Draggable from 'gsap/Draggable';
import styles from './style.module.css';

gsap.registerPlugin(Flip, Draggable);

const valueX = 120;
const valueY = 120;

const Animations = () => {
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const boxesRef = useRef([]);
  const componentRef = useRef(null);

  useEffect(() => {
    boxesRef.current = Array.from(
      container1Ref.current.querySelectorAll(`.${styles.box}`)
    );

    boxesRef.current.forEach((box) => {
      Draggable.create(box, {
        type: "x,y",
        bounds: `.${styles.grid}`, // restrict dragging within the grid area
        inertia: true,
        snap: {
          x: (value) => Math.round(value / valueX) * valueX,
          y: (value) => Math.round(value / valueY) * valueY,
        },
        onRelease: function () {
          const boxRect = this.target.getBoundingClientRect();
          const container1Rect = container1Ref.current.getBoundingClientRect();
          const container2Rect = container2Ref.current.getBoundingClientRect();

          const state = Flip.getState(this.target);

          // Check which container is closer to drop into
          const dropInContainer1 = boxRect.left < (container1Rect.left + container2Rect.width);
          const newContainer = dropInContainer1 ? container1Ref.current : container2Ref.current;

          newContainer.appendChild(this.target);

          gsap.set(this.target, { x: 0, y: 0 });

          Flip.from(state, {
            duration: 0.5,
            ease: "power1.inOut"
          });
        },
      });
    });

    const handleScroll = () => {
      const element = componentRef.current;
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        triggerAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

//   const triggerAnimation = () => {
//     const state = Flip.getState(`.${styles.box}`);
//     const newContainer =
//       boxesRef.current[0].parentNode === container1Ref.current
//         ? container2Ref.current
//         : container1Ref.current;

//     gsap.utils.shuffle(boxesRef.current).forEach((box) => {
//       newContainer.appendChild(box);
//     });

//     Flip.from(state, {
//       duration: 1,
//       ease: 'power1.inOut',
//       stagger: 0.2,
//       spin: true,
//     });
//   };
const triggerAnimation = () => {
    const state = Flip.getState(`.${styles.box}`);
    const newContainer =
      boxesRef.current[0].parentNode === container1Ref.current
        ? container2Ref.current
        : container1Ref.current;
  
    boxesRef.current.forEach((box) => {
      newContainer.appendChild(box);
    });
  
    // Randomize position using GSAP
    boxesRef.current.forEach((box) => {
      const randomX = Math.random() * (newContainer.clientWidth - 100);
      const randomY = Math.random() * (newContainer.clientHeight - 100);
  
      gsap.set(box, {
        position: "absolute",
        left: 0,
        top: 0,
        x: randomX,
        y: randomY,
      });
    });
  
    Flip.from(state, {
      duration: 1,
      ease: 'power1.inOut',
      stagger: 0.4,
      spin: true,
    });
  };
  
  return (
    <div ref={componentRef}>
      <div className={styles.grid}>
        <div
          className={`${styles.container} ${styles.container1}`}
          ref={container1Ref}
        >
          <div className={`${styles.box} ${styles.gradientBlue}`}> <p>This is a </p> </div>
          <div className={`${styles.box} ${styles.gradientBlue}`}> <p>Social-Media</p> </div>
          <div className={`${styles.box} ${styles.gradientBlue}`}> <p>Cyber Security</p> </div>
          <div className={`${styles.box} ${styles.gradientPink}`}> <p>SEO Services</p> </div>
          <div className={`${styles.box} ${styles.gradientPink}`}> <p>Web Development</p> </div>
          <div className={`${styles.box} ${styles.gradientPink}`}> <p>Ads Management</p> </div>
          <div className={`${styles.box} ${styles.gradientPink}`}> <p>Web Design</p> </div>
          <div className={`${styles.box} ${styles.gradientPink}`}> <p>Content Writing</p> </div>
          <div className={`${styles.box} ${styles.gradientPink}`}> <p>Pitch Deck</p> </div>
        </div>

        <div
          className={`${styles.container} ${styles.container2}`}
          ref={container2Ref}
        ></div>
      </div>
    </div>
  );
};

export default Animations;
