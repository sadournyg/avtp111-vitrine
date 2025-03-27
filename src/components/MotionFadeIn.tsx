import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type MotionFadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const MotionFadeIn = ({
  children,
  className = "",
  delay = 0,
}: MotionFadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionFadeIn;
