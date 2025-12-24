import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Photo Extractor",
  description: "AI Face Search System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
