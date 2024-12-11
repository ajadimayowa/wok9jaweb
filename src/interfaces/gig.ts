export interface IGig {
    sellerInfo: {
        creatorFullName: string,
        creatorPhoneNumber: string,
        creatorOfficeAddress: string,
        creatorLocalGovermentArea: string,
        creatorId: string,
    },
    _id: string,
    gigTitle: string,
    gigDescription: string,
    gigImages: string[],
    gigCategoryId: string,
    gigSubCategoryId: string,
    sellerPrice: string,
    basePrice: string,
    promotionType: string,
    dateTime: string,
}

