import Footer from "@/mainComponents/Footer";
import Navbar from "@/mainComponents/Navbar";

function BlogLayoutPage({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default BlogLayoutPage;
