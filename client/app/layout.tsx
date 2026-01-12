import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "@/utils/date";
import GetLocaleTime from "@/lib/supabase/GetLocaleTime";

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
      <GetLocaleTime />
      <body className={`antialiased ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
