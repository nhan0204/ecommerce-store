export interface Store {
  id: string;
  name: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboardId: string;
  billboard: Billboard;
}

export interface Product {
  id: String;
  category: Category;
  name: string;
  price: string;
  quantity: number;
  sale: number;
  cart?: number;
  isArchived: boolean;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
