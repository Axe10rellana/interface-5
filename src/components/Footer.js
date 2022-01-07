const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <a href="#contact">Contact</a>
        <a href="#careers">Careers</a>
        <a href="#wholesale">Wholesale</a>
        <a href="#specialorders">Special Orders</a>
        <a href="#press">Press</a>
        <a href="#experiences">Experiences</a>
        <a href="#events">Events</a>
        <a href="#modernartdesserts">Modern Art Desserts</a>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__1">
          <form>
            <input
              type="email"
              name="email"
              placeholder="  Enter email for news and updates"
              autoComplete="off"
              required
            />
            <input type="submit" value="Sign up" />
          </form>
        </div>
        <div className="footer__bottom__2">
          <a href="#shippingandreturn">Shipping And Return</a>
          <a href="#termsofuse">Terms of Use</a>
          <a href="#privacy">Privacy</a>
          <p>
            <i className="far fa-copyright"></i> 2013 Blue Bottle Coffe Inc, All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
