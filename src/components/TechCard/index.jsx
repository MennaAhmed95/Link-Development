const TechCard = ({ itm }) => {
  return (
    <div className="cardd">
      <figure className="cardd__thumb">
        <img src={itm?.srcImg} alt="techCard" className="cardd__image" />
        <p>{itm.nam}</p>
        <figcaption className="cardd__caption">
          <a href="/" className="cardd__button">
            Read more
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default TechCard;
