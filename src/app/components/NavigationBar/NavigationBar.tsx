'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import PopUpMenu from './PopUpMenu';

function HamburgerMenu() {
  const lines = [...Array(3).keys()];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {lines.map((index) => (
        <div key={index} className="w-full h-3 bg-primary my-2"></div>
      ))}
    </motion.div>
  );
}

function CloseMenu() {
  return (
    <div className="flex flex-col w-full h-full justify-center">
      <motion.div
        className="w-10 h-3 bg-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transform: 'rotate(-45deg) translate(-2px,2px)' }}
      />
      <motion.div
        className="w-10 h-3 bg-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transform: 'rotate(45deg)' }}
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
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  function handleMenuButtonClick() {
    setIsOpen((current) => !current);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <nav className="flex px-10 py-5 w-full">
      <div className="flex w-1/2 z-10">
        <button className="w-10 h-[40px]" onClick={handleMenuButtonClick}>
          {isOpen ? <CloseMenu /> : <HamburgerMenu />}
        </button>
      </div>
      {isOpen ? 'logo' : <NavMenu width={width} />}
      {isOpen && <PopUpMenu />}
    </nav>
  );
}
