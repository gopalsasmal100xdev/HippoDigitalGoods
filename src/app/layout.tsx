import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Digital Hippo",
  description: "Digital Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full font-sans antialiased")}>
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
