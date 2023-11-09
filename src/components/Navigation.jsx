import Link from "next/link";
import styles from "./Navigation.module.css";
import Image from "next/image";

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
                <Image
                  src="/title.webp"
                  width="400"
                  height="155"
                  alt={`${label} title image`}
                  priority={true}
                  placeholder="empty"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
