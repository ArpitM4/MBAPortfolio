import { Playfair_Display } from "next/font/google";
import "./globals.css";
import InitialLoader from "../components/InitialLoader";
import Navbar from "../components/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Aditi Jatav - MBA Portfolio",
  description: "Aditi Jatav's MBA Portfolio Website",
  icons: {
    icon: "/AJ.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} antialiased overflow-x-hidden`}
      >
        <InitialLoader>
          {children}
        </InitialLoader>
      </body>
    </html>
  );
}
