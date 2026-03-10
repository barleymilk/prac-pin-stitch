export interface SubCategory {
  name: string;
  slug: string;
}

export interface Category {
  title: string;
  slug: string;
  items: SubCategory[];
}

export const CATEGORIES: Category[] = [
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
      { name: '에코/캔버스백', slug: 'eco-canvas-bag' },
      { name: '백팩', slug: 'backpack' },
      { name: '크로스백', slug: 'crossbody' },
      { name: '캐리어/여행가방', slug: 'travel-bag' },
      { name: '보스턴백', slug: 'boston-bag' },
      { name: '웨이스트백', slug: 'waist-bag' },
      { name: '클러치', slug: 'clutch' },
      { name: '기타가방', slug: 'other-bag' },
      { name: '가방 액세서리', slug: 'bag-accessory' },
    ],
  },
  {
    title: '신발',
    slug: 'shoes',
    items: [
      { name: '스니커즈', slug: 'sneakers' },
      { name: '샌들', slug: 'sandals' },
      { name: '플랫 슈즈', slug: 'flats' },
      { name: '로퍼', slug: 'loafers' },
      { name: '힐/펌프스', slug: 'heels-pumps' },
      { name: '슬리퍼', slug: 'slippers' },
      { name: '부츠', slug: 'boots' },
      { name: '신발 액세서리', slug: 'shoe-accessory' },
    ],
  },
  {
    title: '액세서리',
    slug: 'accessories',
    items: [
      { name: '모자', slug: 'hat' },
      { name: '벨트', slug: 'belt' },
      { name: '양말', slug: 'socks' },
      { name: '시계', slug: 'watch' },
      { name: '헤어 액세서리', slug: 'hair-accessory' },
      { name: '아이웨어', slug: 'eyewear' },
      { name: '지갑/카드케이스', slug: 'wallet-cardcase' },
      { name: '스카프/카라', slug: 'scarf-collar' },
      { name: '넥타이', slug: 'necktie' },
      { name: '머플러', slug: 'muffler' },
      { name: '장갑', slug: 'gloves' },
    ],
  },
  {
    title: '주얼리',
    slug: 'jewelry',
    items: [
      { name: '귀걸이', slug: 'earrings' },
      { name: '목걸이', slug: 'necklace' },
      { name: '팔찌', slug: 'bracelet' },
      { name: '반지', slug: 'ring' },
      { name: '발찌', slug: 'anklet' },
      { name: '브로치/펜던트', slug: 'brooch-pendant' },
    ],
  },
];
