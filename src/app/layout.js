import Footer from "@/mainComponents/Footer";
import Navbar from "@/mainComponents/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
