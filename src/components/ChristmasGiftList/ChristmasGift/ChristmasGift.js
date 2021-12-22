import { Link } from "react-router-dom";

const ChristmasGift = ({
    gift
}) => {

    return (
        <li>
            <Link to={`/details-gift/${gift._id}`}>
                <img className="img-fluid" src={gift.imageUrl} alt="single image" />
                <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                <p>Name: {gift.name}</p>
                <p>gift for {gift.price}$</p>
            </Link>
        </li>
    );
};

export default ChristmasGift;