// app/layout.tsx
import "./../styles/global.css"; // import color palette
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>NT-Confess 💌</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* Wrapper utama */}
        <div className="container">
          {/* Header sederhana */}
          <header className="header">
            <h1 style={{ color: "var(--color-pink-dark)" }}>NT-Confess 💌</h1>
          </header>

          {/* Main content */}
          <main className="main">{children}</main>

          {/* Footer */}
          <footer className="footer">
            <p style={{ color: "var(--color-pink)" }}>© 2026 NT-Confess</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
