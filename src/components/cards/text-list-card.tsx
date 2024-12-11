
import './text-listcard.css';

const TextListCard: React.FC<any> = ({ title,icon,description }) => {
    return (
        <div className="px-2 text-hold">
            <i className={`bi ${icon}`} style={{ fontSize: '1.7em' }}></i>
            <h5>{title}</h5>
            <p className="">
                {description}
            </p>

        </div>
    )

}
export default TextListCard;