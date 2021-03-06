import {Input} from "../components/input";
import {Category} from "../components/category";
import {Grid} from "../components/grid";
import {Card} from "../components/card";
import {Header} from "../components/header";
import Logo from "../components/logo";
import Footer from "../components/footer";
import { getIndexProps } from "../lib/graphcms";
import { EmojiSadIcon } from "@heroicons/react/outline";
import { AnimateSharedLayout } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home({ data }) {
  const [filtered, setFiltered] = useState(data.items);
  const [open, setOpen] = useState(data.items[0].id);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [selectedVariants, setSelectedVariants] = useState([]);

  useEffect(() => {
    setFiltered(data.items.filter((item) => filterAll(item)));
  }, [search, price, selectedVariants]);

  function filterSearch(item) {
    if (item.name) {
      if (
        item.name.toLowerCase().includes(search) ||
        item.variant.name.toLowerCase().includes(search)
      ) {
        return true;
      }
    } else {
      if (item.variant.name.toLowerCase().includes(search)) {
        return true;
      }
    }
    return false;
  }

  function filterPrice(item) {
    if(!item.params[0].price && price) return false;

    let n = 0;
    item.params.forEach((param) => {
      if (param.price <= +price || price === "" ) n++;
    });

    if (n) {
      return true;
    }
    return false;
  }

  function filterCategory(item) {
    if (
      selectedVariants.includes(item.variant.name) ||
      !selectedVariants.length
    ) {
      return true;
    }

    return false;
  }

  function filterAll(item) {
    return filterSearch(item) && filterPrice(item) && filterCategory(item);
  }
  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
      </Head>
      <Logo />
      <Header slides={data.slides} />

      <Grid>
        <Input
          item={{ name: "????????", type: "price", placeholder: "0.00" }}
          state={price}
          setState={setPrice}
        />
        <Input
          item={{ name: "??????????", type: "search", placeholder: "????????" }}
          state={search}
          setState={setSearch}
        />
        <Category
          categories={data.categories}
          selected={selectedVariants}
          setSelected={setSelectedVariants}
        />
      </Grid>
      <AnimateSharedLayout>
        <div className="flex flex-grow w-full justify-center pb-32">
          {filtered.length ? (
            <Grid styles={"grid-cols-2"}>
              {filtered.map((item) => (
                <Card key={item.id} item={item} open={open} setOpen={setOpen} />
              ))}
            </Grid>
          ) : (
            <div className="flex place-items-center text-gray-500 sm:text-2xl py-16">
              <EmojiSadIcon className="w-10 sm:w-16 h-10 sm:h-16 mr-2" />
              <span>???????????? ???? ??????????????</span>
            </div>
          )}
        </div>
        <Footer />
      </AnimateSharedLayout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getIndexProps();
  return {
    props: {
      data,
    },
  };
}

