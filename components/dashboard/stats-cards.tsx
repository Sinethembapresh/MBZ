import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, DollarSign, Users, TrendingUp } from "lucide-react"

interface StatsCardsProps {
  role: "admin" | "manager" | "officer" | "borrower"
}

export function StatsCards({ role }: StatsCardsProps) {
  // Mock data - will be replaced with real data
  const stats = getStatsForRole(role)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function getStatsForRole(role: string) {
  if (role === "admin") {
    return [
      { label: "Total Loans", value: "1,234", change: "+12% from last month", icon: FileText },
      { label: "Active Borrowers", value: "892", change: "+8% from last month", icon: Users },
      { label: "Total Disbursed", value: "$2.4M", change: "+15% from last month", icon: DollarSign },
      { label: "Collection Rate", value: "94.2%", change: "+2.1% from last month", icon: TrendingUp },
    ]
  }

  if (role === "manager") {
    return [
      { label: "Branch Loans", value: "247", change: "+5% from last month", icon: FileText },
      { label: "Active Borrowers", value: "178", change: "+3% from last month", icon: Users },
      { label: "Branch Disbursed", value: "$480K", change: "+10% from last month", icon: DollarSign },
      { label: "Collection Rate", value: "96.1%", change: "+1.5% from last month", icon: TrendingUp },
    ]
  }

  if (role === "officer") {
    return [
      { label: "My Loans", value: "42", change: "+3 this week", icon: FileText },
      { label: "Pending Approval", value: "8", change: "2 urgent", icon: FileText },
      { label: "Total Portfolio", value: "$96K", change: "+$12K this month", icon: DollarSign },
      { label: "Collection Rate", value: "97.5%", change: "+0.8% from last month", icon: TrendingUp },
    ]
  }

  // Borrower
  return [
    { label: "Active Loans", value: "2", change: "In good standing", icon: FileText },
    { label: "Total Borrowed", value: "$15K", change: "$12K remaining", icon: DollarSign },
    { label: "Next Payment", value: "$450", change: "Due in 5 days", icon: DollarSign },
    { label: "Credit Score", value: "720", change: "+15 this quarter", icon: TrendingUp },
  ]
}
