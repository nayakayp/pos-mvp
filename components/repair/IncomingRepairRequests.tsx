'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Dummy data for repair requests
const dummyRepairRequests = [
  { id: 1, customer: 'John Doe', device: 'iPhone 12', issue: 'Broken screen', status: 'New', date: '2023-04-15' },
  { id: 2, customer: 'Jane Smith', device: 'MacBook Pro', issue: 'Battery replacement', status: 'In Progress', date: '2023-04-14' },
  { id: 3, customer: 'Bob Johnson', device: 'Samsung Galaxy S21', issue: 'Water damage', status: 'New', date: '2023-04-13' },
];

export default function IncomingRepairRequests() {
  const [searchTerm, setSearchTerm] = useState('');
  const [requests, setRequests] = useState(dummyRepairRequests);

  const filteredRequests = requests.filter(request =>
    request.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.issue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Incoming Repair Requests</h3>
      <div className="flex justify-between mb-4">
        <Input
          type="text"
          placeholder="Search requests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>New Request</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Device</TableHead>
            <TableHead>Issue</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.id}</TableCell>
              <TableCell>{request.customer}</TableCell>
              <TableCell>{request.device}</TableCell>
              <TableCell>{request.issue}</TableCell>
              <TableCell>{request.status}</TableCell>
              <TableCell>{request.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
