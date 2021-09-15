import { motion } from "framer-motion";
import { XIcon } from "@heroicons/react/outline";
import { linear } from "../lib/transitions";

export default function CardDescription({ item, setDescription }) {
  return (
    <motion.div
      className="absolute rounded-xl inset-x-0 h-full bg-white z-20"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={linear}
    >
      <div className="px-4 py-2 xl:py-4 sm:px-6 flex items-center justify-between">
        <span className="sm:text-lg xl:text-xl leading-6 font-medium text-gray-900 flex items-center">
          {item.variant.category.name}&nbsp;|&nbsp;{item.variant.name}
        </span>
        <motion.span
          className="w-10 h-10 p-2 cursor-pointer text-gray-500 top-2 right-2"
          onClick={() => setDescription(false)}
          whileTap={{ scale: 0.9 }}
        >
          <XIcon />
        </motion.span>
      </div>
      <div className="border-t border-gray-200">
        <span className="block px-3 py-2 lg:p-4 text-xl text-gray-700">
          {item.name}
        </span>
        <Params params={item.params} />
      </div>
    </motion.div>
  );
}

export function Params({ params }) {
  if (!params[0].price) {
    return (
      <div className="py-3 px-6 text-sm md:text-md lg:text-lg">
        <span className="font-medium text-gray-500">{params[0].size}</span>
      </div>
    );
  }
  return params.map((param, index) => (
    <div
      className={
        "grid grid-cols-3 sm:grid-cols-2 py-3 px-6 text-sm md:text-md lg:text-lg " +
        (index % 2 === 0 ? "bg-white" : "bg-gray-50")
      }
      key={param.id}
    >
      <span className="font-medium text-gray-500 col-span-2 sm:col-span-1">
        {param.size}
      </span>
      <span className="text-gray-900 justify-self-center sm:justify-self-start">
        {param.price} &#8381;
      </span>
    </div>
  ));
}
