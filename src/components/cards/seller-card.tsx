import { Image } from 'react-bootstrap';
import './gig-card.css'
import React from 'react';
import { convertToThousand } from '../../constants';

const SellerCard : React.FC<any> = ({gigPrice,gigTitle,gigImage,sellerImg, gigInfo}) => {
    return (
        <div className="gig-card shadow shadow-sm rounded">
            <Image className='w-100 rounded-top h-50'  src={gigImage}/>
            <p className='px-2 fw-medium'>{gigTitle}</p>
            <p className='px-2 fw-bold m-0'>{convertToThousand(gigPrice)}</p>
            
            {/* <div className='w-100 bg-danger'>
            
            
                
            </div> */}
            
        </div>
    )

}
export default SellerCard;