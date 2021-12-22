import { Link } from "react-router-dom";

const MyGift = ({
    gift
}) => {

    return (
        <li>
            <Link to={`/details-gift/${gift._id}`} className="my-card">
                <img className="img-fluid-2" src={gift.imageUrl} alt="single image" />

                <span className="overlay">
                    <p>Name: {gift.name}</p>
                    <p>Price: {gift.price}$</p>
                </span>


            </Link>
        </li>
    );
};

export default MyGift;