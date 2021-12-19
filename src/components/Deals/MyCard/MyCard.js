import { Link } from "react-router-dom";

const MyCard = ({
    card
}) => {

    return (
        <Link to={`/details/${card._id}`}>
            <div className="col-lg-6 col-sm-6">
                <figure className="effect-service">
                    <img src={card.imageUrl} alt="" />
                    <figcaption>
                        <h2>{card.name}</h2>
                        <p>{card.price}</p>

                    </figcaption>
                </figure>
            </div>
        </Link>


        // <li>
        //     <Link to={`/details/${card._id}`}>
        //         <img className="img-fluid" src={card.imageUrl} alt="single image" />
        //         <span className="overlay"><i className="fa fa-picture-o" aria-hidden="true"></i></span>
        //         <p>Name: {card.name}</p>
        //         <p>Card for {card.price}$</p>
        //     </Link>
        // </li>
    );
};

export default MyCard;