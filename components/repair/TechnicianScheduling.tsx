'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Dummy data for technician schedules
const dummySchedules = [
  { id: 1, technician: 'Alice', date: '2023-04-15', timeSlot: '09:00 - 12:00', task: 'iPhone 12 Screen Repair' },
  { id: 2, technician: 'Bob', date: '2023-04-15', timeSlot: '13:00 - 16:00', task: 'MacBook Pro Battery Replacement' },
  { id: 3, technician: 'Charlie', date: '2023-04-16', timeSlot: '10:00 - 13:00', task: 'Samsung Galaxy S21 Diagnostics' },
];

export default function TechnicianScheduling() {
  const [searchTerm, setSearchTerm] = useState('');
  const [schedules, setSchedules] = useState(dummySchedules);

  const filteredSchedules = schedules.filter(schedule =>
    schedule.technician.toLowerCase().includes(searchTerm.toLowerCase()) ||
    schedule.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Technician Scheduling</h3>
      <div className="flex justify-between mb-4">
        <Input
          type="text"
          placeholder="Search schedules..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>Add Schedule</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Technician</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time Slot</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSchedules.map((schedule) => (
            <TableRow key={schedule.id}>
              <TableCell>{schedule.id}</TableCell>
              <TableCell>{schedule.technician}</TableCell>
              <TableCell>{schedule.date}</TableCell>
              <TableCell>{schedule.timeSlot}</TableCell>
              <TableCell>{schedule.task}</TableCell>
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
