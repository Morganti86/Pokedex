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
                <img src="/title.png" width="350" height="100" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
