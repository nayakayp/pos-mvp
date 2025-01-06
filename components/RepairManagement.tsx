'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import IncomingRepairRequests from './repair/IncomingRepairRequests';
import RepairProcessManagement from './repair/RepairProcessManagement';
import TechnicianScheduling from './repair/TechnicianScheduling';
import PartsTrackingAndBilling from './repair/PartsTrackingAndBilling';

export default function RepairManagement() {
  const [activeTab, setActiveTab] = useState('incoming');

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Repair Management</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="incoming">Incoming Repair Requests</TabsTrigger>
          <TabsTrigger value="process">Repair Process Management</TabsTrigger>
          <TabsTrigger value="scheduling">Technician Scheduling</TabsTrigger>
          <TabsTrigger value="parts">Parts Tracking and Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="incoming">
          <IncomingRepairRequests />
        </TabsContent>
        <TabsContent value="process">
          <RepairProcessManagement />
        </TabsContent>
        <TabsContent value="scheduling">
          <TechnicianScheduling />
        </TabsContent>
        <TabsContent value="parts">
          <PartsTrackingAndBilling />
        </TabsContent>
      </Tabs>
    </div>
  );
}
