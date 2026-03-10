export interface SubCategory {
  name: string;
  slug: string;
}

export interface Category {
  title: string;
  slug: string; // 대분류 슬러그 (예: clothing)
  items: SubCategory[];
}

// 1. 공통 카테고리 구조 (Women, Men 모두 동일하게 사용 가능)
export const COMMON_PRODUCT_CATEGORIES: Category[] = [
  {
    title: '의류',
    slug: 'clothing',
    items: [
      { name: '상의', slug: 'top' },
      { name: '바지', slug: 'pants' },
      { name: '원피스', slug: 'dress' },
      { name: '스커트', slug: 'skirt' },
      { name: '아우터', slug: 'outer' },
      { name: '언더웨어', slug: 'underwear' },
    ],
  },
  {
    title: '가방',
    slug: 'bags',
    items: [
      { name: '숄더백', slug: 'shoulder-bag' },
      { name: '토트백', slug: 'tote-bag' },
      { name: '백팩', slug: 'backpack' },
      { name: '크로스백', slug: 'crossbody' },
      { name: '클러치', slug: 'clutch' },
    ],
  },
  {
    title: '신발',
    slug: 'shoes',
    items: [
      { name: '스니커즈', slug: 'sneakers' },
      { name: '샌들', slug: 'sandals' },
      { name: '로퍼', slug: 'loafers' },
      { name: '부츠', slug: 'boots' },
    ],
  },
];

// 2. 상위 메뉴별 데이터 설정
export const MAIN_NAV_MENU = {
  NEW: {
    label: 'New',
    href: '/products?filter=new',
    // 신상 메뉴도 카테고리별로 보고 싶다면 공통 구조 재사용
    categories: COMMON_PRODUCT_CATEGORIES,
  },
  WOMEN: {
    label: 'Women',
    href: '/products/women',
    categories: COMMON_PRODUCT_CATEGORIES,
  },
  MEN: {
    label: 'Men',
    href: '/products/men',
    categories: COMMON_PRODUCT_CATEGORIES,
  },
  MAGAZINE: {
    label: 'Magazine',
    href: '/magazine',
    // 매거진은 상품과 카테고리가 다르므로 별도 정의
    categories: [
      {
        title: '컨텐츠',
        slug: 'editorial',
        items: [
          { name: '화보', slug: 'lookbook' },
          { name: '인터뷰', slug: 'interview' },
          { name: '뉴스', slug: 'news' },
        ],
      },
    ],
  },
};

export type NavMenuKey = keyof typeof MAIN_NAV_MENU;
