import Link from "next/link";
import { NextComponentType } from "next";

export const Navbar: NextComponentType = () => (
  <header className="container flex items-center justify-between px-4">
    <img src="https://placekitten.com/60/60"></img>
    <nav className="">
      <ul className="flex items-center gap-4 font-bold transition-colors">
        <li>
          <Link href="/job-board">
            <a className="hover:text-cyan-600">Job Board</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="hover:text-cyan-600">Blog</a>
          </Link>
        </li>
        <li>
          {/* TODO: Add github logo */}
          <Link href="https://github.com/effectivedeveloeprs">
            <a className="hover:text-cyan-600">GitHub</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
