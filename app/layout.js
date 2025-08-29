import "./globals.css";
import { Playfair_Display, Montserrat } from "next/font/google";

// Load fonts
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"], // normal + bold
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // light, normal, medium, bold
});

export const metadata = {
  title: "Photography Portfolio",
  description: "Capturing timeless moments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
