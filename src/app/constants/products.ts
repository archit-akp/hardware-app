// products.ts
export interface Product {
  name: string;
  description: string;
  imageUrl: string;
  route: string; 
}

export const PRODUCTS: Product[] = [
  {
    name: 'Bolts',
    description: 'Durable bolts with easy mechanism for all types.',
    imageUrl: 'https://www.coastwatersports.co.uk/images/products/Holt_Hex_Head_Bolts.jpg',
     route: '/bolts'
  },
  {
    name: 'Nuts',
    description: 'Durable bolts with easy mechanism for all types.',
    imageUrl: 'https://p.turbosquid.com/ts-thumb/PN/vU9uYg/Ja/thumbnail/jpg/1611843264/1920x1080/fit_q87/16205b785b5f03692a449fd77de2ae176e722716/thumbnail.jpg',
     route: '/nuts'
  },
  {
    name: 'Washers',
    description: 'Durable bolts with easy mechanism for all types.',
    imageUrl: 'https://th.bing.com/th/id/OIP.zVKIA4c0Mz_g8ia4rj6KRAHaFy?r=0&rs=1&pid=ImgDetMain',
     route: '/washers'
  },
];
