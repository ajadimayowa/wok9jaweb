import './catCard.css'
import React from 'react';

const CategoryCard : React.FC<any> = ({icon, categoryTitle, primaryColor}) => {
    return (
        <div className="cont align-items-center bg-light shadow-sm m-2 p-2 rounded" 
        style={{backgroundColor:primaryColor}}>
            <p className="text-start" style={{fontSize:'0.9em'}}>{categoryTitle}</p>
            <div className="inner rounded shadow shadow-sm d-flex justify-content-center align-items-center"
            >
            <i className={`${icon} m2`}></i>
            </div>
            
        </div>
    )

}
export default CategoryCard;