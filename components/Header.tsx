import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  console.log("Route: ", router.pathname);
  console.log(router.pathname === "/start-transition/new-way");

  return (
    <header>
      <nav>
        <Link
          className={
            router.pathname === "/start-transition/new-way" ? "active" : ""
          }
          href="/start-transition/new-way"
        >
          Start Transition
        </Link>
        <Link
          className={
            router.pathname === "/start-transition/old-way" ? "active" : ""
          }
          href="/start-transition/old-way"
        >
          Start Transition Old Alternative
        </Link>
        <Link
          className={
            router.pathname === "/use-deferred-value/new-way" ? "active" : ""
          }
          href="/use-deferred-value/new-way"
        >
          Use Deferred Value
        </Link>
        <Link
          className={
            router.pathname === "/use-deferred-value/old-way" ? "active" : ""
          }
          href="/use-deferred-value/old-way"
        >
          Use Deferred Value Old Alternative
        </Link>
        <Link
          className={router.pathname === "/suspense/new-way" ? "active" : ""}
          href="/suspense/new-way"
        >
          Suspense
        </Link>
      </nav>
    </header>
  );
}
