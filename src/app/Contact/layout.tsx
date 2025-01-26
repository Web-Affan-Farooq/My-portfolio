import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Muhammad Affan",
  description: "Contact form for portfolio muhammad affan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <div className="bg-desktop bg-cover bg-no-repeat bg-center w-full h-screen">
            {children}
        </div>
      </body>
    </html>
  );
}
