import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP */}
        <div className={styles.top}>
          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettä muse.</p>
            <div className={styles.subscribe}>
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          {/* Contact */}
          <div className={styles.contact}>
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>

            <h4>CURRENCY</h4>
            <p>🇺🇸 USD</p>
            <small>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>

        <div className={styles.divider} />

        {/* BOTTOM */}
        <div className={styles.bottom}>
          {/* Column 1 */}
          <div>
            <h3>mettä muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3>QUICK LINKS</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3>FOLLOW US</h3>

            <div className={styles.socials}>
              {/* Instagram */}
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <circle cx="17" cy="7" r="1" />
              </svg>

              {/* Facebook */}
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M13 8h2V6h-2c-2 0-3 1-3 3v2H8v2h2v5h2v-5h2l1-2h-3V9c0-.7.3-1 1-1z" />
              </svg>
            </div>

            <h3 className={styles.accepts}>mettä muse ACCEPTS</h3>
            <div className={styles.payments}>
              <span className={styles.card}>VISA</span>
              <span className={styles.card}>MC</span>
              <span className={styles.card}>AMEX</span>
              <span className={styles.card}>PAY</span>
              <span className={styles.card}>GPay</span>
            </div>
          </div>
        </div>

        <p className={styles.copy}>
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
