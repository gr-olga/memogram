import heart from "../../images/like.svg"
import bubble from "../../images/kisspng-speech-balloon-clip-art-dialog-5ac833dbb369c7.3984915815230699157349.png"
import avatar from "../../images/avatar.png"
import "./Card.css"

function Card(props: Record<string, string>) {

    return (
        <div className="card">
            <div className="card__author-box">
                <img src={avatar} className="card__author-img" alt="avatar"/>
                <h5>Name</h5>
            </div>
            <img className="card__image" src={props.pic} alt="mem"/>
            <div className="card__info">
                <div className="card__like-box">
                    <button className="card__like" type="button">
                        <img className="card__like-pic" src={heart} alt="like"/>
                    </button>
                    <p className="card__like-num">100</p>
                </div>
                <div>
                    <button className="card__like">
                        <img className="card__like-pic" src={bubble} alt="add"/>
                    </button>
                </div>
            </div>
            <div className="card-comments">
                Comments
            </div>
            <div>
                <h4>data</h4>
            </div>
        </div>
    )
}


export default Card;