import { motion } from "framer-motion";

type MotionFadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const MotionFadeIn = ({
  children,
  className = "",
  delay = 0,
}: MotionFadeInProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default MotionFadeIn;
