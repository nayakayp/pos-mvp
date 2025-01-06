'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Dummy data for repair processes
const dummyRepairProcesses = [
  { id: 1, customer: 'John Doe', device: 'iPhone 12', status: 'Diagnosis', technician: 'Alice', estimatedCompletion: '2023-04-20' },
  { id: 2, customer: 'Jane Smith', device: 'MacBook Pro', status: 'Repair', technician: 'Bob', estimatedCompletion: '2023-04-22' },
  { id: 3, customer: 'Bob Johnson', device: 'Samsung Galaxy S21', status: 'Testing', technician: 'Charlie', estimatedCompletion: '2023-04-18' },
];

export default function RepairProcessManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [processes, setProcesses] = useState(dummyRepairProcesses);

  const filteredProcesses = processes.filter(process =>
    process.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    process.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
    process.technician.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Repair Process Management</h3>
      <div className="flex justify-between mb-4">
        <Input
          type="text"
          placeholder="Search processes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Device</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Technician</TableHead>
            <TableHead>Estimated Completion</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProcesses.map((process) => (
            <TableRow key={process.id}>
              <TableCell>{process.id}</TableCell>
              <TableCell>{process.customer}</TableCell>
              <TableCell>{process.device}</TableCell>
              <TableCell>
                <Select defaultValue={process.status}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Diagnosis">Diagnosis</SelectItem>
                    <SelectItem value="Repair">Repair</SelectItem>
                    <SelectItem value="Testing">Testing</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>{process.technician}</TableCell>
              <TableCell>{process.estimatedCompletion}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Update</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
