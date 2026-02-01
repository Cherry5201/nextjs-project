import Link from "next/link";
import { Cat } from "lucide-react";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Cat className="text-orange-500" />
          <span className="text-xl font-bold text-orange-800">
            CatWorld
          </span>
        </Link>
        <div className="flex gap-6 text-sm font-medium text-orange-900/70">
          <Link href="/facts" className="hover:text-orange-600 transition-colors">Fun Facts</Link>
          <Link href="/breeds" className="hover:text-orange-600 transition-colors">Cat Breeds</Link>
        </div>
      </nav>
    </header>
  );
}