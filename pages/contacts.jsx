import { getPageSEO } from "../lib/graphcms";
import Head from "next/head";
import Logo from "../components/logo";
import Footer from "../components/footer";

export default function Contacts({ data }) {
  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
      </Head>
      <Logo />
      <div className="relative flex flex-grow mt-20"></div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await getPageSEO("contacts");
  return {
    props: {
      data,
    },
  };
}
