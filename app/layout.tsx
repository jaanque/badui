import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Bad UI",
  description: "Biblioteca profesional de antipatrones de interfaz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${kalam.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
