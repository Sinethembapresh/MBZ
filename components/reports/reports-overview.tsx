"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  FileText,
  Building2,
  Download,
  Calendar,
  BarChart3,
  PieChart,
} from "lucide-react"

interface ReportsOverviewProps {
  role: "admin" | "manager"
}

export function ReportsOverview({ role }: ReportsOverviewProps) {
  const [period, setPeriod] = useState("month")

  // Mock data
  const metrics = {
    totalDisbursed: 5090000,
    totalCollected: 4250000,
    activeLoans: 184,
    collectionRate: 94.5,
    overdueAmount: 125000,
    newApplications: 45,
    approvalRate: 78,
    averageLoanSize: 18500,
  }

  const branchPerformance = [
    { name: "Downtown Branch", loans: 45, disbursed: 1250000, collected: 1180000, rate: 94.4 },
    { name: "Westside Branch", loans: 32, disbursed: 890000, collected: 845000, rate: 94.9 },
    { name: "Eastside Branch", loans: 28, disbursed: 720000, collected: 680000, rate: 94.4 },
    { name: "Northgate Branch", loans: 38, disbursed: 1050000, collected: 995000, rate: 94.8 },
    { name: "Southpoint Branch", loans: 41, disbursed: 1180000, collected: 1100000, rate: 93.2 },
  ]

  const loansByPurpose = [
    { purpose: "Business", count: 68, amount: 1890000, percentage: 37 },
    { purpose: "Education", count: 42, amount: 980000, percentage: 23 },
    { purpose: "Medical", count: 28, amount: 720000, percentage: 15 },
    { purpose: "Home Improvement", count: 31, amount: 890000, percentage: 17 },
    { purpose: "Other", count: 15, amount: 610000, percentage: 8 },
  ]

  const monthlyTrends = [
    { month: "Jan", disbursed: 850000, collected: 720000 },
    { month: "Feb", disbursed: 920000, collected: 780000 },
    { month: "Mar", disbursed: 1050000, collected: 890000 },
    { month: "Apr", disbursed: 980000, collected: 920000 },
    { month: "May", disbursed: 1100000, collected: 940000 },
  ]

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Calendar className="h-4 w-4" />
              Custom Date
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export Excel
            </Button>
          </div>
        </div>
      </Card>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Disbursed</p>
              <p className="mt-2 text-2xl font-bold">${(metrics.totalDisbursed / 1000000).toFixed(2)}M</p>
              <div className="mt-2 flex items-center gap-1 text-sm text-success">
                <TrendingUp className="h-4 w-4" />
                <span>+12.5%</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Collected</p>
              <p className="mt-2 text-2xl font-bold">${(metrics.totalCollected / 1000000).toFixed(2)}M</p>
              <div className="mt-2 flex items-center gap-1 text-sm text-success">
                <TrendingUp className="h-4 w-4" />
                <span>+8.3%</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
              <DollarSign className="h-6 w-6 text-success" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Loans</p>
              <p className="mt-2 text-2xl font-bold">{metrics.activeLoans}</p>
              <div className="mt-2 flex items-center gap-1 text-sm text-success">
                <TrendingUp className="h-4 w-4" />
                <span>+5.2%</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <FileText className="h-6 w-6 text-accent" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Collection Rate</p>
              <p className="mt-2 text-2xl font-bold">{metrics.collectionRate}%</p>
              <div className="mt-2 flex items-center gap-1 text-sm text-destructive">
                <TrendingDown className="h-4 w-4" />
                <span>-1.2%</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10">
              <BarChart3 className="h-6 w-6 text-warning" />
            </div>
          </div>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Overdue Amount</p>
          <p className="mt-2 text-xl font-bold text-destructive">${(metrics.overdueAmount / 1000).toFixed(0)}K</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">New Applications</p>
          <p className="mt-2 text-xl font-bold">{metrics.newApplications}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Approval Rate</p>
          <p className="mt-2 text-xl font-bold">{metrics.approvalRate}%</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Avg Loan Size</p>
          <p className="mt-2 text-xl font-bold">${metrics.averageLoanSize.toLocaleString()}</p>
        </Card>
      </div>

      {/* Branch Performance */}
      {role === "admin" && (
        <Card className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Branch Performance</h2>
            </div>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Branch</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Active Loans</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Disbursed</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Collected</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Collection Rate</th>
                </tr>
              </thead>
              <tbody>
                {branchPerformance.map((branch, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-4 font-medium">{branch.name}</td>
                    <td className="py-4 text-right">{branch.loans}</td>
                    <td className="py-4 text-right font-semibold">${(branch.disbursed / 1000).toFixed(0)}K</td>
                    <td className="py-4 text-right font-semibold">${(branch.collected / 1000).toFixed(0)}K</td>
                    <td className="py-4 text-right">
                      <span className={`font-semibold ${branch.rate >= 94.5 ? "text-success" : "text-warning"}`}>
                        {branch.rate}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Loans by Purpose */}
      <Card className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <PieChart className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-xl font-semibold">Loans by Purpose</h2>
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        <div className="space-y-4">
          {loansByPurpose.map((item, index) => (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">{item.purpose}</span>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">{item.count} loans</span>
                  <span className="font-semibold">${(item.amount / 1000).toFixed(0)}K</span>
                  <span className="w-12 text-right text-muted-foreground">{item.percentage}%</span>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-primary transition-all" style={{ width: `${item.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Monthly Trends */}
      <Card className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
              <BarChart3 className="h-5 w-5 text-success" />
            </div>
            <h2 className="text-xl font-semibold">Monthly Trends</h2>
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        <div className="space-y-6">
          {monthlyTrends.map((month, index) => (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium">{month.month}</span>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Disbursed:</span>
                    <span className="font-semibold">${(month.disbursed / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-success" />
                    <span className="text-muted-foreground">Collected:</span>
                    <span className="font-semibold">${(month.collected / 1000).toFixed(0)}K</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-8 flex-1 overflow-hidden rounded bg-muted">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${(month.disbursed / 1100000) * 100}%` }}
                  />
                </div>
                <div className="h-8 flex-1 overflow-hidden rounded bg-muted">
                  <div
                    className="h-full bg-success transition-all"
                    style={{ width: `${(month.collected / 1100000) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Reports */}
      <Card className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Quick Reports</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Button variant="outline" className="h-auto flex-col gap-2 bg-transparent p-6">
            <Users className="h-8 w-8 text-primary" />
            <span className="font-semibold">Borrower Report</span>
            <span className="text-xs text-muted-foreground">All borrower details</span>
          </Button>
          <Button variant="outline" className="h-auto flex-col gap-2 bg-transparent p-6">
            <FileText className="h-8 w-8 text-accent" />
            <span className="font-semibold">Loan Portfolio</span>
            <span className="text-xs text-muted-foreground">Complete loan overview</span>
          </Button>
          <Button variant="outline" className="h-auto flex-col gap-2 bg-transparent p-6">
            <DollarSign className="h-8 w-8 text-success" />
            <span className="font-semibold">Payment History</span>
            <span className="text-xs text-muted-foreground">All transactions</span>
          </Button>
          <Button variant="outline" className="h-auto flex-col gap-2 bg-transparent p-6">
            <TrendingUp className="h-8 w-8 text-warning" />
            <span className="font-semibold">Overdue Report</span>
            <span className="text-xs text-muted-foreground">Late payments</span>
          </Button>
          <Button variant="outline" className="h-auto flex-col gap-2 bg-transparent p-6">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="font-semibold">Branch Summary</span>
            <span className="text-xs text-muted-foreground">Performance by branch</span>
          </Button>
          <Button variant="outline" className="h-auto flex-col gap-2 bg-transparent p-6">
            <BarChart3 className="h-8 w-8 text-accent" />
            <span className="font-semibold">Financial Report</span>
            <span className="text-xs text-muted-foreground">Income & expenses</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}
