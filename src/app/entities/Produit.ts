export interface Produit {
  id: number,
  title: string,
  description: string,
  brand: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  category: string,
  thumbnail: string,
  images: Array<string>
}

export default Produit;
