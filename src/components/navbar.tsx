import Link from "next/link";
import { NextComponentType } from "next";
import LoginButton from "../components/login-btn";

export const Navbar: NextComponentType = () => (
  <header className="container flex items-center justify-between px-4">
    <img src="https://placekitten.com/60/60"></img>
    <nav className="">
      <ul className="flex items-center gap-4 font-bold transition-colors">
        <li>
          <Link href="/job-board">
            <a className="hover:text-cyan-600">
              Job Boards
            </a>
          </Link>
        </li>
        <li>
          <Link href="/job-board">
            <a className="hover:text-cyan-600">
              Help me hire
            </a>
          </Link>
        </li>
        <li>
          <Link href="/job-board">
            <a className="hover:text-cyan-600">
              Help me hire
            </a>
          </Link>
        </li>

        <li>
          <LoginButton />
        </li>
      </ul>
    </nav>
  </header>
);
