import Icon from "./Icon";

//imagenes
import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const icons = [
  {
    id: 1,
    title: "Moka Pot Medley",
    image: icon1,
  },
  {
    id: 2,
    title: "French Press Medley",
    image: icon2,
  },
  {
    id: 3,
    title: "Espresso Medley",
    image: icon3,
  },
];

const Icons = () => {
  return (
    <div className="container">
      <div className="row">
        {icons.map((icon, index) => (
          <div key={index} className="col-lg-4 col-sm-6">
            <Icon image={icon.image} title={icon.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
