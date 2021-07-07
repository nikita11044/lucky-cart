export interface IProductType {
    title: string
    price: number
    description: string
    imageURL: string
    quantity: number
    discount?: number
}

export interface IProductInStore extends IProductType {
    id: string,
    priceWithDiscount?: number}

export interface IProductInCart extends IProductType {
    id: string,
    quantityInCart: number,
    priceWithDiscount?: number
}