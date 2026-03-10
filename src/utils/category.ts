import { CATEGORIES } from '../constants/categories';

export const getCategoryNameBySlug = (slug: string) => {
  return CATEGORIES.find((cat) => cat.slug === slug)?.title || slug;
};
