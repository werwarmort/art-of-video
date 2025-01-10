import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserratLight = localFont({
  src: "./fonts/Montserrat-Light.woff",
  variable: "--font-montserrat-light",
  weight: "300",
});
const montserratRegular = localFont({
  src: "./fonts/Montserrat-Regular.woff",
  variable: "--font-montserrat-regular",
  weight: "400",
});
const montserratSemiBold = localFont({
  src: "./fonts/Montserrat-SemiBold.woff",
  variable: "--font-montserrat-semiBold",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Видеограф Воронеж",
  description: "Самый лучший видеограф Воронежа. Закажи съёмку чтобы запомнить самые яркие моменты из жизни",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratLight.variable} ${montserratRegular.variable} ${montserratSemiBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
