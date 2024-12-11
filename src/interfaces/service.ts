export interface IService {
    _id:string,
    title :string,
    icon:string,
    createdBy:string,
    providers:string,
    category:string,
    basic:boolean,
    dateTime?:string,

}

export interface IServices {
    basic:string,
    briefDescription:string,
    category:string,
    colorCode:string,
    colorCode2:string,
    createdBy:string,
    dateTime:string
    nameOfService:string,
    providers:string[],
    webIcon:string,
    _id:string

}