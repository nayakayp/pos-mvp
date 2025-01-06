'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StockLevelTracking from './inventory/StockLevelTracking';
import SupplierManagement from './inventory/SupplierManagement';
import PurchaseOrderHandling from './inventory/PurchaseOrderHandling';
import SalesDataAnalysis from './inventory/SalesDataAnalysis';

export default function InventoryManagement() {
  const [activeTab, setActiveTab] = useState('stock');

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="stock">Stock Level Tracking</TabsTrigger>
          <TabsTrigger value="suppliers">Supplier Management</TabsTrigger>
          <TabsTrigger value="purchase">Purchase Order Handling</TabsTrigger>
          <TabsTrigger value="sales">Sales Data Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="stock">
          <StockLevelTracking />
        </TabsContent>
        <TabsContent value="suppliers">
          <SupplierManagement />
        </TabsContent>
        <TabsContent value="purchase">
          <PurchaseOrderHandling />
        </TabsContent>
        <TabsContent value="sales">
          <SalesDataAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  );
}
