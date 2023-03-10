function Card() {

    return (
        <div className="card">
            <img className="card__image" src="#" alt="mem"/>
            <div className="card__info">
                <div className="card__like-box">
                    <button className="card-like" type="button"/>
                    <p className="card__like-num">100</p>
                    <button type="button" className="card-bin">
                        <img src="#" alt="bin"/>
                    </button>
                </div>
            </div>
            <div className="card-comments">
                Comments
            </div>
        </div>
    )
}


export default Card;