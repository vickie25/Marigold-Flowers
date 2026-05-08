import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  MoreHorizontal, 
  ChevronRight, 
  Printer, 
  Download,
  Package,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mockOrders = [
  { id: "#MAR-4829", customer: "Sarah Johnson", items: "3 Items", total: "KES 5,200", status: "Processing", type: "Standard", date: "Today, 10:30 AM" },
  { id: "#MAR-4828", customer: "David Kimani", items: "1 Item", total: "KES 1,800", status: "Shipped", type: "Express", date: "Today, 09:15 AM" },
  { id: "#MAR-4827", customer: "Mary Wanjiku", items: "5 Items", total: "KES 12,500", status: "Delivered", type: "Standard", date: "Yesterday" },
  { id: "#MAR-4826", customer: "James Omondi", items: "2 Items", total: "KES 3,400", status: "Pending", type: "Standard", date: "Yesterday" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Processing': return 'bg-blue-500/10 text-blue-600';
    case 'Shipped': return 'bg-amber-500/10 text-amber-600';
    case 'Delivered': return 'bg-emerald-500/10 text-emerald-600';
    case 'Pending': return 'bg-slate-500/10 text-slate-600';
    default: return 'bg-slate-500/10 text-slate-600';
  }
};

export const OrdersView: React.FC = () => {
  return (
    <div className="space-y-6 px-8">
      {/* View Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white/50 dark:bg-slate-900/50 p-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 flex items-center gap-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search orders, customers..." 
              className="bg-transparent border-none outline-none text-sm font-bold placeholder:text-slate-400 w-64"
            />
          </div>
          <Button variant="outline" size="sm" className="rounded-xl border-slate-200/50 font-bold text-xs uppercase tracking-wider">
            <Filter className="h-3.5 w-3.5 mr-2" /> Filters
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-xl border-slate-200/50 font-bold text-xs uppercase tracking-wider">
            <Download className="h-3.5 w-3.5 mr-2" /> Export
          </Button>
          <Button size="sm" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-xs uppercase tracking-wider">
            <Printer className="h-3.5 w-3.5 mr-2" /> Batch Print
          </Button>
        </div>
      </div>

      {/* Orders Table-like Grid */}
      <div className="space-y-3">
        {mockOrders.map((order, i) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl rounded-2xl hover:bg-white/60 dark:hover:bg-slate-900/60 transition-colors group cursor-pointer">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 font-black text-xs">
                    {order.type === 'Express' ? <Clock className="h-5 w-5 text-amber-500" /> : <Package className="h-5 w-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-sm tracking-tight text-slate-900 dark:text-slate-100">{order.id}</span>
                      <Badge variant="outline" className={`text-[9px] uppercase tracking-widest font-black py-0 px-2 rounded-full border-none ${getStatusColor(order.status)}`}>
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">{order.customer} · {order.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-right hidden md:block">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Items</p>
                    <p className="font-bold text-sm text-slate-900 dark:text-slate-100">{order.items}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total</p>
                    <p className="font-black text-sm text-slate-900 dark:text-slate-100">{order.total}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
