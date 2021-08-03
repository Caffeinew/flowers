import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ slides }) {
  return (
    <header className="max-w-screen-2xl mx-auto relative font-light w-full md:aspect-w-5 md:aspect-h-3 lg:aspect-h-2 2xl:aspect-h-1">
      <div className="md:absolute md:inset-0 lg:flex lg:p-4 2xl:px-8">
        <Swiper className="h-screen md:h-3/4 lg:h-full lg:w-8/12 lg:rounded-xl">
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="md:grid md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 cursor-move"
            >
              <h1 className="flex h-2/5 md:h-full md:col-span-2 lg:col-span-1 2xl:col-span-2 px-8 pt-8 items-center justify-center text-center text-4xl xl:text-5xl 2xl:text-6xl text-gray-700">
                {slide.title}
              </h1>
              <div className="relative h-3/5 md:h-full ">
                <Image
                  className="object-cover lg:rounded-xl"
                  layout="fill"
                  src={"https://media.graphcms.com/" + slide.image.handle}
                  alt={slide.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={
            "relative z-10 mx-4 -mt-4 bg-white shadow-sm rounded-xl border border-gray-300 grid text-2xl text-gray-700 grid-cols-2 grid-rows-3" +
            " sm:mx-8 sm:text-3xl" +
            " md:h-1/4 md:-mt-8 md:grid-cols-3 md:grid-rows-1" +
            " lg:w-3/12 lg:h-full lg:grid-cols-1 lg:grid-rows-3 lg:m-0" +
            " 2xl:grid-cols-2 2xl:grid-rows-3"
          }
        >
          <Link href="/contacts">
            <a className="hover:bg-gray-50 flex items-center justify-center w-full h-full row-span-2 lg:row-span-1 lg:border-b 2xl:row-span-2 2xl:border-0">
              Контакты
            </a>
          </Link>
          <Link href="/about">
            <a className="hover:bg-gray-50 flex items-center justify-center w-full h-full row-span-2 lg:row-span-1 border-l md:border-r lg:border-0 2xl:row-span-2 2xl:border-l">
              О нас
            </a>
          </Link>
          <Link href="/order">
            <a
              className={
                "hover:bg-gray-50 flex items-center justify-center w-full h-full col-span-2 border-t py-4 " +
                " sm:py-6" +
                " md:col-span-1 md:border-0" +
                " lg:py-0 lg:border-t" +
                " 2xl:col-span-2"
              }
            >
              Как заказать
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
