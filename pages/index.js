import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import ProductCard from "../components/ProductCard/ProductCard";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

export default function Home({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts || []);

  // ✅ CLIENT-SIDE FALLBACK (ALWAYS WORKS)
  useEffect(() => {
    if (products.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("Client fetch failed", err));
    }
  }, []);

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

/* ✅ SAFE STATIC FETCH (NO JSON CRASH) */
export async function getStaticProps() {
  let initialProducts = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const text = await res.text(); // 👈 IMPORTANT

    if (text.startsWith("[")) {
      initialProducts = JSON.parse(text);
    }
  } catch (e) {
    console.error("Build fetch failed:", e);
  }

  return {
    props: { initialProducts },
    revalidate: 3600,
  };
}
