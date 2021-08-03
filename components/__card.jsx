import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper/core";
import { useState } from "react";
import CardDescription from "./cardDescription";

SwiperCore.use([Scrollbar]);

export default function Card({ item, showcase, setShowcase }) {
  const [desc, setDesc] = useState(false);
  const [initial, setInitial] = useState(-1);
  const y = useMotionValue(0);
  const translate = useTransform(y, [0, 50], ["0", "100%"]);

  function handleDrag(info) {
    console.log(info.point.y)
    if (initial === -1) {
      setInitial(info.point.y);
      return;
    }
    if (info.point.y - initial > 100) {
      setDesc(true);
      setInitial(-1);
    }
  }

  if (item.id === showcase) {
    return (
      <motion.div
        layout={true}
        className="relative w-full aspect-w-1 aspect-h-1 rounded-xl border border-gray-300 overflow-hidden shadow-sm row-span-2 col-span-2 bg-white"
      >
        <CardDescription
          item={item}
          desc={desc}
          setDesc={setDesc}
          translate={translate}
        />
        <motion.span
          className="absolute z-10 inset-x-0 top-0 w-12 h-12 p-2 mx-auto cursor-pointer text-gray-600"
          drag={"y"}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={{ bottom: 0.05 }}
          style={{ y }}
          onDrag={(_, info) => handleDrag(info)}
        >
          <ChevronDownIcon />
        </motion.span>
        <div className="absolute inset-0" onClick={() => setShowcase(null)}>
          <Swiper scrollbar className="w-full h-full rounded-xl">
            {item.image.map((image) => (
              <SwiperSlide key={image.id}>
                <Image
                  className="object-cover select-none"
                  src={"https://media.graphcms.com/" + image.handle}
                  layout="fill"
                  alt={item.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout={true}
      className="relative w-full aspect-w-1 aspect-h-1 rounded-xl border border-gray-300 overflow-hidden shadow-sm bg-white"
      onClick={() => setShowcase(item.id)}
    >
      <Image
        layout="fill"
        src={"https://media.graphcms.com/" + item.image[0].handle}
        alt={item.name}
        className="object-cover"
      />
    </motion.div>
  );
}
