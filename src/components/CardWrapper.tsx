import React, { useEffect } from 'react';
import f1 from '../assets/images/f1.png';
import f2 from '../assets/images/f2.png';
import f3 from '../assets/images/f3.png';
import f4 from '../assets/images/f4.png';
import Card from './Card';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from 'framer-motion';

const CardWrapper = () => {
  const images = [f1, f2, f3, f4];

  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPos = -width / 2 - 8;

    const controls = animate(xTranslation, [0, finalPos], {
      ease: 'linear',
      duration: 20,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <motion.div
      className="flex justify-center items-cente gap-4"
      ref={ref}
      style={{ x: xTranslation }}
    >
      {[...images, ...images].map((pic, index) => (
        <Card image={pic} key={index} />
      ))}
    </motion.div>
  );
};

export default CardWrapper;
