'use client';
import TIMING from '@/utils/enums/TransitionEnums';
import usePopUpMenu from '@/utils/services/usePopUpMenu';
import useSetInnerWidth from '@/utils/services/useSetInnerWidth';
import { motion } from 'framer-motion';
import React from 'react';
import LeftPopUpColumn from './LeftPopUpColumn';
import RightPopUpColumn from './RightPopUpColumn';

const animationVariants = {
  open: { transform: 'translateX(0)' },
  closed: { transform: 'translateX(-100%)' },
};

const { MAIN_DURATION } = TIMING;

export default function PopUpMenu() {
  const { isOpen } = usePopUpMenu();
  const { width } = useSetInnerWidth();
  const isMobile = width > 767 ? false : true;

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 flex flex-col md:flex-row w-screen h-screen bg-primary"
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={animationVariants}
      transition={{ duration: MAIN_DURATION }}
    >
      <LeftPopUpColumn isMobile={isMobile} />
      {isOpen && <RightPopUpColumn isMobile={isMobile} />}
    </motion.div>
  );
}
