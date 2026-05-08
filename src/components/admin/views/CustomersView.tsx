import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  UserPlus, 
  Mail, 
  Phone, 
  MapPin, 
  History,
  TrendingUp,
  Star,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockCustomers = [
  { id: 1, name: "Sarah Johnson", email: "sarah.j@example.com", phone: "+254 712 345 678", orders: 14, spent: "KES 42,500", segment: "VIP", status: "Active" },
  { id: 2, name: "David Kimani", email: "dkimani@work.co.ke", phone: "+254 722 000 111", orders: 3, spent: "KES 8,200", segment: "Regular", status: "Active" },
  { id: 3, name: "Alice Mwangi", email: "alice.m@domain.com", phone: "+254 733 999 888", orders: 28, spent: "KES 112,000", segment: "VIP", status: "Inactive" },
];

export const CustomersView: React.FC = () => {
  return (
    <div className="space-y-6 px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="bg-white/50 dark:bg-slate-900/50 p-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 flex items-center gap-2">
          <Search className="h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search customers by name or email..." 
            className="bg-transparent border-none outline-none text-sm font-bold placeholder:text-slate-400 w-80"
          />
        </div>
        <Button className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-xs uppercase tracking-wider">
          <UserPlus className="h-4 w-4 mr-2" /> Add New Customer
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockCustomers.map((customer, i) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl rounded-2xl group hover:shadow-md transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center p-5 gap-6">
                  {/* Customer Info */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-inner">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-black text-base text-slate-900 dark:text-slate-100">{customer.name}</h3>
                        <Badge className={`font-black text-[8px] uppercase tracking-wider ${
                          customer.segment === 'VIP' ? 'bg-purple-500' : 'bg-blue-500'
                        } text-white border-none`}>
                          {customer.segment}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-slate-500">
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"><Mail className="h-3 w-3" /> {customer.email}</span>
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"><Phone className="h-3 w-3" /> {customer.phone}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:flex md:items-center gap-8 px-6 md:border-x border-slate-200/50 dark:border-slate-800/50">
                    <div className="text-center md:text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Orders</p>
                      <p className="font-black text-lg text-slate-900 dark:text-slate-100">{customer.orders}</p>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Lifetime Spent</p>
                      <p className="font-black text-lg text-emerald-600 dark:text-emerald-400">{customer.spent}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" className="rounded-xl font-bold text-[10px] uppercase tracking-wider">
                      <History className="h-3.5 w-3.5 mr-2" /> History
                    </Button>
                    <Button variant="outline" className="rounded-xl border-slate-200/50 font-bold text-[10px] uppercase tracking-wider">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
