// products.ts
export interface Product {
  name: string;
  description: string;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    name: 'Door Handle',
    description: 'High-quality stainless steel door handle suitable for all wooden doors.',
    imageUrl: 'https://www.aksharmetalsalloys.com/assets/images/products/01/01-a.jpg'
  },
  {
    name: 'Quality Bolts',
    description: 'Durable bolts with easy mechanism for all types.',
    imageUrl: 'https://irp-cdn.multiscreensite.com/ba11592e/dms3rep/multi/0f1d3730-4691-40c5-9a06-c3859d723102.jpg'
  },
  {
    name: 'Screws',
    description: 'Smooth, screws cabinet hinge with long-lasting mechanism.',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.eHLhRjOsWLNnO60cUw8yWwHaE8&pid=Api&P=0&h=180'
  },
  {
    name: 'Padlock',
    description: 'Heavy-duty padlock with rust-resistant coating and secure locking.',
    imageUrl: 'https://content.oppictures.com/Master_Images/Master_Variants/Variant_1500/178962.JPG'
  },
];
