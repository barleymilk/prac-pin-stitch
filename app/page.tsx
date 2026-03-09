import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#151515]">
      <header>
        <div className="flex border-b border-black/10 bg-[#e9ecef]">
          <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-6 md:px-10">
            <Link href="/" className="font-serif text-2xl tracking-[0.16em] uppercase">
              PIN STITCH
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-10 text-sm tracking-[0.08em] md:flex"
            >
              <Link href="#" className="transition-colors hover:text-[#ff3f33]">
                New
              </Link>
              <Link href="#" className="transition-colors hover:text-[#ff3f33]">
                Women
              </Link>
              <Link href="#" className="transition-colors hover:text-[#ff3f33]">
                Men
              </Link>
              <Link href="#" className="transition-colors hover:text-[#ff3f33]">
                Magazine
              </Link>
              <Link href="#" className="transition-colors hover:text-[#ff3f33]">
                Live
              </Link>
            </nav>

            <div className="flex items-center gap-4 text-xs tracking-[0.08em] uppercase md:text-sm">
              <button
                type="button"
                className="cursor-pointer transition-colors hover:text-[#ff3f33]"
              >
                Search
              </button>
              <button
                type="button"
                className="cursor-pointer transition-colors hover:text-[#ff3f33]"
              >
                Login
              </button>
              <button
                type="button"
                className="cursor-pointer transition-colors hover:text-[#ff3f33]"
              >
                Cart(0)11
              </button>
            </div>
          </div>
        </div>

        <div className="flex border-b border-black/10 bg-[#e9ecef] px-8 py-6">
          <nav className="flex gap-10">
            <div>
              <h3 className="text-lg font-bold">의류</h3>
              <ul>
                <li>
                  <Link href="#" className="transition-colors hover:text-[#ff3f33]">
                    상의
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-[#ff3f33]">
                    바지
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-[#ff3f33]">
                    원피스
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-[#ff3f33]">
                    스커트
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-[#ff3f33]">
                    아우터
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-[#ff3f33]">
                    언더웨어
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}
