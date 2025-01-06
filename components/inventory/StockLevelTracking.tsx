'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';

// Dummy data for stock items
const dummyStockData = [
  { id: 1, name: 'Widget A', quantity: 100, reorderPoint: 20 },
  { id: 2, name: 'Gadget B', quantity: 50, reorderPoint: 10 },
  { id: 3, name: 'Tool C', quantity: 75, reorderPoint: 15 },
  { id: 4, name: 'Part D', quantity: 200, reorderPoint: 50 },
  { id: 5, name: 'Component E', quantity: 30, reorderPoint: 5 },
];

export default function StockLevelTracking() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStock = dummyStockData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Stock Level Tracking</h3>
      <Input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Reorder Point</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredStock.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.reorderPoint}</TableCell>
              <TableCell>
                {item.quantity <= item.reorderPoint ? (
                  <span className="text-red-500 font-semibold">Reorder</span>
                ) : (
                  <span className="text-green-500">In Stock</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
