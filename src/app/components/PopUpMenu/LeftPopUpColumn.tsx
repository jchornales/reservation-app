import React from 'react';
import { MenuList } from './MenuList';
import { LEFTLIST, RIGHTLIST } from '@/utils/constants/NavList';
import TIMING from '@/utils/enums/TransitionEnums';
import usePopUpMenu from '@/utils/services/usePopUpMenu';
import { motion } from 'framer-motion';
import Link from 'next/link';

const { SUB_DELAY, MAIN_DURATION } = TIMING;

export default function LeftPopUpColumn(props: { isMobile: boolean }) {
  const { isMobile } = props;
  const { isOpen } = usePopUpMenu();
  return (
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
            className="md:h-[200px]  w-[250px] lg:w-[300px] xl:w-[370px] text-secondary pt-24 md:pt-20"
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
  );
}
