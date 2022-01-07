const Coffee = ({ title, text, price, image }) => {
  return (
    <section>
      <div className="card text-left animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={image} alt={title} className="card__img card__img__top" />
        </div>
        <div className="card-body">
          <div className="card__body__flex">
            <h4 className="card-title subtitle">{title}</h4>
            <p>{price}</p>
          </div>
          <p className="card-text text-secondary">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default Coffee;
