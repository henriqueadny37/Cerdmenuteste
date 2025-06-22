import Link from "next/link";

export function Header() {
  return (
    <header className="flex px-2 py-4 text-green-500 bg-purple-950">
      <div className="flex items-center justify-between w-full mx-auto w-max-7xl">
        <div className="flex flex-col">
          Maná Poke
          <span className="text-orange-500 text-sm">Food</span>
        </div>
        <nav>
          <ul className="flex items-center justify-center gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/Lista">Lista</Link>
            </li>

            <li>
              <Link href="/Dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
