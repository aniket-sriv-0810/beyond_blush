import React, { useState } from 'react'
import AdminPricingForm from '../../../components/Admin/Pricing/AddPricing'
import AdminPricingTable from '../../../components/Admin/Pricing/AdminPricingTable'

const AdminPricing = () => {
     const [editingId, setEditingId] = useState(null);

  const handleSave = () => {
    alert("Saved!");
    setEditingId(null);
  };
  return (
    <div className="p-8 bg-[#fff9f6] min-h-screen">
      <AdminPricingForm editId={editingId} onSaved={handleSave} />
      <div className="mt-12">
        <AdminPricingTable onEdit={setEditingId} />
      </div>
    </div>
  )
}

export default AdminPricing
