import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';

// Corrected Poppins font import with weight
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // You can add more weights if needed
});

export const metadata: Metadata = {
  title: 'Portfolio | Freelance Web developer',
  description: 'Personal portfolio showcasing creative work and projects',
  icons: {
    icon: '/favicon.ico', // Link to favicon in the public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon Links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header/>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
