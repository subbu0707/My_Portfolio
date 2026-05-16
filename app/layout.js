import { Sora, Manrope, Montserrat } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-headline",
});

export const metadata = {
  title: "Rachabattuni Subbarao | Dark Neon Portfolio",
  description:
    "Portfolio of Rachabattuni Subbarao, a Computer Science student building responsive web applications with cinematic dark UI and 3D motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
