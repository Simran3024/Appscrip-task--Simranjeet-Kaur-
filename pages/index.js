import Head from "next/head";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Discover Our Products</title>
        <meta
          name="description"
          content="Discover our curated collection of lifestyle products."
        />
      </Head>

      <Header />

      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </section>

        {/* PLP */}
        <section className={styles.plp}>
          {/* TOOLBAR */}
          <div className={styles.toolbar}>
            <span className={styles.items}>3425 ITEMS</span>
            <span className={styles.hide}>FILTER</span>
            <span className={styles.sort}>RECOMMENDED ▾</span>
          </div>

          {/* 🔴 IMPORTANT: FILTER + GRID MUST BE IN SAME ROW */}
          <div className={styles.plpRow}>
            <Filter />

            <div className={styles.grid}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* SSR */
export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
  };
}
