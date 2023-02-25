/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect} from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Main() {
  const { data: session } = useSession();
  const router = useRouter();
  const [query, setQuery] = useState(router.query.search || "");
  const { cart } = useSelector((state) => ({ ...state }));
  const handleSearch = (e) => {
    e.preventDefault();
    if (router.pathname !== "/browse") {
      if (query.length > 1) {
        router.push(`/browse?search=${query}`);
      }
    } else {
      searchHandler(query);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link legacyBehavior href="/">
          <a className={styles.logo}>
            <img src="../../../logo.png" alt="" />
          </a>
        </Link>
        <form onSubmit={(e) => handleSearch(e)} className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={styles.search__icon}>
            <RiSearch2Line />
          </button>
        </form>
        <Link legacyBehavior href="/cart">
          <a className={styles.cart}>
            <FaOpencart />
            {session ? (
              <span>{cart.cartItems.length}</span>
              ) : (
              <span>0</span>
              )} 
          </a>
        </Link>
      </div>
    </div>
  );
}
