import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./utils.css";
import "@/utils/date";
import { ModalProvider } from "@/contexts/ModalContext";
import Modal from "@/components/ui/modal/Modal";
import SpinningBodyBackground from "@/components/layout/SpinningBodyBackground";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Roman Fitness",
  description: "Track and optimize your workouts with Roman Fitness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
