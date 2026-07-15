"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-8 text-sm font-medium text-muted-custom">
      <li>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-semibold text-white underline underline-offset-4 decoration-2"
              : "text-zinc-400 hover:text-zinc-200"
          }
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "font-semibold text-white underline underline-offset-4 decoration-2"
              : "text-zinc-400 hover:text-zinc-200"
          }
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          className={
            pathname === "/projects"
              ? "font-semibold text-white underline underline-offset-4 decoration-2"
              : "text-zinc-400 hover:text-zinc-200"
          }
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={
            pathname === "/contact"
              ? "font-semibold text-white underline underline-offset-4 decoration-2"
              : "text-zinc-400 hover:text-zinc-200"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
