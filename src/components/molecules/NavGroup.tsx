import Link from 'next/link';
import { NavLink } from '../atoms/NavLink';
import { Category } from '@/src/constants/categories';

export const NavGroup = ({ category }: { category: Category }) => {
  return (
    <div className="min-w-fit flex-1">
      <h3 className="mb-2 text-lg font-bold transition-colors hover:text-[#ff3f33]">
        <Link href={category.slug}>{category.title}</Link>
      </h3>
      <ul className="flex flex-col gap-1">
        {category.items.map((item) => (
          <li key={item.slug}>
            <NavLink info={item} categorySlug={category.slug} />
          </li>
        ))}
      </ul>
    </div>
  );
};
