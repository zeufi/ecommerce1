import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="">Fashions</Link>
        </li>
        <li>
          <Link href="">Accessories</Link>
        </li>
        <li>
          <Link href="">Men</Link>
        </li>
        <li>
          <Link href="">Women</Link>
        </li>
        <li>
          <Link href="">Kids</Link>
        </li>
      </ul>
    </div>
  );
}
