import "@unsend/ui/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@unsend/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unsend",
  description: "Open source sending infrastructure for developers",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  twitter: {
    card: "summary_large_image",
    site: "https://unsend.dev",
    title: "Unsend",
    description: "Open source sending infrastructure for developers",
    images: "https://unsend.dev/og_banner.png",
    creator: "@KM_Koushik_",
  },
  openGraph: {
    type: "website",
    title: "Unsend",
    description: "Open source sending infrastructure for developers",
    siteName: "Unsend",
    url: "https://unsend.dev",
    images: "https://unsend.dev/og_banner.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="dark">
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
