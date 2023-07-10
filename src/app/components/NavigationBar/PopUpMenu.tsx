'use client';

import { RIGHTLIST, LEFTLIST } from '@/utils/constants/NavList';
import TIMING from '@/utils/enums/TransitionEnums';
import { NavMenuLists } from '@/utils/models/NavMenuList';
import usePopUpMenu from '@/utils/services/usePopUpMenu';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const animationVariants = {
  open: { transform: 'translateX(0)' },
  closed: { transform: 'translateX(-100%)' },
};

const { SUB_DELAY, SUB_DURATION, MAIN_DURATION } = TIMING;

function MenuList({ menuList, delay, stagger, duration }: NavMenuLists) {
  const lists = {
    hidden: {
      transform: 'translateY(100%)',
      opacity: 0,
    },
    show: {
      transform: 'translateY(0%)',
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
        when: 'beforeChildren',
        staggerChildren: stagger,
      },
    },
  };
  const child = {
    hidden: { opacity: 0, transform: 'translateY(100%)' },
    show: { opacity: 1, transform: 'translateY(0%)' },
  };

  return (
    <motion.ul className="w-[300px]" initial="hidden" animate="show" variants={lists}>
      {menuList?.map((item) => (
        <motion.li
          className="my-4 w-full"
          key={item.label}
          variants={child}
          transition={{ duration: SUB_DURATION }}
        >
          <Link
            className="text-4xl text-secondary hover:text-secondary-foreground duration-300 font-Recoleta font-medium"
            href={item.url}
          >
            <span className="absolute top-0 -left-7 inline-flex w-4 text-sm font-DMSans font-semibold">
              {item.id}
            </span>
            <span>{item.label}</span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function PopUpMenu() {
  const [isOpen] = usePopUpMenu((state) => [state.isOpen]);
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 flex flex-col md:flex-row w-screen h-screen bg-primary"
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={animationVariants}
      transition={{ duration: MAIN_DURATION }}
    >
      <div className="flex flex-col justify-center items-end w-full lg:w-[35%] md:w-[50%] h-auto md:h-full pt-20">
        {isOpen && <MenuList menuList={LEFTLIST} delay={0} stagger={0.2} duration={1} />}
        <motion.div className="min-h-[200px]  w-[300px]"></motion.div>
      </div>
      {isOpen && (
        <motion.div
          className="flex flex-col justify-center items-start w-full pt-20 lg:px-[100px] lg:w-[65%] md:w-[50%] h-auto md:h-full lg:bg-popup-menu bg-secondary bg-no-repeat bg-cover"
          initial={{ opacity: 0, transform: 'scale(1.1)' }}
          animate={{ opacity: 1, transform: 'scale(1)' }}
          transition={{ delay: SUB_DELAY, duration: SUB_DURATION }}
        >
          <MenuList menuList={RIGHTLIST} stagger={0.03} duration={SUB_DURATION} />
          <motion.div className="min-h-[200px] w-[300px]"></motion.div>
          <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-[70%] z-[-1]"></div>
        </motion.div>
      )}
    </motion.div>
  );
}
