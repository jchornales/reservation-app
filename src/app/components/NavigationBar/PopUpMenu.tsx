'use client';

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
    <motion.ul className="w-[400px]" initial="hidden" animate="show" variants={lists}>
      {menuList?.map((item) => (
        <motion.li
          className="my-4 w-full"
          key={item.label}
          variants={child}
          transition={{ duration: SUB_DURATION }}
        >
          <Link className="text-4xl text-primary font-Recoleta font-medium" href={item.url}>
            {item.label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function PopUpMenu() {
  const [isOpen] = usePopUpMenu((state) => [state.isOpen]);

  const leftNavList = [
    { label: 'Stay', url: '/placeholder' },
    { label: 'Eat & Drink', url: '/placeholder' },
    { label: 'Spa & Wellness', url: '/placeholder' },
    { label: 'Pools', url: '/placeholder' },
    { label: 'Location', url: '/placeholder' },
  ];
  const rightNavList = [
    { label: 'Meetings & Events', url: '/placeholder' },
    { label: 'Weddings', url: '/placeholder' },
    { label: "What's On", url: '/placeholder' },
    { label: 'Packages', url: '/placeholder' },
    { label: 'Gallery', url: '/placeholder' },
  ];
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 flex flex-col md:flex-row w-screen h-screen bg-secondary"
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={animationVariants}
      transition={{ duration: MAIN_DURATION }}
    >
      <div className="w-full lg:w-[35%] md:w-[50%] h-auto md:h-full pt-20">
        {isOpen && <MenuList menuList={leftNavList} delay={0} stagger={0.2} duration={1} />}
      </div>
      {isOpen && (
        <motion.div
          className="w-full lg:w-[65%] md:w-[50%] h-auto md:h-full lg:bg-popup-menu bg-secondary bg-no-repeat bg-cover"
          initial={{ opacity: 0, transform: 'scale(1.1)' }}
          animate={{ opacity: 1, transform: 'scale(1)' }}
          transition={{ delay: SUB_DELAY, duration: SUB_DURATION }}
        >
          <MenuList menuList={rightNavList} stagger={0.03} duration={SUB_DURATION} />
          <div className="absolute top-0 left-0 w-full h-full bg-secondary opacity-[65%] z-[-1]"></div>
        </motion.div>
      )}
    </motion.div>
  );
}
