import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Vikrant Kulkarni | Hardware & Software Engineer",
  description:
    "Portfolio of Vikrant Kulkarni — Electronics & Telecommunication Engineer, Embedded Systems developer, and IoT & Robotics builder.",
  keywords: [
    "Vikrant Kulkarni",
    "Embedded Systems",
    "IoT",
    "Robotics",
    "Electronics Engineer",
    "Full Stack Developer",
    "AI ML",
    "Portfolio"
  ],
  authors: [{ name: "Vikrant Kulkarni", url: "https://github.com/vikrantkulkarni07" }],
  openGraph: {
    title: "Vikrant Kulkarni | Hardware & Software Engineer",
    description: "Building the Future with Hardware & Software",
    type: "website",
    locale: "en_US",
    images: [{ url: "/profile.png", width: 1200, height: 630, alt: "Vikrant Kulkarni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikrant Kulkarni | Hardware & Software Engineer",
    description: "Building the Future with Hardware & Software",
    images: ["/profile.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-bg text-slate-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
