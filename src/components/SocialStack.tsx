import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.44,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export function SocialStack() {
  return (
    <motion.div
      className="hidden md:flex flex-col gap-4 fixed top-4 right-4 z-50 text-gray-400 opacity-70 hover:opacity-100 transition-opacity"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* GitHub */}
      <motion.a
        href="https://github.com/sollazzo08"
        target="_blank"
        className="hover:text-white transition-colors"
        variants={item}
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.649.5.5 5.648.5 12c0 5.086 3.292 9.393 7.868 10.915.576.106.786-.25.786-.557 0-.275-.01-1.002-.015-1.968-3.2.695-3.877-1.543-3.877-1.543-.524-1.332-1.28-1.687-1.28-1.687-1.046-.716.079-.701.079-.701 1.157.081 1.765 1.188 1.765 1.188 1.029 1.763 2.699 1.253 3.355.959.104-.745.403-1.253.733-1.542-2.554-.291-5.238-1.277-5.238-5.683 0-1.255.453-2.281 1.193-3.085-.12-.292-.518-1.467.113-3.06 0 0 .974-.312 3.19 1.18a11.14 11.14 0 0 1 2.907-.391c.987.005 1.983.134 2.907.391 2.214-1.492 3.187-1.18 3.187-1.18.633 1.593.235 2.768.116 3.06.743.804 1.19 1.83 1.19 3.085 0 4.42-2.689 5.387-5.253 5.673.414.356.783 1.056.783 2.127 0 1.536-.014 2.777-.014 3.156 0 .31.208.67.793.556C20.21 21.39 23.5 17.082 23.5 12 23.5 5.648 18.352.5 12 .5z" />
        </svg>
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/msollazzo-cs/"
        target="_blank"
        className="hover:text-white transition-colors"
        variants={item}
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5C3.87 3.5 3 4.38 3 5.48s.87 1.98 1.98 1.98A1.98 1.98 0 0 0 6.96 5.48c0-1.1-.88-1.98-1.98-1.98zM3.5 8.75H6.5V21H3.5zM9 8.75h2.88v1.67h.04c.4-.76 1.38-1.56 2.84-1.56C18.3 8.86 19 11 19 14.04V21h-3v-6.08c0-1.45-.03-3.32-2.03-3.32-2.03 0-2.34 1.58-2.34 3.21V21H9z" />
        </svg>
      </motion.a>

      {/* Email */}
      <motion.a
        href="mailto:msollazzo08npm@gmail.com"
        className="hover:text-white transition-colors"
        variants={item}
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
        </svg>
      </motion.a>
    </motion.div>
  );
}
