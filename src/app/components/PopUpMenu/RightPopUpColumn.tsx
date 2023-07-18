import React from 'react';
import { MenuList } from './MenuList';
import { RIGHTLIST } from '@/utils/constants/NavList';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TIMING from '@/utils/enums/TransitionEnums';

const { SUB_DELAY, SUB_DURATION } = TIMING;

export default function RightPopUpColumn(props: { isMobile: boolean }) {
  const { isMobile } = props;
  return (
    <motion.div
      className="flex flex-col justify-center items-center lg:items-start  w-full md:pt-20 lg:pl-20 lg:w-[65%] md:w-[50%] h-full lg:bg-popup-menu bg-primary bg-no-repeat bg-cover"
      initial={{ opacity: 0, transform: 'scale(1.1)' }}
      animate={{ opacity: 1, transform: 'scale(1)' }}
      transition={{ delay: SUB_DELAY, duration: SUB_DURATION }}
    >
      {!isMobile && <MenuList menuList={RIGHTLIST} stagger={0.03} duration={SUB_DURATION} />}
      <motion.div className="md:h-[200px]  w-[250px] lg:w-[300px] xl:w-[370px] text-secondary pt-10 pb-20 md:pb-0 md:pt-20">
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
  );
}
