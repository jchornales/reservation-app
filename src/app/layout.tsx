import NavigationBar from './components/NavigationBar/NavigationBar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Reservation System',
  description: 'A reservation system for hotels',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col items-center justify-between">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
