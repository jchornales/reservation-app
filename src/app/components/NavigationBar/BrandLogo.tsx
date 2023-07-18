import TIMING from '@/utils/enums/TransitionEnums';
import usePopUpMenu from '@/utils/services/usePopUpMenu';
import { motion } from 'framer-motion';

const { MAIN_DURATION, LOGO_DELAY } = TIMING;

const animationVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: LOGO_DELAY, duration: MAIN_DURATION } },
  move: { opacity: 1, right: 300, transition: { delay: 0.3, duration: 0.4 } },
};

export default function BrandLogo() {
  const { isOpen } = usePopUpMenu();
  return (
    <motion.div
      className="fixed w-[400px] top-24 right-1/2 translate-x-1/2 text-center z-10"
      initial="hidden"
      animate={isOpen ? 'move' : 'show'}
      variants={animationVariant}
    >
      <span className={`${isOpen ? 'text-secondary' : 'text-primary'} delay-300`}>
        <h1 className="text-5xl font-WoodlandBold">Casa Martini</h1>
        <p className="text-2xl font-WoodlandBold">Hotel & Resort</p>
      </span>
    </motion.div>
  );
}
