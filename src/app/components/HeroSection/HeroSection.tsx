'use client';
import React from 'react';
import { motion } from 'framer-motion';
import TIMING from '@/utils/enums/TransitionEnums';

const { MAIN_DURATION } = TIMING;

export default function HeroSection() {
  return (
    <motion.div
      className="text-center w-full h-screen bg-popup-menu bg-cover pt-[80px]"
      initial={{ transform: 'scale(.5)' }}
      animate={{ transform: 'scale(1)' }}
      transition={{ duration: MAIN_DURATION }}
    ></motion.div>
  );
}
