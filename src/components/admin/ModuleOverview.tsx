import React from 'react';
import { 
  ShoppingCart, 
  Truck, 
  Flower2, 
  Box, 
  Users, 
  BarChart3, 
  Tag, 
  Heart, 
  Settings, 
  ShieldCheck,
  ListFilter,
  CheckSquare,
  MapPin,
  UserCheck,
  Package,
  Layers,
  UserCircle,
  PieChart,
  CircleDollarSign,
  Ticket,
  Percent,
  Repeat,
  Bell,
  Globe,
  Users2,
  Clock,
  Map,
  Zap,
  Printer,
  MessageSquare,
  UserPlus,
  ArrowRightLeft,
  Search,
  FileText,
  CreditCard,
  Target
} from "lucide-react";
import { ModuleCard, ModuleField } from "./ModuleCard";

export const ModuleOverview: React.FC = () => {
  return (
    <div className="space-y-10 p-4 lg:p-8 pt-0">
      
      {/* 1. Orders Management */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <ShoppingCart className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-base font-black text-slate-900 dark:text-slate-100 tracking-tight">1. Order Management</h2>
          </div>
          <div className="h-px flex-1 mx-6 bg-gradient-to-r from-emerald-100 to-transparent dark:from-emerald-900/20" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ModuleCard title="Order List & Deep Filters" icon={ListFilter} badge="Main View">
            <ModuleField icon={Target} label="Core Tracking" value="Auto-generated #ID, Real-time status tags" />
            <ModuleField icon={Users} label="Stakeholders" value="Customer Profile vs Recipient details" />
            <ModuleField icon={Clock} label="Temporal" value="Order date vs Promised delivery slot" />
            <ModuleField icon={Layers} label="Product Mix" value="Bouquet size, Flower types, Custom add-ons" />
            <ModuleField icon={MessageSquare} label="Personalization" value="Message card text, Special instructions" />
            <ModuleField icon={CreditCard} label="Financials" value="Total, Delivery fee, Tax (16%), Discounts" />
            <ModuleField icon={ArrowRightLeft} label="Source" value="Website, WhatsApp, Phone, Walk-in" />
            <ModuleField icon={Search} label="Searchable" value="Filter by driver, area, channel, or date" />
          </ModuleCard>

          <ModuleCard title="Actions & Flow Control" icon={Zap} badge="Workflow" badgeVariant="success">
            <ModuleField icon={CheckSquare} label="Status Sync" value="One-click status updates with audit log" />
            <ModuleField icon={Printer} label="Florist Hub" value="Print work tickets with floral recipes" />
            <ModuleField icon={Printer} label="Logistics" value="Print delivery slips with location QR" />
            <ModuleField icon={MessageSquare} label="Communication" value="Send WhatsApp / SMS status updates" />
            <ModuleField icon={UserPlus} label="Dispatching" value="Manually assign Drivers or Florists" />
            <ModuleField icon={ArrowRightLeft} label="Adjustments" value="Refunds, Partial refunds, Order edits" />
            <ModuleField icon={Clock} label="History" value="Full audit trail of every status change" />
            <ModuleField icon={FileText} label="Bulk Ops" value="CSV Exports, Multi-order status updates" />
          </ModuleCard>
        </div>
      </section>

      {/* 2. Delivery & Dispatch */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Truck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-base font-black text-slate-900 dark:text-slate-100 tracking-tight">2. Delivery & Dispatch</h2>
          </div>
          <div className="h-px flex-1 mx-6 bg-gradient-to-r from-emerald-100 to-transparent dark:from-emerald-900/20" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ModuleCard title="Delivery Master Board" icon={Map} badge="Critical" badgeVariant="warning">
            <ModuleField icon={Clock} label="Time Slots" value="Morning / Afternoon run management" />
            <ModuleField icon={MapPin} label="Live Map" value="Real-time pins of all daily deliveries" />
            <ModuleField icon={Zap} label="Route Opt" value="AI-driven path optimization for drivers" />
            <ModuleField icon={UserCheck} label="GPS Tracking" value="Monitor live driver location on-map" />
            <ModuleField icon={Package} label="Proof of Life" value="Photo upload + Digital signature capture" />
            <ModuleField icon={Globe} label="Geo-fencing" value="Zone-based delivery fees & blockouts" />
          </ModuleCard>

          <ModuleCard title="Fleet Management" icon={Users2}>
            <ModuleField label="Profiles" value="Driver info, Vehicle docs, License tracking" />
            <ModuleField label="Workload" value="Daily order limit per driver / time slot" />
            <ModuleField label="Efficiency" value="On-time delivery percentage per staff" />
            <ModuleField label="Finance" value="Driver earnings & commission tracker" />
          </ModuleCard>
        </div>
      </section>

      {/* 3. Product & Inventory */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Flower2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-base font-black text-slate-900 dark:text-slate-100 tracking-tight">3. Catalog & Inventory</h2>
          </div>
          <div className="h-px flex-1 mx-6 bg-gradient-to-r from-emerald-100 to-transparent dark:from-emerald-900/20" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ModuleCard title="Product Intel" icon={Package} className="xl:col-span-1">
            <ModuleField label="Basic" value="Name, SKU, Categories, Status" />
            <ModuleField label="Visuals" value="Gallery, Hero Image, Alt Text" />
            <ModuleField label="SEO" value="Meta titles, Slugs, Descriptions" />
          </ModuleCard>

          <ModuleCard title="Pricing Engine" icon={CreditCard} className="xl:col-span-1">
            <ModuleField label="Dynamics" value="Base price vs Sale price (dated)" />
            <ModuleField label="Variations" value="Size (S/M/L), Stem Count, Add-ons" />
            <ModuleField label="Logic" value="Tax classes, Shipping weight calc" />
          </ModuleCard>

          <ModuleCard title="Stock Control" icon={Box} className="xl:col-span-1" badge="Perishable" badgeVariant="warning">
            <ModuleField label="Flowers" value="Variety, Stems, Freshness Tracking" />
            <ModuleField label="Alerts" value="Low stock auto-notifications" />
            <ModuleField label="Supplies" value="Wrapping, Ribbons, Vases, Cards" />
          </ModuleCard>
        </div>
      </section>

      {/* 4. CRM & Analytics */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-base font-black text-slate-900 dark:text-slate-100 tracking-tight">4. CRM & Business Intelligence</h2>
          </div>
          <div className="h-px flex-1 mx-6 bg-gradient-to-r from-emerald-100 to-transparent dark:from-emerald-900/20" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ModuleCard title="Customer CRM" icon={UserCircle}>
            <ModuleField label="Profile" value="LTV, Avg Order Value, Order History" />
            <ModuleField label="Occasions" value="Saved Birthdays / Anniversary Alerts" />
            <ModuleField label="Preferences" value="Flower dislikes, Pet-safe only notes" />
          </ModuleCard>

          <ModuleCard title="Business Analytics" icon={BarChart3}>
            <ModuleField label="Sales" value="Revenue by Area, Category, Channel" />
            <ModuleField label="Trends" value="Seasonal spikes, Heatmap of orders" />
            <ModuleField label="Retention" value="New vs Returning, Cart Abandonment" />
          </ModuleCard>
        </div>
      </section>

      {/* 5. Marketing, Subscriptions, System */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Tag className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-base font-black text-slate-900 dark:text-slate-100 tracking-tight">5. Marketing & System Control</h2>
          </div>
          <div className="h-px flex-1 mx-6 bg-gradient-to-r from-emerald-100 to-transparent dark:from-emerald-900/20" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ModuleCard title="Marketing" icon={Ticket}>
            <ModuleField label="Promo" value="Coupons, Flash Sales, Bundles" />
            <ModuleField label="Loyalty" value="Points per KES spent program" />
          </ModuleCard>

          <ModuleCard title="Subscriptions" icon={Heart} badge="Revenue">
            <ModuleField label="Plans" value="Weekly / Monthly recurring orders" />
            <ModuleField label="Control" value="Skip delivery, Auto-charge status" />
          </ModuleCard>

          <ModuleCard title="System & Roles" icon={ShieldCheck}>
            <ModuleField label="RBAC" value="Super Admin, Manager, Florist Roles" />
            <ModuleField label="Config" value="M-Pesa Paybill, Business Hours, VAT" />
          </ModuleCard>
        </div>
      </section>

    </div>
  );
};
