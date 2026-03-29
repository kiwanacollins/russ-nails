export type CheckoutMethod = "site" | "whatsapp";

export type OrderStatus = "pending" | "placed" | "paid" | "whatsapp_inquiry";

export interface Service {
  slug: string;
  name: string;
  duration: string;
  priceFrom: number;
  description: string;
}

export interface GalleryShot {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  alt: string;
}

export interface Testimonial {
  name: string;
  quote: string;
}

export interface ProductImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  category: string;
  featured: boolean;
  images: ProductImage[];
}

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image?: ProductImage;
}

export interface OrderCustomer {
  fullName: string;
  phone: string;
  email?: string;
  address?: string;
}

export interface OrderPayload {
  idempotencyKey: string;
  checkoutMethod: CheckoutMethod;
  status: Extract<OrderStatus, "placed" | "whatsapp_inquiry">;
  customer: OrderCustomer;
  items: CartItem[];
  totals: {
    subtotal: number;
  };
  notes?: string;
}
