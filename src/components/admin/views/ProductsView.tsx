import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Grid, 
  List, 
  Filter, 
  Flower2, 
  TrendingUp, 
  AlertTriangle,
  Edit2,
  Trash2,
  MoreVertical
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockProducts = [
  { id: 1, name: "Sunset Majesty Bouquet", category: "Bouquets", price: "KES 4,500", stock: 12, status: "Active", image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=200&auto=format&fit=crop" },
  { id: 2, name: "Pure White Lilies", category: "Stems", price: "KES 2,200", stock: 4, status: "Low Stock", image: "https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?q=80&w=200&auto=format&fit=crop" },
  { id: 3, name: "Red Rose Box", category: "Luxury", price: "KES 8,500", stock: 0, status: "Out of Stock", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=200&auto=format&fit=crop" },
  { id: 4, name: "Daily Joy Tulips", category: "Seasonal", price: "KES 3,000", stock: 24, status: "Active", image: "https://images.unsplash.com/photo-1520323147548-51c88559fc48?q=80&w=200&auto=format&fit=crop" },
];

export const ProductsView: React.FC = () => {
  return (
    <div className="space-y-6 px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white/50 dark:bg-slate-900/50 p-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 flex items-center gap-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-transparent border-none outline-none text-sm font-bold placeholder:text-slate-400 w-64"
            />
          </div>
          <div className="flex border border-slate-200/50 rounded-xl overflow-hidden">
            <Button variant="ghost" size="sm" className="rounded-none bg-slate-100 dark:bg-slate-900 px-3">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-none px-3 border-l border-slate-200/50">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-xs uppercase tracking-wider">
          <Plus className="h-4 w-4 mr-2" /> Add New Flower
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="overflow-hidden border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl rounded-2xl group transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={`font-black text-[8px] uppercase tracking-wider border-none ${
                    product.status === 'Active' ? 'bg-emerald-500 text-white' : 
                    product.status === 'Low Stock' ? 'bg-amber-500 text-white' : 
                    'bg-red-500 text-white'
                  }`}>
                    {product.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="font-black text-sm text-slate-900 dark:text-slate-100 mb-4 line-clamp-1">{product.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Price</p>
                    <p className="font-black text-base text-slate-900 dark:text-slate-100">{product.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Stock</p>
                    <p className={`font-black text-base ${product.stock <= 5 ? 'text-red-500' : 'text-slate-900 dark:text-slate-100'}`}>
                      {product.stock}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex-1 rounded-xl border-slate-200/50 text-[10px] font-bold uppercase tracking-wider">
                    <Edit2 className="h-3 w-3 mr-1.5" /> Edit
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-xl hover:bg-red-50 text-red-500 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
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
