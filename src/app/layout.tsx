import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tesla | El coche de tus sueños",
  description: "Clon del Sitio Web de Tesla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        </body>
    </html>
  );
}
