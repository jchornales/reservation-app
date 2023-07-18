import TIMING from '@/utils/enums/TransitionEnums';
import { motion } from 'framer-motion';

const { STAGGER_CHILDREN } = TIMING;

export default function HamburgerMenu() {
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
          className="w-full h-[2px] bg-primary my-1 translate-x"
          variants={line}
        />
      ))}
    </motion.div>
  );
}
