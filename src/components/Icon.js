const Icon = ({ image, title }) => {
  return (
    <section>
      <div className="card text-left">
        <div className="overflow">
          <img src={image} alt={title} className="card__img" />
        </div>
      </div>
    </section>
  );
};

export default Icon;
