import { Open_Sans } from "next/font/google";
import "./globals.css";

const open_Sans = Open_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_Sans.className}>{children}</body>
    </html>
  );
}
