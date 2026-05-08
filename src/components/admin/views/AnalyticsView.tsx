import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  PieChart, 
  ArrowUpRight, 
  ArrowDownRight,
  Download,
  Calendar
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "Net Revenue", val: "KES 1.2M", trend: "+12.5%", isUp: true },
  { label: "Gross Margin", val: "42%", trend: "+2.1%", isUp: true },
  { label: "Operating Costs", val: "KES 420K", trend: "-4.5%", isUp: false },
  { label: "Avg Ticket", val: "KES 4,850", trend: "+8.2%", isUp: true },
];

export const AnalyticsView: React.FC = () => {
  return (
    <div className="space-y-8 px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-slate-100">Financial Reports</h2>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 opacity-60">Deep dive into revenue, costs, and growth metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-xl border-slate-200/50 font-bold text-xs uppercase tracking-wider">
            <Calendar className="h-3.5 w-3.5 mr-2" /> This Month
          </Button>
          <Button className="rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs uppercase tracking-wider">
            <Download className="h-3.5 w-3.5 mr-2" /> Download Report
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl rounded-2xl p-5">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="font-black text-xl text-slate-900 dark:text-slate-100">{m.val}</h3>
                <span className={`flex items-center text-[10px] font-black ${m.isUp ? 'text-emerald-500' : 'text-red-500'}`}>
                  {m.isUp ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
                  {m.trend}
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Chart Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px]">
          <BarChart3 className="h-12 w-12 text-slate-200 dark:text-slate-800 mb-4" />
          <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em]">Revenue Growth Visualization</p>
          <div className="w-full h-48 mt-8 bg-gradient-to-t from-emerald-500/5 to-transparent rounded-2xl border-b-2 border-emerald-500/20" />
        </Card>

        <Card className="border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl rounded-2xl p-8">
          <h3 className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-8">Revenue by Category</h3>
          <div className="space-y-6">
            {[
              { cat: "Wedding Bouquets", perc: "45%", color: "bg-emerald-500" },
              { cat: "Corporate Gifts", perc: "25%", color: "bg-blue-500" },
              { cat: "Event Stems", perc: "20%", color: "bg-purple-500" },
              { cat: "Other", perc: "10%", color: "bg-slate-400" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">{item.cat}</span>
                  <span className="text-[10px] font-black text-slate-900 dark:text-slate-100">{item.perc}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color}`} style={{ width: item.perc }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
