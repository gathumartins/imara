import { Providers } from "@/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenirBlack = localFont({
  src: "./fonts/AvenirBlack.woff2",
  variable: "--avenir-black",
});
const avenirBook = localFont({
  src: "./fonts/AvenirBook.woff2",
  variable: "--avenir-book",
});
const avenirRoman = localFont({
  src: "./fonts/AvenirRoman.woff2",
  variable: "--avenir-roman",
});

const avenirNext = localFont({
  src: "./fonts/AvenirNext.woff2",
  variable: "--avenir-next",
});
const avenirNextBold = localFont({
  src: "./fonts/AvenirNextBold.woff2",
  variable: "--avenir-next-bold",
});

const avenirNextRegular = localFont({
  src: "./fonts/AvenirNextRegular.woff2",
  variable: "--avenir-next-regular",
});

export const metadata: Metadata = {
  title: "Imara Fellowship",
  description: "Imara fellowhsip website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#1D4C948C]">
      <body
        className={`${avenirBlack.variable} ${avenirBook.variable} ${avenirRoman.variable} ${avenirNext.variable} ${avenirNextBold.variable} ${avenirNextRegular.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
