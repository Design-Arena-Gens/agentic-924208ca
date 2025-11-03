import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Promise - A Naruto Visual Novel",
  description: "Naruto's promise comes back to haunt him",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
