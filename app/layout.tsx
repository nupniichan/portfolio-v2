import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { ThemeLanguageProvider } from "./components/ThemeLanguageProvider";
import LayoutContent from "./components/LayoutContent";

const notoSans = Noto_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "nupniichan",
  description: "Portfolio of nupniichan - Full Stack Developer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} min-h-screen flex flex-col`}>
        <ThemeLanguageProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeLanguageProvider>
      </body>
    </html>
  );
}
