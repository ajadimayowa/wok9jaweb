import { IProduct } from "./interfaces/consts";

const staticServices = [
    {
        _id:'1',
        title :'Phones & Tablets',
        catImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/phonescatimage.png',
    },
    {
        _id:'2',
        title :'Electronics',
        catImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/electronics.png',
    },
    {
        _id:'3',
        title :'Gaming and Computer',
        catImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/gaming.png',
    },
    {
        _id:'4',
        title :'Trucks and Automobile',
        catImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/trucks.png',
    },
    {
        _id:'5',
        title :'Health & Beauty',
        catImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/healthandbeauty.png',
    },
    {
        _id:'6',
        title :'Home Appliances',
        catImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/aplliances.png',
    },
    {
        _id:'7',
        title :'Office & Furniture',
        catImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/tvandaudio.png',
    }
]

const products : IProduct[] = [
    {
        id:'VS0N01',
        catId:'',
        title :'Apple IPhone 16 Pro Max - 256GB - Black Titanium',
        prodImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone16promax.png',
        prodDescription:'6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        price:'1600',
        section:'hotdeals'

    },
    {
        id:'VS0N02',
        catId:'',
        title :'Apple IPhone 13 Pro Max 6.7"- Gold',
        prodDescription:'6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        prodImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone13promax.png',
        price:'800',
        section:'hotdeals'

    },
    {
        id:'VS0N03',
        catId:'',
        title :'Apple MacBook Air 13.3" 8GB RAM/256GB M1 Processor - Space Grey',
        prodDescription:'MacBook Air Power. It’s in the Air.thinnest, lightest notebook, completely transformed by the M1. With CPU speeds up to 3.5x faster and GPU speeds up to 5x faster.',
        prodImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/macbookair.png',
        price:'750',
        section:'hotdeals'

    },
    {
        id:'VS0N04',
        catId:'',
        title :'Sony Computer Entertainment Play Station 5 Slim',
        prodDescription:'Model: Sony PlayStation5 Slim new Edition PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2023 as the successor to the PlayStation 5, the PS5 was released on November 12, 2023 in North America.',
        prodImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/ps5.png',
        price:'1230',
        section:'hotdeals'

    },
    {
        id:'VS0N05',
        catId:'',
        title :'Samsung Galaxy S24 Ultra Dual SIM - 12GB RAM - 256GB - 5G - Black',
        prodDescription:'Bring details out of the darkness Regardless of darkness or distance, capture clear content with Nightography and high resolution zoom on Galaxy S24 Ultra. Break down barriers to language barriers',
        prodImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/samsungs24ultra.png',
        price:'1250',
        section:'hotdeals'

    },
    {
        id:'VS0N06',
        catId:'',
        title :'2012 Ford F-550 XL Super Duty',
        prodDescription:'2012 Ford F-550 XL Super Duty 12 Flatbed Pickup Truck 6.7L A/T bidadoo -Repair',
        prodImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png',
        price:'4600',
        section:'hotdeals'

    },
    {
        id:'VS0N07',
        catId:'',
        title :'Apple Watch Ultra 2 49mm Gps + Cellular - Band 64GB - Excellent',
        prodDescription:'4G Data Capable, Accelerometer, Barometer, Biological Data Sensor, Blood Oxygen Sensor, Blood Pressure Monitor, Bluetooth Enabled, GPS, Heart Rate Monitor, Touchscreen, Wi-Fi Capable, Water-Resistant, Waterproof',
        prodImageUrl:'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/applewatchultra.png',
        price:'1600',
        section:'clothing'

    }
]

export const Naira = 'N';
const convertToThousand = (value:any) => {
	value = value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0;
	return `${Naira}${value}`;
};

export {staticServices,products,convertToThousand}