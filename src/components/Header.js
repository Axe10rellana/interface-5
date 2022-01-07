const Header = () => {
  return (
    <div className="header">
      <div className="menu-left">
        <a href="#coffee">Coffee</a>
        <a href="#merchandise">Merchandise</a>
        <a href="#gifts">Gifts</a>
        <a href="#subscriptions">Suscriptions</a>
      </div>
      <div className="menu-right">
        <a href="#guides">
          Brewing Guides <i className="fas fa-chevron-down"></i>
        </a>
        <a href="#cafes">
          Cafes <i className="fas fa-chevron-down"></i>
        </a>
        <a href="#story">Our Story</a>
        <a href="#blog">Blog</a>
        <a className="signin" href="#signin">
          Sign In
        </a>
        <a className="cart" href="#cart">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
