export type ProductType = {
    title: string
    price: number
    description: string
    imageURL: string
    quantity: number
    discount: number
}

export type ProductDomainType = ProductType & {id: string}