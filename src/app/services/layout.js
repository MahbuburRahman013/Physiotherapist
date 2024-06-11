import Footer from "@/mainComponents/Footer";
import Navbar from "@/mainComponents/Navbar";

function ServiceLayoutPage({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default ServiceLayoutPage;
