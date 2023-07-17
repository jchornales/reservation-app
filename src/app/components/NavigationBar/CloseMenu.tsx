import TIMING from '@/utils/enums/TransitionEnums';
import { motion } from 'framer-motion';

const { MAIN_DURATION } = TIMING;

export default function CloseMenu() {
  return (
    <div className="flex flex-col w-full h-full justify-center">
      <motion.div
        className="w-10 h-[2px] bg-secondary"
        animate={{ transform: 'rotate(-45deg) translate(-2px,2px)' }}
        transition={{ duration: MAIN_DURATION }}
      />
      <motion.div
        className="w-10 h-[2px] bg-secondary"
        animate={{ transform: 'rotate(45deg)' }}
        transition={{ duration: MAIN_DURATION }}
      />
    </div>
  );
}
