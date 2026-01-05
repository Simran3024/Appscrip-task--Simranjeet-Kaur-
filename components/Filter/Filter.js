import styles from "./Filter.module.css";

export default function Filter() {
  return (
    <aside className={styles.filter}>
      <h2>Filters</h2>

      <div className={styles.block}>
        <label>
          <input type="checkbox" /> Customizable
        </label>
      </div>

      {[
        "Ideal For",
        "Occasion",
        "Work",
        "Fabric",
        "Segment",
        "Suitable For",
        "Raw Materials",
        "Pattern",
      ].map((item) => (
        <div key={item} className={styles.block}>
          <div className={styles.title}>
            <h3>{item}</h3>
            <span>▾</span>
          </div>
          <p>All</p>
        </div>
      ))}
    </aside>
  );
}
