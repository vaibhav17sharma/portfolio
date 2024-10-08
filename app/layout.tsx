import Footer from "@/components/common/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/main.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaibhav Sharma | WebDEV",
  description: "Welcome to the portfolio of Vaibhav Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
