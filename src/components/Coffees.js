import Coffee from "./Coffee";

//imagenes
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import image15 from "../assets/image15.jpg";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.jpg";
import image18 from "../assets/image18.jpg";
import image19 from "../assets/image19.jpg";
import image20 from "../assets/image20.jpg";
import image21 from "../assets/image21.jpg";
import image22 from "../assets/image22.jpg";
import image23 from "../assets/image23.jpg";
import image24 from "../assets/image24.png";

const coffees = [
  {
    id: 1,
    title: "Bella Donovan",
    price: "$19.00",
    text: "Heavy, Conforting, deeply fruited",
    image: image1,
  },
  {
    id: 2,
    title: "Three Africans",
    price: "$19.00",
    text: "Frutty, radiant, creamy",
    image: image2,
  },
  {
    id: 3,
    title: "Giant steps",
    price: "$19.00",
    text: "Viscout, fudgy, substantial",
    image: image3,
  },
  {
    id: 4,
    title: "Decaf Noir",
    price: "$20.00",
    text: "Nutty, chocolaty, dense",
    image: image4,
  },
  {
    id: 5,
    title: "Hayes Valley Espresso",
    price: "$19.00",
    text: "Cocoa, orange zest, smoky finish",
    image: image5,
  },
  {
    id: 6,
    title: "17ft Ceiling",
    price: "$19.00",
    text: "Effulgent caramelly, enveloping, nutty",
    image: image6,
  },
  {
    id: 7,
    title: "Roman Espresso",
    price: "$19.00",
    text: "Jammy, malted, medium-bodied",
    image: image7,
  },
  {
    id: 8,
    title: "Retrofit Espresso",
    price: "$19.00",
    text: "Sweet, delcate, balanced",
    image: image8,
  },
  {
    id: 9,
    title: "House of Good",
    price: "$20.00",
    text: "Sweet, delicate, balanced",
    image: image9,
  },
  {
    id: 10,
    title: "Drip Medley Subscription",
    price: "$19.00",
    image: image10,
  },
  {
    id: 11,
    title: "Espresso Medley Subscription",
    price: "$19.00",
    image: image11,
  },
  {
    id: 12,
    title: "French Press Medley Subscription",
    price: "$19.00",
    image: image12,
  },
  {
    id: 13,
    title: "Moka Pot Medley Subscription",
    price: "$19.00",
    image: image13,
  },
  {
    id: 14,
    title: "New Orleans Iced Kit",
    price: "$18.00",
    text: "Rich, sweet, syrupy",
    image: image14,
  },
  {
    id: 15,
    title: "Brazil FAF Santa Clara icatu Natural",
    price: "$24.00",
    text: "Papaya, rose, brown sugar, sparkiling acidity",
    image: image15,
  },
  {
    id: 16,
    title: "Brazil FAF Santa Clara Obata Natural",
    price: "$12.00",
    text: "Cramberry jam, wine, rhubarb",
    image: image16,
  },
  {
    id: 17,
    title: "Burundi Twese Twoterimbere",
    price: "$22.00",
    text: "Key lime pie, apricot nectar, brown sugar",
    image: image17,
  },
  {
    id: 18,
    title: "Cascara Tea",
    price: "$7.50",
    text: "Floral, honey-sweet, jasmine, camells blossoms",
    image: image18,
  },
  {
    id: 19,
    title: "El Salvador Tres Limites Natural",
    price: "$12.00",
    text: "Raspberry soda, black currant, syrupy, complex, wine-lime",
    image: image19,
  },
  {
    id: 20,
    title: "Ethiopia Yirgacheffe Gelena Abaya Natural",
    price: "$24.00",
    text: "Violet, cocoa, stone fruit",
    image: image20,
  },
  {
    id: 21,
    title: "Mexico La Cañada",
    price: "$15.00",
    text: "Blackberry, dark cherry, cinnamon, orange",
    image: image21,
  },
  {
    id: 22,
    title: "Mexico Oaxaca Mixteca",
    price: "$19.00",
    text: "Peanut butter, silky, red fruit, bright",
    image: image22,
  },
  {
    id: 23,
    title: "Rwanda Kirezi",
    price: "$22.00",
    text: "Black tea, citrus, gried pluff, floral",
    image: image23,
  },
  {
    id: 24,
    title: "Sumatra Lintong Lake Tawar",
    price: "$22.00",
    text: "Papaya, cola, chocolate ganache",
    image: image24,
  },
];

const Coffees = () => {
  return (
    <div className="container">
      <div className="row">
        {coffees.map((coffee, index) => (
          <div key={index} className="col-lg-3 col-sm-6">
            <Coffee
              title={coffee.title}
              image={coffee.image}
              text={coffee.text}
              price={coffee.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
