export interface IProducts {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
  quantity?: number
}

export interface IFilters {
  filters: {
    category: string
    minPrice: number
  }
  filterProducts: (products: IProducts[]) => IProducts[]
  setFilters: (filters: { category: string, minPrice: number }) => void
}

export interface ICartContext {
  cart: IProducts[]
  addToCart: (product: IProducts) => void
  removeFromCart: (product: IProducts) => void
  clearCart: () => void
}
