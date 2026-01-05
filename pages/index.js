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
          content="Discover our curated collection of lifestyle products with filters and recommendations."
        />
      </Head>

      <Header />

      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <h1>Discover Our Products</h1>
          <p>
            Explore a curated selection of lifestyle products crafted for modern
            living.
          </p>
        </section>

        {/* PLP */}
        <section className={styles.plp}>
          {/* TOOLBAR */}
          <div className={styles.toolbar}>
            <span className={styles.items}>{products.length} ITEMS</span>
            <span className={styles.hide}>FILTER</span>
            <span className={styles.sort}>RECOMMENDED ▾</span>
          </div>

          {/* FILTER + GRID */}
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

export async function getStaticProps() {
  let products = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products");
    products = await res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
  }

  return {
    props: { products },
    revalidate: 60, // ISR (still valid for SEO & performance)
  };
}
