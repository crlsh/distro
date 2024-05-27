

export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
export  interface OrderItem {
    product: Product;
    quantity: number;
    discount: number;
  }
