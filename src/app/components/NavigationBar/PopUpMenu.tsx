'use client';

import { Separator } from '@/components/ui/separator';
import TIMING from '@/utils/enums/TransitionEnums';
import usePopUpMenu from '@/utils/services/usePopUpMenu';
import { motion } from 'framer-motion';
import React from 'react';

const animationVariants = {
  open: { transform: 'translateX(0)' },
  closed: { transform: 'translateX(-100%)' },
};

export default function PopUpMenu() {
  const [isOpen] = usePopUpMenu((state) => [state.isOpen]);
  const { SUB_DELAY, SUB_DURATION, MAIN_DURATION } = TIMING;
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 w-screen h-screen flex bg-secondary"
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={animationVariants}
      transition={{ duration: MAIN_DURATION }}
    >
      <div className="w-[65%] h-full"></div>
      {isOpen && (
        <motion.div
          className="w-[35%] h-full bg-popup-menu bg-no-repeat bg-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: SUB_DELAY, duration: SUB_DURATION }}
        >
          <div className="w-full h-full bg-secondary opacity-60"></div>
        </motion.div>
      )}
    </motion.div>
  );
}
