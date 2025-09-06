import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "../context/scrollcontext";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Pomi Altoi - Experți în Altoirea Pomilor",
   description:
      "Cultivăm pomi fructiferi altoiți de cea mai înaltă calitate pentru grădini, livezi și spații verzi.",
   icons: {
      icon: "/icon.jpeg",
      shortcut: "/icon.jpeg",
      apple: "/icon.jpeg",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <head>
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
         </head>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <ScrollProvider>{children}</ScrollProvider>
         </body>
      </html>
   );
}
