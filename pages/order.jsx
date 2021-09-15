import { YMaps, Map, Placemark } from "react-yandex-maps";
import Head from "next/head";
import { getPageSEO } from "../lib/graphcms";
import Logo from "../components/logo";
import Footer from "../components/footer";

export default function Order({ seo }) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>
      <Logo />
      <div className="w-full relative flex h-screen lg:h-auto lg:flex-grow mt-20 mb-12">
        <div className="absolute inset-0 max-w-screen-xl mx-auto grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 gap-x-8 xs:p-8 sm:p-16">
          <div className="w-full h-full rounded-xl overflow-hidden lg:col-span-2 border border-gray-300 shadow-sm">
            <YMaps>
              <Map
                className="w-full h-full"
                defaultState={{
                  center: [51.66, 39.2],
                  zoom: 13,
                }}
              >
                <Placemark geometry={[51.66223036356028, 39.19536017793562]} />
              </Map>
            </YMaps>
          </div>
          <div className="relative mx-2 xs:-mx-4 -mt-10 lg:mt-0 bg-white p-8 rounded-xl border border-gray-300 shadow-sm text-gray-700">
            <h1 className="text-3xl font-medium">Контакты</h1>
            <div className="p-4 text-lg">
              <h1>Улица куколкина, Дом 5</h1>
              <a href="tel:89525472518" className="underline block">
                8 (952) 547 25-18
              </a>
              <a href="tel:2779375" className="underline block">
                277 93-75
              </a>
            </div>
            <p className="text-gray-500 px-4">
              Заказ товаров для доставки осуществляется по номеру телефона или
              напрямую по адресу выше.
            </p>
            <h1 className="p-4 text-lg">Время работы: 8:30 - 18:00</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const seo = await getPageSEO("order");
  return {
    props: {
      seo,
    },
  };
}
