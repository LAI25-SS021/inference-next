"use client";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="fixed left-0 right-0 top-0 bg-slate-50 z-999">
      <nav className="flex flex-col items-center">
        <div className="text-2xl">RupaKoe</div>
        <ol className="flex space-x-4">
          <Link href="/About-Us" className="link">
            Tentang Kami
          </Link>
          <p>|</p>
          <Link href="/predict" className="link">
            Coba Sekarang
          </Link>
        </ol>
      </nav>
    </div>
  );
}
