/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export default function PaymentMethods() {
  return (
    <div className={`${styles.card} ${styles.cart__method}`}>
      <h2 className={styles.header}>Payment Methods</h2>
      <div className={styles.images}>
        <img src="../../../images/payment/visa.webp" alt="" />
        <img src="../../../images/payment/mastercard.webp" alt="" />
        <img src="../../../images/payment/paypal.webp" alt="" />
        <img src="https://www.seekpng.com/png/full/69-691715_mtn-mm-logo-generic-mtn-mobile-money-logo.png" alt="" />
        <img src="https://orange.africa-newsroom.com/files/large/6362488be0891aa" alt="" />
      </div>
      <h2 className={styles.header}>Buyer Protection</h2>
      <div className={styles.protection}>
        <img src="../../../images/protection.png" alt="" />
        Get full refund if the item is not as described or if it is not
        delievered.
      </div>
    </div>
  );
}
