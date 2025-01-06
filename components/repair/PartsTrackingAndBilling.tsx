'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Dummy data for parts and billing
const dummyPartsAndBilling = [
  { id: 1, repairId: 101, part: 'iPhone 12 Screen', quantity: 1, unitPrice: 150, totalPrice: 150, status: 'Used' },
  { id: 2, repairId: 102, part: 'MacBook Pro Battery', quantity: 1, unitPrice: 100, totalPrice: 100, status: 'Pending' },
  { id: 3, repairId: 103, part: 'Samsung Galaxy S21 Motherboard', quantity: 1, unitPrice: 200, totalPrice: 200, status: 'Ordered' },
];

export default function PartsTrackingAndBilling() {
  const [searchTerm, setSearchTerm] = useState('');
  const [partsAndBilling, setPartsAndBilling] = useState(dummyPartsAndBilling);

  const filteredPartsAndBilling = partsAndBilling.filter(item =>
    item.part.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Parts Tracking and Billing</h3>
      <div className="flex justify-between mb-4">
        <Input
          type="text"
          placeholder="Search parts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>Add Part</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Repair ID</TableHead>
            <TableHead>Part</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPartsAndBilling.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.repairId}</TableCell>
              <TableCell>{item.part}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.unitPrice.toFixed(2)}</TableCell>
              <TableCell>${item.totalPrice.toFixed(2)}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="outline" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
