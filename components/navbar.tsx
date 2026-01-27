import Link from "next/link";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/80 backdrop-blur-md dark:border-pink-900/30 dark:bg-black/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          YourName
        </span>
        <div className="flex gap-4 text-sm">
          <Link href="#projects" className="hover:text-pink-500 transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-pink-500 transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
}