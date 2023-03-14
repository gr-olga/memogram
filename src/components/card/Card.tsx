import pic from "../../images/air6.jpeg"
import heart from "../../images/like.svg"
import "./Card.css"

function Card() {

    return (
        <div className="card">
            <img className="card__image" src={pic} alt="mem"/>
            {/*<div className="card__info">*/}
            <div className="card__like-box">
                <button className="card-like" type="button">
                    <img src={heart} alt="like"/>
                </button>
                <p className="card__like-num">100</p>
            </div>
            {/*</div>*/}
            <div className="card-comments">
                Comments
            </div>
        </div>
    )
}


export default Card;