import Footer from "@/mainComponents/Footer";
import Navbar from "@/mainComponents/Navbar";

function AboutLayoutPage({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default AboutLayoutPage;
