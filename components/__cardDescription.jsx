import { motion } from "framer-motion";
import { XIcon } from "@heroicons/react/outline";

export default function CardDescription({ item, desc, setDesc, translate }) {
  return (
    <motion.div
      className="absolute rounded-xl p-8 inset-x-0 h-full bg-white z-20 -top-full"
      style={{
        translateY: desc ? "100%" : translate,
        transitionDuration: desc ? "0.4s" : 0,
      }}
    >
      <span
        className="absolute w-12 h-12 p-2 cursor-pointer text-gray-600 top-2 right-2"
        onClick={() => {
          setDesc(false);
        }}
      >
        <XIcon />
      </span>
      <span className="text-2xl">{item.name}</span>
    </motion.div>
  );
}
