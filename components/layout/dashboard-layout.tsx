"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Building2,
  LayoutDashboard,
  FileText,
  Users,
  CreditCard,
  DollarSign,
  BarChart3,
  Settings,
  LogOut,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface DashboardLayoutProps {
  children: ReactNode
  role: "admin" | "manager" | "officer" | "borrower"
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navigation = getNavigationForRole(role)

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="flex h-16 items-center gap-4 px-6">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">LoanFlow</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span className="text-sm text-muted-foreground capitalize">{role}</span>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 border-r bg-background pt-16 transition-transform lg:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <nav className="space-y-1 p-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:pl-64">
          <div className="container mx-auto p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

function getNavigationForRole(role: string) {
  const baseNav = [{ label: "Dashboard", href: `/${role}/dashboard`, icon: LayoutDashboard }]

  if (role === "admin") {
    return [
      ...baseNav,
      { label: "Branches", href: "/admin/branches", icon: Building2 },
      { label: "Users", href: "/admin/users", icon: Users },
      { label: "All Loans", href: "/admin/loans", icon: FileText },
      { label: "Collateral", href: "/admin/collateral", icon: CreditCard },
      { label: "Repayments", href: "/admin/repayments", icon: DollarSign },
      { label: "Reports", href: "/admin/reports", icon: BarChart3 },
      { label: "Settings", href: "/admin/settings", icon: Settings },
    ]
  }

  if (role === "manager") {
    return [
      ...baseNav,
      { label: "Branch Loans", href: "/manager/loans", icon: FileText },
      { label: "Staff", href: "/manager/staff", icon: Users },
      { label: "Collateral", href: "/manager/collateral", icon: CreditCard },
      { label: "Repayments", href: "/manager/repayments", icon: DollarSign },
      { label: "Reports", href: "/manager/reports", icon: BarChart3 },
    ]
  }

  if (role === "officer") {
    return [
      ...baseNav,
      { label: "My Loans", href: "/officer/loans", icon: FileText },
      { label: "Collateral", href: "/officer/collateral", icon: CreditCard },
      { label: "Repayments", href: "/officer/repayments", icon: DollarSign },
    ]
  }

  // Borrower
  return [
    ...baseNav,
    { label: "My Loans", href: "/borrower/loans", icon: FileText },
    { label: "Repayments", href: "/borrower/repayments", icon: DollarSign },
    { label: "Apply", href: "/apply", icon: FileText },
  ]
}
