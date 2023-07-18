import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NavMenu(props: { width: number }) {
  return (
    <motion.div
      className="flex justify-end w-1/2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mx-4">
        {props.width >= 800 && (
          <Button
            className="px-7 bg-transparent border-[1px] border-accent-foreground hover:border-accent text-accent-foreground"
            variant="outline"
            asChild
          >
            <Link href={'/'}>Check-in</Link>
          </Button>
        )}
      </div>
      <div className="mx-4">
        <Button className="px-7" asChild>
          <Link href={'/dashboard'}>Book now</Link>
        </Button>
      </div>
    </motion.div>
  );
}
