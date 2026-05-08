import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { DashboardStats } from "@/components/admin/DashboardStats"
import { ModuleOverview } from "@/components/admin/ModuleOverview"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

import { OrdersView } from "@/components/admin/views/OrdersView"
import { ProductsView } from "@/components/admin/views/ProductsView"
import { CustomersView } from "@/components/admin/views/CustomersView"
import { StaffView } from "@/components/admin/views/StaffView"
import { LogisticsView } from "@/components/admin/views/LogisticsView"
import { AnalyticsView } from "@/components/admin/views/AnalyticsView"
import { FlowerIcon } from "lucide-react"

export default function AdminDashboard() {
  const [activeView, setActiveView] = useState("Dashboard")

  const renderContent = () => {
    switch (activeView) {
      case "Main Dashboard":
      case "Dashboard":
        return (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <DashboardStats />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ModuleOverview />
            </motion.div>
          </>
        )
      case "Live Orders":
      case "Order List & Details":
        return <OrdersView />
      case "Dispatch Board":
      case "Delivery Logistics":
        return <LogisticsView />
      case "Product Catalog":
      case "Flower Management":
        return <ProductsView />
      case "Customer List":
      case "CRM Dashboard":
        return <CustomersView />
      case "Financial Reports":
      case "Analytics Dashboard":
        return <AnalyticsView />
      case "Staff & Permissions":
      case "Team Management":
        return <StaffView />
      default:
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center min-h-[400px] text-center px-8"
          >
            <div className="p-6 rounded-full bg-emerald-500/10 mb-6">
              <FlowerIcon className="h-12 w-12 text-emerald-500 animate-pulse" />
            </div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100 uppercase">
              {activeView}
            </h2>
            <p className="text-slate-500 mt-2 font-bold uppercase tracking-[0.2em] text-[10px] opacity-60">
              System is synchronizing real-time {activeView.toLowerCase()} data...
            </p>
          </motion.div>
        )
    }
  }

  return (
    <TooltipProvider>
      <SidebarProvider className="font-sans antialiased">
        <AppSidebar variant="floating" onNavigate={setActiveView} activeView={activeView} />
        <SidebarInset className="bg-slate-50/50 dark:bg-slate-950/50 min-h-screen overflow-hidden">
          <SiteHeader />
          <div className="flex flex-1 flex-col gap-12 pb-24">

            {/* Dashboard Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="px-8 pt-8 pb-0"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-3">
                    <div className="h-7 w-1.5 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
                    {activeView === "Dashboard" ? "Control Centre" : activeView}
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 mt-1 font-bold text-xs tracking-widest uppercase opacity-60">
                    Marigold Flowers Ecommerce · {activeView === "Dashboard" ? "Administration" : "Module Management"}
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-1.5 px-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Staff" className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-900 dark:text-slate-100">3 Staff Online</span>
                    <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                      <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" /> Live
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {renderContent()}

          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
