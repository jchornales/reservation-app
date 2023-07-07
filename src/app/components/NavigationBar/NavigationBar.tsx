'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import PopUpMenu from './PopUpMenu';
import useSetInnerWidth from '@/utils/services/useSetInnerWidth';
import usePopUpMenu from '@/utils/services/usePopUpMenu';
import TIMING from '@/utils/enums/TransitionEnums';

const { STAGGER_CHILDREN, MAIN_DURATION } = TIMING;

function HamburgerMenu() {
  const lines = [...Array(3).keys()];
  const button = {
    hidden: { transform: 'translateX(100%)' },
    show: {
      transform: 'translateX(0)',
      transition: {
        staggerChildren: STAGGER_CHILDREN,
      },
    },
  };

  const line = {
    hidden: { transform: 'translateX(100%)' },
    show: { transform: 'translateX(0%)' },
  };

  return (
    <motion.div variants={button} initial="hidden" animate="show">
      {lines.map((index) => (
        <motion.div
          key={index}
          className="w-full h-3 bg-primary my-2 translate-x"
          variants={line}
        />
      ))}
    </motion.div>
  );
}

function CloseMenu() {
  return (
    <div className="flex flex-col w-full h-full justify-center">
      <motion.div
        className="w-10 h-3 bg-primary"
        animate={{ transform: 'rotate(-45deg) translate(-2px,2px)' }}
        transition={{ duration: MAIN_DURATION }}
      />
      <motion.div
        className="w-10 h-3 bg-primary"
        animate={{ transform: 'rotate(45deg)' }}
        transition={{ duration: MAIN_DURATION }}
      />
    </div>
  );
}

function NavMenu(props: { width: number }) {
  return (
    <motion.div
      className="flex justify-end w-1/2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mx-2">
        {props.width >= 800 && (
          <Button
            className="px-7 bg-transparent border-2 border-accent text-accent-foreground"
            variant="outline"
            asChild
          >
            <Link href={'/'}>Check-in</Link>
          </Button>
        )}
      </div>
      <div className="mx-2">
        <Button className="px-7" asChild>
          <Link href={'/dashboard'}>Book now</Link>
        </Button>
      </div>
    </motion.div>
  );
}

export default function NavigationBar() {
  const [isOpen, setIsOpen] = usePopUpMenu((state) => [state.isOpen, state.setIsOpen]);
  const [width, setInnerWidth] = useSetInnerWidth((state) => [state.width, state.setInnerWidth]);

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
    <nav className="flex px-10 py-5 w-full">
      <div className="flex w-1/2 z-10">
        <button className="w-10 h-[40px] overflow-hidden" onClick={handleMenuButtonClick}>
          {isOpen ? <CloseMenu /> : <HamburgerMenu />}
        </button>
      </div>
      {isOpen ? 'logo' : <NavMenu width={width} />}
      <PopUpMenu />
    </nav>
  );
}
