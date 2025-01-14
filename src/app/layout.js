import { Inter } from "next/font/google";
import "./globals.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Physiotherapist",
  description: "Bringing a personal wealth of experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${inter.className} overflow-x-hidden`}>
          {children}
        </body>
    </html>
  );
}
