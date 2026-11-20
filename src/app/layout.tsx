import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ayush kumar",
  description: "Personal website of Ayush Kumar. AI maximalist, finance major at Banaras Hindu University.",
  icons: {
    icon: "/images/ouroboros-hq.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,400;1,500&family=Geist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0B0B0B] text-[#DEDEDB] font-geist antialiased selection:bg-[#222222] selection:text-[#EDEDEA]">
        {children}
      </body>
    </html>
  );
}
