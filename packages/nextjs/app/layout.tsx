import "./globals.css";

export const metadata = {
  title: "Test Viniapp",
  description: "Created with GitHub Actions"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
