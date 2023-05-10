import Navbar from "Components/Navbar/index";
import Footer from "../Components/Fotter/Fotter";
import ContactPopup from "Components/ContactPopup";
import BookingHero from "Components/Booking";
const Booking = () => {
  return (
    <>
      <Navbar />
      <BookingHero />
      <Footer />
      <ContactPopup />
    </>
  );
};

export default Booking;
