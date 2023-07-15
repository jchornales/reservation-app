'use client';
import React from 'react';
import { motion } from 'framer-motion';
import TIMING from '@/utils/enums/TransitionEnums';

const { MAIN_DURATION } = TIMING;

export default function HeroSection() {
  return (
    <motion.div
      className="text-center w-full h-full bg-popup-menu bg-cover pt-[80px]"
      initial={{ transform: 'scale(.5)' }}
      animate={{ transform: 'scale(1)' }}
      transition={{ duration: MAIN_DURATION }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: MAIN_DURATION, duration: MAIN_DURATION }}
      >
        <h1 className="text-5xl text-primary font-WoodlandBold">Casa Martini</h1>
        <p className="text-2xl text-primary font-WoodlandBold">Hotel & Resort</p>
      </motion.div>
    </motion.div>
  );
}
