import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Priya's Fashion Hub – Quality Ethnic & Casual Wear",
  description:
    "Shop the latest ethnic wear, casual clothing, and home décor at Priya's Fashion Hub. Best prices guaranteed with fast delivery across India.",
  keywords: ["ethnic wear", "kurti", "saree", "fashion", "online shopping", "india"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
