import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Central de atendimento",
  description: "Suporte ao cliente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
