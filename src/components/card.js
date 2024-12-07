function Card({ image, title, location, size, beds, energy, price, agency, extraClass, index }) {
    return (
        <div className={`cards ${extraClass}`}>
            <div className="card-left">
                <img className="aprt-images" src={image} alt="resident" />
            </div>
            <div className="card-right">
                <div className="img-title">
                    <div className="add-tag">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <a href="#">{title}</a>
                    </div>
                    {/* Conditionally render heart icon */}
                    <img
                        src={index === 1 ? "./assets/icons/icons-heart-filled.svg" : "./assets/icons/icons-heart.svg"}
                        className="like-icon"
                        alt="heart-icon"
                    />
                </div>
                <p className="aprt-info">{location}</p>
                <div className="cards-icons">
                    <img src="./assets/icons/icons-stretch-tool.svg" alt="size icon" />
                    <span>{size}</span>
                    <img src="./assets/icons/icons-single-bed.svg" alt="bed icon" />
                    <span>{beds}</span>
                    <img src="./assets/icons/icons-the-flash-sign.svg" style={{ width: "24px" }} alt="energy icon" />
                    <span>{energy}</span>
                </div>
                <h2 className="price-tag">{price}</h2>
                <div className="location-tag">
                    <a href="#">{agency}</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
