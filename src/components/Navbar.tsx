import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

type NavigationProps = {
  id: number;
  title: string;
  path: string;
}

const navigation: NavigationProps[] = [
    { id: 1, title: "Main", path: "/" },
    { id: 2, title: "About", path: "/" },
    { id: 3, title: "The Meal of the Day", path: "/" },
    { id: 4, title: "Categories", path: "/categories" },
    { id: 5, title: "Contacts", path: "/contacts" },
  ];

export default function Navbar() {
  const { pathname } = useRouter();
  return (
    <nav>
      <div>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
