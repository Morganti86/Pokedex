import Link from "next/link";
import styles from "./Navigation.module.css";

const links = [
  {
    label: "POKEMON",
    route: "/",
  },
];

export function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ route }) => (
            <li key={route}>
              <Link href={route}>
                <img src="/title.webp" width="400" height="155" alt="title" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
