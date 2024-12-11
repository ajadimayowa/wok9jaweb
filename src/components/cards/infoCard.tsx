
import styles from './infoCard.module.css';
import laptopImg from '../../assets/images/apple-pro.jpg';
import {Image } from "react-bootstrap";

const InfoCard : React.FC<any> = ({title}) => {
    return (
        <div className={`${styles.container} shadow shadow-sm`}>
            <div className={`d-flex flex-column p-2`}>
                <h2 className="fw-bold">
                    {title}
                </h2>
                <p className="w-100 text-info" role="button">Shop Now </p>

            </div>

            <div className={`d-flex bg-danger p-1`}>
                <Image className={`${styles.image} m-0`} src={laptopImg} />
            </div>
        </div>
    )

}
export default InfoCard;