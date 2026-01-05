import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {product.id % 2 === 0 && (
          <span className={styles.badge}>NEW PRODUCT</span>
        )}
        <img src={product.image} alt={product.title} />
        <span className={styles.heart}>♡</span>
      </div>

      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </article>
  );
}
