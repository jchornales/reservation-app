'use client';

import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import PopUpMenu from '../PopUpMenu/PopUpMenu';
import useSetInnerWidth from '@/utils/services/useSetInnerWidth';
import usePopUpMenu from '@/utils/services/usePopUpMenu';
import TIMING from '@/utils/enums/TransitionEnums';
import CloseMenu from './CloseMenu';
import NavMenu from './NavMenu';
import HamburgerMenu from './HamburgerMenu';
import BrandLogo from './BrandLogo';

const { MAIN_DURATION, SUB_DELAY } = TIMING;

export default function NavigationBar() {
  const { isOpen, setIsOpen } = usePopUpMenu();
  const { width, setInnerWidth } = useSetInnerWidth();

  function handleWindowSizeChange() {
    setInnerWidth(window.innerWidth);
  }

  function handleMenuButtonClick() {
    setIsOpen();
  }

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 flex px-24 py-14 w-full z-10"
      initial={{ opacity: 0, transform: 'translateY(-100%)' }}
      animate={{ opacity: 1, transform: 'translateY(0%)' }}
      transition={{ delay: SUB_DELAY, duration: MAIN_DURATION }}
    >
      <div className="flex w-1/2 z-10">
        <button className="w-10 h-[40px] overflow-hidden" onClick={handleMenuButtonClick}>
          {isOpen ? <CloseMenu /> : <HamburgerMenu />}
        </button>
      </div>
      {!isOpen && <NavMenu width={width} />}
      <BrandLogo />
      <PopUpMenu />
    </motion.nav>
  );
}
