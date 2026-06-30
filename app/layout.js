import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inzeedo ERP | All-in-One Business Management & Retail Software",
  description: "A complete, easy-to-use software that combines your Point of Sale, Inventory, Customer Relationships, and Accounting. Stop juggling multiple apps and start scaling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} antialiased`}>
      <body className="min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
