import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/TemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sujal's Portfolio",
  description: "Modern Portfolio",
  icons:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/52c99e53-660d-4306-80aa-338eaccccc1d/dgly8fd-6a0884bb-a0ac-483d-a784-1d9b282a036c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyYzk5ZTUzLTY2MGQtNDMwNi04MGFhLTMzOGVhY2NjY2MxZFwvZGdseThmZC02YTA4ODRiYi1hMGFjLTQ4M2QtYTc4NC0xZDliMjgyYTAzNmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yf7O0nxapc_cqufyLERML-s1JffsvyCeFsEil5NZSm0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
