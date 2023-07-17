import TIMING from '@/utils/enums/TransitionEnums';
import { NavMenuLists } from '@/utils/models/NavMenuList';
import { motion } from 'framer-motion';
import Link from 'next/link';

const { SUB_DURATION } = TIMING;

export function MenuList({ menuList, delay, stagger, duration, isMobile }: NavMenuLists) {
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
      className="w-[250px] lg:w-[300px] xl:w-[370px]"
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
            className="h-full text-2xl lg:text-3xl xl:text-4xl text-secondary hover:text-secondary-foreground duration-300 font-WoodlandBold font-medium"
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
