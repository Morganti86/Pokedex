import Link from "next/link";
import styles from "./Navigation.module.css";
import { Image } from "../../next.config";

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
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                <img src="/p.png" width="450" height="200" alt="title" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
