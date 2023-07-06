'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function PopUpMenu() {
  return (
    <motion.div
      className="fixed w-full h-full top-0 left-0 right-0 bg-secondary"
      initial={{ transform: 'translateX(-100%)' }}
      animate={{ transform: 'translateX(0)' }}
    ></motion.div>
  );
}
