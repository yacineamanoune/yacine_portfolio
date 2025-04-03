import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Salim Rutaganda",
  description: "A minimal personal portfolio website made with Next.js and Tailwind CSS",
  openGraph: {
    title: "Salim Rutaganda",
    description: "A minimal personal portfolio website made with Next.js and Tailwind CSS",
    url: "https://salim.engineer",
    siteName: "Salim Rutaganda",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Salim Rutaganda",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salim Rutaganda",
    description: "A minimal personal portfolio website made with Next.js and Tailwind CSS",
    images: ["/og.png"],
    creator: "@salimnunez01", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <head>
      <script src="https://cdn.peasy.so/peasy.js" data-website-id="01jp2b1pbzn6wmjsng3q8v5ax0" async></script>
      </head>
      <body className="text-body bg-[#0A0A0A] selection:bg-primary selection:text-hoverColor mx-auto my-8 max-w-[400px] px-4 md:my-16 md:max-w-[600px]">
        <main className="font-sans">
          {children}
        </main>
      </body>
    </html>
  );
}
