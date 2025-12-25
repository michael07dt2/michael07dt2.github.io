import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black flex translate-z-0 z-1000 flex-col justify-around items-center w-full h-full ring-1 py-4 ring-gray-alpha-400 px-6 sticky top-0">
      <nav className="navbar-module items-center flex relative w-full">
        <div className="flex gap-8 w-full items-center text-base">
          <div className="text-lg font-bold">
            <Link href="/">Home</Link>
          </div>
          <Link href="/#introduction" className="ml-8">
            Introduction
          </Link>
          <Link href="/#project">Project</Link>
          <Link href="/#skills">Skills</Link>
        </div>
        <div className="flex"></div>
      </nav>
    </header>
  );
}
