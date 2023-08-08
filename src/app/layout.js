import "./globals.css";
import { Inter } from "next/font/google";
import { Navigation } from "../components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokedex App",
  description: "Pokemon information App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pokedex App</title>
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
