import Link from 'next/link';
import { NavGroup } from '../molecules/NavGroup';
import { SubCategory } from '@/src/constants/categories';
import { CATEGORIES } from '@/src/constants/categories';

export const Header = () => {
  return (
    <header>
      <div className="flex-col border-b border-black/10 bg-[#e9ecef]">
        {/* 상위 nav */}
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
            <button type="button" className="cursor-pointer transition-colors hover:text-[#ff3f33]">
              Search
            </button>
            <button type="button" className="cursor-pointer transition-colors hover:text-[#ff3f33]">
              Login
            </button>
            <button type="button" className="cursor-pointer transition-colors hover:text-[#ff3f33]">
              Cart(0)
            </button>
          </div>
        </div>

        {/* 하위 nav */}
        <div className="border-b border-black/10 bg-[#e9ecef] px-30 py-6">
          <nav className="flex gap-10">
            {CATEGORIES.map((cat) => (
              <NavGroup category={cat} key={cat.slug} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
