import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { 
  LayoutDashboardIcon, 
  ShoppingCartIcon, 
  UsersIcon, 
  FileTextIcon, 
  Settings2Icon, 
  CircleHelpIcon, 
  CommandIcon,
  PackageIcon,
  ShieldCheckIcon
} from "lucide-react"

const data = {
  user: {
    name: "Admin User",
    email: "admin@marigold.com",
    avatar: "https://i.pravatar.cc/150?u=40",
  },
  navMain: [
    {
      title: "Overview",
      url: "/admin",
      icon: <LayoutDashboardIcon />,
      isActive: true,
      items: [
        {
          title: "Main Dashboard",
          url: "/admin",
        },
        {
          title: "Analytics Hub",
          url: "/admin/analytics",
        },
      ],
    },
    {
      title: "Order Flow",
      url: "#",
      icon: <ShoppingCartIcon />,
      items: [
        {
          title: "Live Orders",
          url: "/admin/orders",
        },
        {
          title: "Dispatch Board",
          url: "/admin/deliveries",
        },
        {
          title: "Order History",
          url: "/admin/orders/history",
        },
      ],
    },
    {
      title: "Store Management",
      url: "#",
      icon: <PackageIcon />,
      items: [
        {
          title: "Product Catalog",
          url: "/admin/products",
        },
        {
          title: "Inventory Tracking",
          url: "/admin/inventory",
        },
        {
          title: "Categories",
          url: "/admin/categories",
        },
        {
          title: "Discounts & Promo",
          url: "/admin/discounts",
        },
      ],
    },
    {
      title: "CRM & Social",
      url: "#",
      icon: <UsersIcon />,
      items: [
        {
          title: "Customer List",
          url: "/admin/customers",
        },
        {
          title: "Subscriptions",
          url: "/admin/subscriptions",
        },
        {
          title: "Reviews & Feedback",
          url: "/admin/reviews",
        },
        {
          title: "WhatsApp Logs",
          url: "/admin/whatsapp",
        },
      ],
    },
    {
      title: "Business Content",
      url: "#",
      icon: <FileTextIcon />,
      items: [
        {
          title: "Media Library",
          url: "/admin/media",
        },
        {
          title: "Blog & SEO",
          url: "/admin/blog",
        },
        {
          title: "Email Templates",
          url: "/admin/emails",
        },
        {
          title: "Financial Reports",
          url: "/admin/reports",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "System Settings",
      url: "/admin/settings",
      icon: <Settings2Icon />,
    },
    {
      title: "Staff & Permissions",
      url: "/admin/staff",
      icon: <ShieldCheckIcon />,
    },
  ],
}

export function AppSidebar({ 
  onNavigate, 
  activeView, 
  ...props 
}: React.ComponentProps<typeof Sidebar> & { 
  onNavigate?: (view: string) => void,
  activeView?: string
}) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.("Dashboard") }}>
                <CommandIcon className="size-5!" />
                <span className="text-base font-black tracking-tight text-slate-900 dark:text-slate-100">Marigold Admin</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} onNavigate={onNavigate} activeView={activeView} />
        <NavSecondary items={data.navSecondary} className="mt-auto" onNavigate={onNavigate} activeView={activeView} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
