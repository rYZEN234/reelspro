import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./components/Providers";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReelsPro",
  description: "enjoy with reel pro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </Providers>
        <footer className="bg-gray-900 text-white py-4 flex justify-center items-center">
            <p className="text-lg font-semibold">Made with ❤ ReelsPro</p>
          </footer>

      </body>
    </html>
  );
}
