import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Aditi Gupta Ops List",
  description:
    "This is a page made specially for Aditi Gupta, she can login and just get her anger off on some people she hate.",
  openGraph: {
    title: "Aditi Gupta Ops List",
    description:
      "This is a page made specially for Aditi Gupta, she can login and just get her anger off on some people she hate.",
    url: "https://ops.aditi-gupta.co.in/",
    siteName: "Aditi Gupta Ops List",
    images: [
      {
        url: "https://ops.aditi-gupta.co.in/logo.png",
        width: 500,
        height: 500,
      },
    ],

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditi Gupta Ops List",
    description:
      "This is a page made specially for Aditi Gupta, she can login and just get her anger off on some people she hate.",

    images: ["https://ops.aditi-gupta.co.in/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
