import { motion } from "framer-motion";

export function RaspberryBadge() {
  return (
    <motion.div
      className="hidden md:block fixed bottom-4 right-4 z-50 text-[12px] text-gray-400 opacity-70 hover:opacity-100 transition-opacity pointer-events-none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
    >
      Self Hosted on Raspberry Pi
    </motion.div>
  );
}
