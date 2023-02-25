import Ad from "./Ad";
import Main from "./Main";
import styles from "./styles.module.scss";
import Top from "./Top";
export default function Header({ country, searchHandler, session }) {
  return (
    <header className={styles.header}>
      {/* <Ad /> */}
      <Top country={country} />
      <Main
        session={session}
        searchHandler={searchHandler}
      />
    </header>
  );
}
