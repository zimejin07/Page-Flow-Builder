"use client";

import "./globals.css";
import { useEffect, useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind `lg:` = 1024px
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center p-8 text-center">
        <div className="bg-red-100 text-red-700 border border-red-300 p-6 rounded-md max-w-md">
          This editor is only available on larger screens (desktop/laptop).
        </div>
      </div>
    );
  }

  return (
    <html lang="en">
      <body className="font-inter">{children}</body>
    </html>
  );
}
