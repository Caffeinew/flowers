import { getPageSEO, getAboutCards } from "../lib/graphcms";
import Head from "next/head";
import Logo from "../components/logo";
import Footer from "../components/footer";

export default function About({ seo, cards }) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>
      <Logo />
      <div className="relative flex flex-col flex-grow w-full items-center">
        <h1 className="text-4xl text-gray-900 font-medium text-center mt-24 lg:mt-40">
          We Love Flowers <span className="block sm:inline">&#x26;</span> You
        </h1>
        <div className="w-full grid lg:grid-cols-2 place-items-center max-w-screen-xl p-4 sm:p-16 gap-y-6 sm:gap-16 my-4">
          {cards.map((item) => (
            <div
              className="relative rounded-xl border border-gray-300 py-8 px-4 sm:p-8 w-full h-full shadow-sm sm:max-h-48"
              key={item.id}
            >
              <h1 className="text-xl text-gray-700 font-medium mb-4">
                {item.title}
              </h1>
              <p className="text-gray-500 pl-2 sm:pl-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const seo = await getPageSEO("about");
  const cards = await getAboutCards();
  return {
    props: {
      seo,
      cards,
    },
  };
}
