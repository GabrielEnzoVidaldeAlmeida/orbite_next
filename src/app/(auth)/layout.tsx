import "../globals.css";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex items-center justify-center font-poppins bg-orbite-bg-light dark:bg-orbite-bg-dark">
          {children}
        </main>
      </body>
    </html>
  );
}
