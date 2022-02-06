import Head from 'next/head'
import Banner from '../components/Banner'
export default function Home({categories}) {
  console.log(categories)
  return (
    <div>
      <Head>
        <title>Delivery de Pedidos a domicilio en minutos | Rappi Argentina</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <Banner />
      </main>
    </div>
  )
}

export async function getServerSideProps(){
  const categories = await fetch('http://www.assets.corraditobias.com.ar/categories.json')
    .then(res => res.json())
    .catch(e => console.log('Categories api error: ', e))

  return {
      props: {
        categories
      }
  }
}
