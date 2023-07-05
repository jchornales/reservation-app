'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function HamburgerMenu() {
  const lines = [...Array(3).keys()];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {lines.map(() => (
        <div className="w-full h-3 bg-primary my-2"></div>
      ))}
    </motion.div>
  );
}

function CloseMenu() {
  return (
    <span className="flex flex-col w-full h-full justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transform: 'rotate(-45deg) translate(-2px,2px)' }}
      >
        <div className="w-10 h-3 bg-primary"></div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transform: 'rotate(45deg)' }}>
        <div className="w-10 h-3 bg-primary"></div>
      </motion.div>
    </span>
  );
}

function NavMenu(props: { width: number }) {
  return (
    <>
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
    </>
  );
}

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  function handleMenuButtonClick() {
    setIsOpen((current) => !current);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <nav className="flex px-10 py-5 w-full">
      <div className="flex w-1/2">
        <button className="w-10" onClick={handleMenuButtonClick}>
          {isOpen ? <HamburgerMenu /> : <CloseMenu />}
        </button>
      </div>
      <div className="flex justify-end w-1/2">
        <NavMenu width={width} />
      </div>
    </nav>
  );
}
