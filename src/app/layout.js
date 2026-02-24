// app/layout.jsx or app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IBM_Plex_Mono } from 'next/font/google';

// Import IBM Plex Mono font (all weights + italic)
const ibmPlex = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700'],
  style: ['normal','italic'],
});

export const metadata = {
  title: "Raju Shrestha | Full Stack Developer",
  description: "Next.js, MERN Stack & PostgreSQL Developer Portfolio",
  keywords: "Next.js Developer, MERN Developer, Nepal Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlex.className}>
      <body>
        {/* Background gradient div */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_#0a1e2b,_#0f3a4c,_#022d3c)] -z-10 will-change-transform"></div>

        {/* Page content */}
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}