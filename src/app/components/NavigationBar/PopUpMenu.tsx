'use client';

import { motion } from 'framer-motion';
import React from 'react';

const animationVariants = {
  open: { transform: 'translateX(0)' },
  closed: { transform: 'translateX(-100%)' },
};

export default function PopUpMenu(props: { isOpen: boolean }) {
  return (
    <motion.div
      className="fixed w-full h-full top-0 left-0 right-0 bg-secondary"
      initial={'closed'}
      animate={props.isOpen ? 'open' : 'closed'}
      variants={animationVariants}
      transition={{ duration: 0.6 }}
    ></motion.div>
  );
}
