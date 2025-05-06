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
   title: "Pomi Altoi",
   description: "Experți în altoirea pomilor fructiferi",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <ScrollProvider>{children}</ScrollProvider>
         </body>
      </html>
   );
}
