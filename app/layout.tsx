import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SideNavbar } from '@/components/SideNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'POS System',
  description: 'Point of Sale System with Inventory and Repair Management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <SideNavbar />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
