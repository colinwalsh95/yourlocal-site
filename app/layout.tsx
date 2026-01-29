import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "YourLocal",
  description:
    "Helping businesses and consumers connect through digital loyalty and local discovery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {/* Header */}
        <header className="border-b border-neutral-800/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="font-semibold text-lg tracking-tight"
            >
              <span className="text-orange-500">Your</span>Local
            </Link>

            <nav className="flex gap-6 text-sm text-neutral-300">
              <Link className="hover:text-white transition" href="/about">
                About
              </Link>
              <Link className="hover:text-white transition" href="/contact">
                Contact
              </Link>
              <Link className="hover:text-white transition" href="/privacy">
                Privacy
              </Link>
              
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto px-6 py-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-neutral-800/80">
          <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-neutral-400 flex flex-col gap-2 md:flex-row md:justify-between">
            <p>
              © {new Date().getFullYear()} Your Social Local Limited. All rights
              reserved.
            </p>
            <p className="text-neutral-500">
              Connecting local communities through digital engagement
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
