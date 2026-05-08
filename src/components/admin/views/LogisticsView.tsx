import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  MapPin, 
  Navigation, 
  Clock, 
  User, 
  Phone,
  ArrowRight,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockDeliveries = [
  { id: "DLV-001", orderId: "#MAR-4829", driver: "Kamau N.", location: "Westlands, Nairobi", eta: "10 mins", status: "In Transit" },
  { id: "DLV-002", orderId: "#MAR-4828", driver: "Otieno J.", location: "Kilimani", eta: "Arrived", status: "Arrived" },
  { id: "DLV-003", orderId: "#MAR-4825", driver: "Mwangi P.", location: "Karen", eta: "35 mins", status: "Scheduled" },
];

export const LogisticsView: React.FC = () => {
  return (
    <div className="space-y-6 px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-slate-100">Dispatch & Logistics</h2>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 opacity-60">Real-time delivery tracking and driver management</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-xl border-slate-200/50 font-bold text-xs uppercase tracking-wider">
            Today's Schedule
          </Button>
          <Button className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-xs uppercase tracking-wider">
            <Navigation className="h-4 w-4 mr-2" /> Live Map
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Delivery List */}
        <div className="xl:col-span-2 space-y-4">
          {mockDeliveries.map((dlv, i) => (
            <motion.div
              key={dlv.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl rounded-2xl group overflow-hidden">
                <CardContent className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <Truck className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-black text-sm tracking-tight text-slate-900 dark:text-slate-100">{dlv.id}</span>
                        <Badge className={`font-black text-[8px] uppercase tracking-wider border-none ${
                          dlv.status === 'In Transit' ? 'bg-blue-500' : 
                          dlv.status === 'Arrived' ? 'bg-emerald-500' : 'bg-slate-500'
                        } text-white`}>
                          {dlv.status}
                        </Badge>
                      </div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Order {dlv.orderId} · {dlv.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-12">
                    <div className="hidden md:block">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Driver</p>
                      <p className="font-bold text-sm text-slate-900 dark:text-slate-100">{dlv.driver}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ETA</p>
                      <p className="font-black text-sm text-emerald-600">{dlv.eta}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-xl">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Driver Stats */}
        <div className="space-y-6">
          <Card className="border-slate-200/50 dark:border-slate-800/50 bg-emerald-500/5 dark:bg-emerald-500/10 backdrop-blur-xl rounded-2xl p-6">
            <h3 className="font-black text-sm text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-6">Logistics Overview</h3>
            <div className="space-y-4">
              {[
                { label: "Active Drivers", val: "8/12", color: "text-emerald-500" },
                { label: "Pending Pickups", val: "4", color: "text-amber-500" },
                { label: "Avg Delivery Time", val: "32m", color: "text-blue-500" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/40 dark:bg-slate-900/40">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                  <span className={`font-black text-sm ${stat.color}`}>{stat.val}</span>
                </div>
              ))}
            </div>
            <Button className="w-full mt-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] py-5">
              Generate Route Report
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
