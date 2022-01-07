import Coffees from "./Coffees";
import Icons from "./Icons";

const Main = () => {
  return (
    <div className="main">
      <h2>Coffee</h2>
      <div className="icons__container">
        <h3>How do you brew your coffee?</h3>
        <div className="icons">
          <Icons />
        </div>
      </div>
      <div className="cards">
        <Coffees />
      </div>
    </div>
  );
};

export default Main;
