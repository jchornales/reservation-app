'use client';

import { RIGHTLIST, LEFTLIST } from '@/utils/constants/NavList';
import TIMING from '@/utils/enums/TransitionEnums';
import { NavMenuLists } from '@/utils/models/NavMenuList';
import usePopUpMenu from '@/utils/services/usePopUpMenu';
import useSetInnerWidth from '@/utils/services/useSetInnerWidth';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const animationVariants = {
  open: { transform: 'translateX(0)' },
  closed: { transform: 'translateX(-100%)' },
};

const { SUB_DELAY, SUB_DURATION, MAIN_DURATION } = TIMING;

function MenuList({ menuList, delay, stagger, duration, isMobile }: NavMenuLists) {
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
        staggerChildren: isMobile ? 0.05 : stagger,
      },
    },
  };
  const child = {
    hidden: { opacity: 0, transform: 'translateY(100%)' },
    show: { opacity: 1, transform: 'translateY(0%)' },
  };

  return (
    <motion.ul
      className="w-[250px] lg:w-[300px] xl:w-[350px]"
      initial="hidden"
      animate="show"
      variants={lists}
    >
      {menuList?.map((item) => (
        <motion.li
          className="mt-4 w-full"
          key={item.label}
          variants={child}
          transition={{ duration: SUB_DURATION }}
        >
          <Link
            className="h-full text-2xl lg:text-3xl xl:text-4xl text-secondary hover:text-secondary-foreground duration-300 font-Recoleta font-medium"
            href={item.url}
          >
            <div className="inline-flex w-4 h-full mr-2">
              <p className="-translate-y-3 text-sm font-DMSans font-semibold">{item.id}</p>
            </div>
            <span>{item.label}</span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function PopUpMenu() {
  const [isOpen] = usePopUpMenu((state) => [state.isOpen]);
  const [width] = useSetInnerWidth((state) => [state.width]);
  const isMobile = width > 767 ? false : true;

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 flex flex-col md:flex-row w-screen h-screen bg-primary"
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={animationVariants}
      transition={{ duration: MAIN_DURATION }}
    >
      <div className="flex flex-col justify-center items-center md:items-center lg:items-end w-full h lg:w-[35%] md:w-[50%] h-full md:h-full pt-20 lg:pr-[5%]">
        {isOpen && (
          <>
            <MenuList
              menuList={LEFTLIST}
              delay={0}
              stagger={0.2}
              duration={MAIN_DURATION}
              isMobile={isMobile}
            />

            {isMobile && (
              <MenuList menuList={RIGHTLIST} delay={0.2} stagger={0.05} duration={MAIN_DURATION} />
            )}
            <motion.div
              className="md:h-[200px]  w-[250px] lg:w-[300px] xl:w-[350px] text-secondary pt-24 md:pt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: SUB_DELAY, duration: MAIN_DURATION }}
            >
              <p className="text-[13px] tracking-widest	font-bold">Find us</p>
              <p className="mt-2 mb-4">
                Purok 4, Azelea Street Lot A29, La Paz, Magalang, Pampanga, Philippines 2011
              </p>
              <Link
                className="hover:text-secondary-foreground underline underline-offset-8	ease-in-out duration-300	"
                href="/directions"
                rel="noopener noreferrer"
                target="_blank"
              >
                Get Directions
              </Link>
            </motion.div>
          </>
        )}
      </div>
      {isOpen && (
        <motion.div
          className="flex flex-col justify-center items-center lg:items-start  w-full md:pt-20 lg:pl-20 lg:w-[65%] md:w-[50%] h-full lg:bg-popup-menu bg-primary bg-no-repeat bg-cover"
          initial={{ opacity: 0, transform: 'scale(1.1)' }}
          animate={{ opacity: 1, transform: 'scale(1)' }}
          transition={{ delay: SUB_DELAY, duration: SUB_DURATION }}
        >
          {!isMobile && <MenuList menuList={RIGHTLIST} stagger={0.03} duration={SUB_DURATION} />}
          <motion.div className="md:h-[200px]  w-[250px] lg:w-[300px] xl:w-[350px] text-secondary pt-10 pb-20 md:pb-0 md:pt-20">
            <p className="text-[13px] tracking-widest	font-bold">Contact us</p>
            <p className="mt-2">(+63) 935-1233-013 / (+63) 222-3950-210</p>
            <p className="mb-4">randomemail@gmail.com</p>
            <Link
              className="hover:text-secondary-foreground underline underline-offset-8	ease-in-out duration-300	"
              href="/directions"
              rel="noopener noreferrer"
              target="_blank"
            >
              FAQs
            </Link>
          </motion.div>
          {!isMobile && (
            <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-[70%] z-[-1] pointer-events-none"></div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
