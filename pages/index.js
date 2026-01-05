import Head from "next/head";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import ProductCard from "../components/ProductCard/ProductCard";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Discover Our Products | Appscrip</title>
        <meta
          name="description"
          content="Discover our curated collection of lifestyle products."
        />
      </Head>

      <Header />

      <main className={styles.container}>
        <section className={styles.hero}>
          <h1>Discover Our Products</h1>
          <p>
            Explore a curated selection of lifestyle products crafted for modern
            living.
          </p>
        </section>

        <section className={styles.plp}>
          <div className={styles.toolbar}>
            <span className={styles.items}>{products.length} ITEMS</span>
            <span className={styles.hide}>FILTER</span>
            <span className={styles.sort}>RECOMMENDED ▾</span>
          </div>

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

/* ✅ PRODUCTION-SAFE DATA FETCHING */
export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
    revalidate: 3600, // 1 hour
  };
}
