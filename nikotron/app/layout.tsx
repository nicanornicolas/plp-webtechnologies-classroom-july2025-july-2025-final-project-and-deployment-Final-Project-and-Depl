import React from "react";
import Link from "next/link";
import "../styles/globals.css";
import Navbar from "../components/Navbar"; // Adjust the import path as needed
import { ThemeProvider } from "../components/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}

          <footer className="bg-indigo-900 dark:bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">NIKOTRON</h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  Transforming technology challenges into innovative solutions across software, hardware, and digital services.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-blue-300 transition">Home</Link></li>
                  <li><Link href="/services" className="hover:text-blue-300 transition">Services</Link></li>
                  <li><Link href="/portfolio" className="hover:text-blue-300 transition">Portfolio</Link></li>
                  <li><Link href="/contact" className="hover:text-blue-300 transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <p className="text-sm mb-2">📞 +254 704 814 593</p>
                <p className="text-sm mb-2">✉️ nyererenicolas33@gmail.com</p>
                <p className="text-sm">© {new Date().getFullYear()} NIKOTRON. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
