import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  UserPlus, 
  Key, 
  Settings, 
  Lock,
  Eye,
  Edit,
  Trash2,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockStaff = [
  { id: 1, name: "Admin User", role: "Super Admin", email: "admin@marigold.com", lastActive: "Online Now", status: "Active" },
  { id: 2, name: "Jane Smith", role: "Manager", email: "jane.s@marigold.com", lastActive: "2 hours ago", status: "Active" },
  { id: 3, name: "Robert Wilson", role: "Dispatcher", email: "r.wilson@marigold.com", lastActive: "Yesterday", status: "Inactive" },
];

export const StaffView: React.FC = () => {
  return (
    <div className="space-y-6 px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-slate-100">Staff & Permissions</h2>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 opacity-60">Manage team roles and access levels</p>
        </div>
        <Button className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-xs uppercase tracking-wider">
          <UserPlus className="h-4 w-4 mr-2" /> Add Staff Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockStaff.map((staff, i) => (
          <motion.div
            key={staff.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl rounded-2xl overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center border border-slate-200/50 dark:border-slate-800/50">
                    <ShieldCheck className={`h-6 w-6 ${staff.role === 'Super Admin' ? 'text-purple-500' : 'text-blue-500'}`} />
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-slate-900 dark:text-slate-100">{staff.name}</h3>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{staff.email}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Role</span>
                    <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest rounded-full border-slate-200/50">
                      {staff.role}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Active</span>
                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">{staff.lastActive}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</span>
                    <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest ${
                      staff.status === 'Active' ? 'text-emerald-500' : 'text-slate-400'
                    }`}>
                      <div className={`h-1.5 w-1.5 rounded-full ${staff.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                      {staff.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-slate-100/50 dark:border-slate-900/50">
                  <Button variant="ghost" size="sm" className="flex-1 rounded-xl text-[9px] font-black uppercase tracking-widest">
                    <Key className="h-3 w-3 mr-1.5" /> Permissions
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-xl hover:bg-red-50 text-red-500">
                    <Trash2 className="h-3.5 w-3.5" />
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
