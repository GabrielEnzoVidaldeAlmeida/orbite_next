import "../globals.css";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex items-center justify-center font-poppins bg-gradient-to-b from-orbite-login-bg-1 to-orbite-login-bg-2">
          {children}
        </main>
      </body>
    </html>
  );
}
