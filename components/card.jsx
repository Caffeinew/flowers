import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

import Image from "next/image";
import {
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper/core";
import { useState, memo } from "react";
import {CardDescription} from "./cardDescription";

SwiperCore.use([Scrollbar]);

function Component({ item, open, setOpen }) {
  const [description, setDescription] = useState(false);
  
  if (!item.image[0]) {
    return <></>;
  }
  if (item.id === open) {
    return (
      <motion.div
        layout={true}
        className="relative w-full aspect-w-1 aspect-h-1 rounded-xl border border-gray-300 overflow-hidden shadow-sm row-span-2 col-span-2 bg-white"
      >
        <motion.span
          className="absolute z-10 inset-x-0 top-0 w-12 h-12 p-2 mx-auto cursor-pointer text-gray-500"
          onClick={() => setDescription(true)}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDownIcon />
        </motion.span>
        <AnimatePresence>
          {description && (
            <CardDescription item={item} setDescription={setDescription} />
          )}
        </AnimatePresence>
        <div
          className="absolute inset-0"
          onClick={() => {
            setOpen(null);
            setDescription(false);
          }}
        >
          {item.image.length > 1 ? (
            <Swiper
              scrollbar
              className="relative w-full h-full rounded-xl cursor-move"
            >
              {item.image.map((image) => (
                <SwiperSlide key={image.id} className="relative">
                  <Image
                    className="object-cover select-none"
                    src={"https://media.graphcms.com/" + image.handle}
                    layout="fill"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 z-20 shadow-inner" />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Image
              layout="fill"
              src={"https://media.graphcms.com/" + item.image[0].handle}
              alt={item.name}
              className="object-cover"
            />
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout={true}
      className="relative w-full aspect-w-1 aspect-h-1 rounded-xl border border-gray-300 overflow-hidden shadow-sm bg-white cursor-pointer"
      onClick={() => {
        setOpen(item.id);
        setDescription(false);
      }}
    >
      <Image
        layout="fill"
        src={"https://media.graphcms.com/" + item.image[0].handle}
        alt={item.name}
        className="object-cover"
      />
      <div className="absolute inset-0 z-20 shadow-inner" />
    </motion.div>
  );
}

export const Card = memo(Component)
