import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  variable: "--my-font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Furniro",
  description:
    "Furniro is a furniture buying site. anyone con buy there favourite furniture from this site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <html lang="en">
        <body
          className={`${poppins.className} ${poppins.variable} antialiased`}
        >
          <Navbar />

          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
