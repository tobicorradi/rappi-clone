import Head from "next/head";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";
import CategoryCard from "../components/CategoryCard";
import Section from "../components/Section";
import Image from "next/image";
export default function Home({ categories }) {
  return (
    <div>
      <Head>
        <title>
          Delivery de Pedidos a domicilio en minutos | Rappi Argentina
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <Banner />
        <Section
          backgroundColor={"bg-slate-50"}
          border={"border-b border-slate-250"}
          container={false}
        >
          <div className="pl-10">
            <SectionTitle className="mb-8" text={"Categorías"} />
            <div className="pl-5 md:pl-0 flex space-x-2 overflow-scroll scrollbar-hide">
              {categories.map((category) => (
                <CategoryCard name={category.name} img={category.img} />
              ))}
            </div>
          </div>
        </Section>
        <Section backgroundColor={"bg-white"} container={false}>
          <div className="pl-10">
            <SectionTitle className="mb-8" text={"¡Las mejores promos!"} />
            <div className="pl-5 flex space-x-2 overflow-scroll scrollbar-hide">
              {categories.map((category) => (
                <div className="relative w-[375px] h-[172px] shrink-0">
                  <Image
                    className="rounded-lg"
                    layout="fill"
                    src="https://images.rappi.com.ar/mobile_promotions/store_12265_1638888910410.png?e=webp&d=1920x1"
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const categories = await fetch(
    "http://www.assets.corraditobias.com.ar/categories.json"
  )
    .then((res) => res.json())
    .catch((e) => console.log("Categories api error: ", e));

  return {
    props: {
      categories,
    },
  };
}
