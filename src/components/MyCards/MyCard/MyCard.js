import { Link } from "react-router-dom";

const MyCard = ({
    card
}) => {

    return (
        <li>
            <Link to={`/details/${card._id}`} className="my-card">
                <img className="img-fluid-2" src={card.imageUrl} alt="single image" />

                <span className="overlay">
                    <p>Name: {card.name}</p>
                    <p>Price: {card.price}$</p>
                </span>


            </Link>
        </li>
    );
};

export default MyCard;