import css from "./HomePage.module.css";

export default function HomePage() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className={css.wraper}>
      {/* <div>
        <img
          className={css.picture}
          src="https://img.freepik.com/free-photo/two-young-adults-sitting-indoors-holding-smart-phones-surfing-net-generated-by-ai_24640-93165.jpg?t=st=1715722028~exp=1715725628~hmac=15400603cce414dd5a57699ebce0b0685c2b9ff97bc98088562778a2456d563f&w=1800"
          alt="contacts-1"
        />
      </div> */}

      <div>
        <img
          className={css.picture}
          src="https://img.freepik.com/free-photo/finger-pressing-social-network-button-touch-screen_1112-489.jpg?t=st=1715719875~exp=1715723475~hmac=e4966c189a6147861e4384589011fbf8e17639938d5215da63b11a8d2c596bd0&w=1380"
          alt="contacts-3"
        />
      </div>

      <p className={css.text}>
        Welcome to our Contacts App! Manage your contacts effortlessly with our
        user-friendly interface. Stay organized, save time, and never lose touch
        with your connections. Start exploring and simplify your contact
        management today!
      </p>
    </div>
  );
}
