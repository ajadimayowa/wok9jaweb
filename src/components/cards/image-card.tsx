import React from "react";
import './image-card.css';
import { Image } from "react-bootstrap";
const ImageCard : React.FC<any>= ({imageUrl})=>{
    return (
        <div className="img-card p-3">
            <Image className="card-image rounded" src={imageUrl}/>

        </div>
    )

}
export default ImageCard;