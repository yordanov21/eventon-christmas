import { Link } from "react-router-dom";

const ChristmasCard = ({
    card
}) => {

    return (
        <li>
            <Link to={`/details/${card._id}`}>
                <img className="img-fluid" src={card.imageUrl} alt="single image" />
                <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
                <p>Name: {card.name}</p>
                <p>Card for {card.price}$</p>
            </Link>
        </li>
    );
};

export default ChristmasCard;