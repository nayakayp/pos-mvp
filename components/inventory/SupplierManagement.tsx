'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Pencil, Trash2 } from 'lucide-react';
import SupplierForm from './SupplierForm';

// Dummy data for suppliers
const initialSupplierData = [
  { id: 1, name: 'Acme Corp', contact: 'John Doe', phone: '123-456-7890', email: 'john@acme.com' },
  { id: 2, name: 'TechSupply Inc', contact: 'Jane Smith', phone: '987-654-3210', email: 'jane@techsupply.com' },
  { id: 3, name: 'Global Parts Ltd', contact: 'Bob Johnson', phone: '555-123-4567', email: 'bob@globalparts.com' },
];

export default function SupplierManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suppliers, setSuppliers] = useState(initialSupplierData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState(null);

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddSupplier = (newSupplier) => {
    setSuppliers([...suppliers, { ...newSupplier, id: suppliers.length + 1 }]);
    setIsDialogOpen(false);
  };

  const handleEditSupplier = (updatedSupplier) => {
    setSuppliers(suppliers.map(supplier => 
      supplier.id === updatedSupplier.id ? updatedSupplier : supplier
    ));
    setIsDialogOpen(false);
    setEditingSupplier(null);
  };

  const handleDeleteSupplier = (id) => {
    setSuppliers(suppliers.filter(supplier => supplier.id !== id));
  };

  const openEditDialog = (supplier) => {
    setEditingSupplier(supplier);
    setIsDialogOpen(true);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Supplier Management</h3>
      <div className="flex justify-between mb-4">
        <Input
          type="text"
          placeholder="Search suppliers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingSupplier(null)}>Add Supplier</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingSupplier ? 'Edit Supplier' : 'Add New Supplier'}</DialogTitle>
            </DialogHeader>
            <SupplierForm
              onSubmit={editingSupplier ? handleEditSupplier : handleAddSupplier}
              initialData={editingSupplier}
            />
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Supplier Name</TableHead>
            <TableHead>Contact Person</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSuppliers.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.contact}</TableCell>
              <TableCell>{supplier.phone}</TableCell>
              <TableCell>{supplier.email}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => openEditDialog(supplier)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteSupplier(supplier.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
