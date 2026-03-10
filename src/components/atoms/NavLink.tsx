import Link from 'next/link';
import { SubCategory } from '@/src/constants/categories';

interface NavLinkProps {
  info: SubCategory;
  categorySlug: string; // 부모 대분류 슬러그
}

export const NavLink = ({ info, categorySlug }: NavLinkProps) => {
  return (
    <Link
      href={`/products/${categorySlug}/${info.slug}`}
      className="transition-colors hover:text-[#ff3f33]"
    >
      {info.name}
    </Link>
  );
};
