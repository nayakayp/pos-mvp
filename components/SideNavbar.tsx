'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Package, Wrench } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Inventory Management', href: '/', icon: Package },
  { name: 'Repair Management', href: '/repair', icon: Wrench },
];

export function SideNavbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-2 w-64 p-4 bg-gray-100 h-screen">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200',
              isActive ? 'bg-gray-200' : ''
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
