import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata = {
title: "Raju Shrestha | Full Stack Developer",
description: "Next.js, MERN Stack & PostgreSQL Developer Portfolio",
keywords: "Next.js Developer, MERN Developer, Nepal Software Engineer",
};


export default function RootLayout({ children }) {
return (
<html lang="en">
<body>
<Navbar />
{children}
<Footer />
</body>
</html>
);
}