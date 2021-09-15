import { HeartIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import Image from "next/image";
export default function footer() {
  return (
    <motion.footer className="w-full" layout={true}>
      <div className="w-full bg-gray-100 flex justify-center">
        <div className="flex flex-col md:flex-row justify-center py-8 text-gray-500 text-xl font-light">
        <a href="mailto:store@wlf-36.ru">store@wlf-36.ru</a>
        <a href="tel:8900300252" className="md:mx-16">
          8 (900) 300 25-28
        </a>
        <h1>Улица куколкина, Дом 5</h1>
        </div>
      </div>
      <div className="w-full bg-black text-gray-200 py-4 pr-8 text-right">
        <a
          href="https://prizmarine.agency"
          className="inline-flex items-center text-lg"
          target="_blank"
          rel="noopener"
        >
          <span>With</span>
          <HeartIcon className="w-6 h-6 mx-1" />
          <span className="mr-2">from</span>
          <Image
            width={24}
            height={24}
            src="/prizmarine.svg"
            alt="prizmarine agency"
          />
        </a>
      </div>
    </motion.footer>
  );
}
