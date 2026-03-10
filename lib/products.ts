export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  subCategory: string;
  description: string;
  images: string[];
  rating: number;
  reviewCount: number;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  tags: string[];
  isFeatured?: boolean;
  isBestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Floral Printed Kurti",
    price: 349,
    originalPrice: 799,
    discount: 56,
    category: "Women",
    subCategory: "Ethnic Wear",
    description:
      "Beautiful floral printed kurti crafted from soft rayon fabric. Perfect for festive occasions and casual wear. Features a round neck, three-quarter sleeves, and a flared hem that adds elegance to your look.",
    images: [
      "/placeholder-kurti.svg",
      "/placeholder-kurti.svg",
    ],
    rating: 4.2,
    reviewCount: 1243,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Pink", "Blue", "Green", "Yellow"],
    inStock: true,
    tags: ["kurti", "ethnic", "floral", "women"],
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: "2",
    name: "Embroidered Silk Saree",
    price: 899,
    originalPrice: 2499,
    discount: 64,
    category: "Women",
    subCategory: "Sarees",
    description:
      "Gorgeous embroidered silk saree with intricate threadwork and a rich zari border. Comes with a matching blouse piece. Ideal for weddings, ceremonies, and festive celebrations.",
    images: [
      "/placeholder-saree.svg",
      "/placeholder-saree.svg",
    ],
    rating: 4.5,
    reviewCount: 872,
    colors: ["Red", "Navy Blue", "Bottle Green", "Maroon"],
    inStock: true,
    tags: ["saree", "silk", "ethnic", "wedding"],
    isFeatured: true,
  },
  {
    id: "3",
    name: "Men's Slim Fit Shirt",
    price: 399,
    originalPrice: 999,
    discount: 60,
    category: "Men",
    subCategory: "Shirts",
    description:
      "Stylish slim-fit shirt made from premium cotton blend. Features a classic collar, full button placket, and long sleeves. Perfect for both formal and casual occasions.",
    images: [
      "/placeholder-shirt.svg",
      "/placeholder-shirt.svg",
    ],
    rating: 4.0,
    reviewCount: 654,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Black", "Lavender"],
    inStock: true,
    tags: ["shirt", "formal", "men", "cotton"],
    isBestseller: true,
  },
  {
    id: "4",
    name: "Kids Cartoon Print T-Shirt",
    price: 199,
    originalPrice: 499,
    discount: 60,
    category: "Kids",
    subCategory: "T-Shirts",
    description:
      "Fun and comfortable cartoon-print t-shirt for kids. Made from 100% soft cotton. Easy to wash and maintain. Available in bright, vibrant colors that kids love.",
    images: [
      "/placeholder-kids.svg",
      "/placeholder-kids.svg",
    ],
    rating: 4.3,
    reviewCount: 489,
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y"],
    colors: ["Red", "Blue", "Yellow", "Green"],
    inStock: true,
    tags: ["kids", "t-shirt", "cartoon", "cotton"],
  },
  {
    id: "5",
    name: "Handcrafted Jute Bag",
    price: 299,
    originalPrice: 699,
    discount: 57,
    category: "Home & Living",
    subCategory: "Bags & Accessories",
    description:
      "Eco-friendly handcrafted jute bag with embroidered design. Spacious enough for daily shopping needs. Comes with a sturdy handle and a zippered inner pocket.",
    images: [
      "/placeholder-bag.svg",
      "/placeholder-bag.svg",
    ],
    rating: 4.1,
    reviewCount: 327,
    colors: ["Natural Brown", "Beige"],
    inStock: true,
    tags: ["bag", "jute", "eco-friendly", "handcrafted"],
    isFeatured: true,
  },
  {
    id: "6",
    name: "Palazzo Pants Set",
    price: 449,
    originalPrice: 1099,
    discount: 59,
    category: "Women",
    subCategory: "Ethnic Wear",
    description:
      "Elegant 3-piece palazzo pants set including a short kurti, palazzo, and dupatta. Made from breathable georgette fabric. Perfect for festive occasions and casual outings.",
    images: [
      "/placeholder-kurti.svg",
      "/placeholder-kurti.svg",
    ],
    rating: 4.4,
    reviewCount: 981,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Peach", "Mint Green", "Lavender", "Sky Blue"],
    inStock: true,
    tags: ["palazzo", "ethnic", "set", "women"],
    isBestseller: true,
  },
  {
    id: "7",
    name: "Men's Track Pants",
    price: 299,
    originalPrice: 699,
    discount: 57,
    category: "Men",
    subCategory: "Activewear",
    description:
      "Comfortable track pants with an elastic waistband and drawstring for a perfect fit. Made from moisture-wicking fabric. Ideal for workouts, jogging, and casual wear.",
    images: [
      "/placeholder-shirt.svg",
      "/placeholder-shirt.svg",
    ],
    rating: 3.9,
    reviewCount: 412,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy Blue", "Grey"],
    inStock: true,
    tags: ["track pants", "activewear", "men", "sports"],
  },
  {
    id: "8",
    name: "Decorative Cushion Covers (Set of 5)",
    price: 349,
    originalPrice: 899,
    discount: 61,
    category: "Home & Living",
    subCategory: "Home Decor",
    description:
      "Beautiful set of 5 decorative cushion covers with traditional Indian embroidery. Fits standard 16×16 inch cushions. Adds a colorful, ethnic touch to your living space.",
    images: [
      "/placeholder-home.svg",
      "/placeholder-home.svg",
    ],
    rating: 4.3,
    reviewCount: 567,
    colors: ["Multicolor", "Blue Theme", "Red Theme"],
    inStock: true,
    tags: ["cushion", "home decor", "embroidery", "set"],
    isFeatured: true,
  },
  {
    id: "9",
    name: "Anarkali Suit",
    price: 599,
    originalPrice: 1499,
    discount: 60,
    category: "Women",
    subCategory: "Ethnic Wear",
    description:
      "Stunning Anarkali suit with intricate embroidery and flared silhouette. Includes a churidar and dupatta. Crafted from high-quality art silk. Perfect for weddings and festive wear.",
    images: [
      "/placeholder-kurti.svg",
      "/placeholder-kurti.svg",
    ],
    rating: 4.6,
    reviewCount: 1102,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Royal Blue", "Deep Red", "Emerald Green", "Purple"],
    inStock: true,
    tags: ["anarkali", "ethnic", "festive", "women"],
    isBestseller: true,
    isFeatured: true,
  },
  {
    id: "10",
    name: "Casual Polo T-Shirt",
    price: 249,
    originalPrice: 599,
    discount: 58,
    category: "Men",
    subCategory: "T-Shirts",
    description:
      "Classic polo t-shirt in breathable pique fabric. Features a two-button placket and ribbed collar. Great for casual outings, brunches, and everyday wear.",
    images: [
      "/placeholder-shirt.svg",
      "/placeholder-shirt.svg",
    ],
    rating: 4.1,
    reviewCount: 731,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Navy", "Olive", "Burgundy"],
    inStock: true,
    tags: ["polo", "t-shirt", "men", "casual"],
  },
  {
    id: "11",
    name: "Girls Frock Set",
    price: 249,
    originalPrice: 599,
    discount: 58,
    category: "Kids",
    subCategory: "Ethnic Wear",
    description:
      "Adorable frock set for girls with floral embroidery and a flared skirt. Made from soft net fabric over lining. Includes a matching headband. Perfect for birthday parties and celebrations.",
    images: [
      "/placeholder-kids.svg",
      "/placeholder-kids.svg",
    ],
    rating: 4.5,
    reviewCount: 389,
    sizes: ["1-2Y", "2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["Pink", "Purple", "Yellow"],
    inStock: true,
    tags: ["frock", "kids", "girls", "ethnic"],
  },
  {
    id: "12",
    name: "Artificial Jewellery Set",
    price: 199,
    originalPrice: 599,
    discount: 67,
    category: "Women",
    subCategory: "Jewellery",
    description:
      "Elegant 5-piece artificial jewellery set including necklace, earrings, maang tikka, bracelet, and ring. Gold-plated with kundan stones. Perfect complement to ethnic outfits.",
    images: [
      "/placeholder-jewellery.svg",
      "/placeholder-jewellery.svg",
    ],
    rating: 4.0,
    reviewCount: 892,
    colors: ["Gold", "Silver", "Rose Gold"],
    inStock: true,
    tags: ["jewellery", "artificial", "ethnic", "set"],
    isBestseller: true,
  },
];

export const categories = [
  { id: "women", name: "Women", icon: "👗", count: 5 },
  { id: "men", name: "Men", icon: "👔", count: 3 },
  { id: "kids", name: "Kids", icon: "🧒", count: 2 },
  { id: "home", name: "Home & Living", icon: "🏡", count: 2 },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getBestsellerProducts(): Product[] {
  return products.filter((p) => p.isBestseller);
}
