export interface IProduct {
    id: string,
    catId: string,
    title: string,
    prodDescription: string,
    prodImageUrl: string,
    price: string,
    section: string

}

export interface IPayment {
    title: string,
        method:string,
        email: string,
        tag: string
}