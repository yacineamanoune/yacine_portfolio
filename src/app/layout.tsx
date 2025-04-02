import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Salim Rutaganda",
  description: "A minimal personal portfolio website made with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-body selection:bg-primary selection:text-hoverColor mx-auto my-8 max-w-[400px] px-4 md:my-16 md:max-w-[600px]">
        <main className="font-sans">
          {children}
        </main>
      </body>
    </html>
  );
}
