export interface Product {
  id: number;
  productCode: string;
  title: string;
  price: number;
  created: Date;
  tags?: string;
  vendor: string;
  category: string;
}
