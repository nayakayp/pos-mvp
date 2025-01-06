'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Pencil, Trash2 } from 'lucide-react';
import PurchaseOrderForm from './PurchaseOrderForm';

// Dummy data for purchase orders
const initialPurchaseOrders = [
  { id: 1, supplier: 'Acme Corp', date: '2023-04-15', total: 1500, status: 'Pending' },
  { id: 2, supplier: 'TechSupply Inc', date: '2023-04-10', total: 2200, status: 'Shipped' },
  { id: 3, supplier: 'Global Parts Ltd', date: '2023-04-05', total: 1800, status: 'Delivered' },
  { id: 4, supplier: 'Acme Corp', date: '2023-04-01', total: 3000, status: 'Pending' },
];

export default function PurchaseOrderHandling() {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState(initialPurchaseOrders);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  const filteredOrders = orders.filter(order =>
    order.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, { ...newOrder, id: orders.length + 1 }]);
    setIsDialogOpen(false);
  };

  const handleEditOrder = (updatedOrder) => {
    setOrders(orders.map(order => 
      order.id === updatedOrder.id ? updatedOrder : order
    ));
    setIsDialogOpen(false);
    setEditingOrder(null);
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const openEditDialog = (order) => {
    setEditingOrder(order);
    setIsDialogOpen(true);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Purchase Order Handling</h3>
      <div className="flex justify-between mb-4">
        <Input
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingOrder(null)}>Create Order</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingOrder ? 'Edit Purchase Order' : 'Create New Purchase Order'}</DialogTitle>
            </DialogHeader>
            <PurchaseOrderForm
              onSubmit={editingOrder ? handleEditOrder : handleAddOrder}
              initialData={editingOrder}
            />
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.supplier}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>
                <Badge variant={order.status === 'Delivered' ? 'success' : order.status === 'Shipped' ? 'warning' : 'default'}>
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => openEditDialog(order)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteOrder(order.id)}>
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
