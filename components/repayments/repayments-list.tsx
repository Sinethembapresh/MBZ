"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, DollarSign, CheckCircle, Clock, AlertCircle, Plus } from "lucide-react"
import Link from "next/link"

// Mock data
const mockRepayments = [
  {
    id: "PAY-001",
    loanId: "LN-2024-001",
    borrower: "Alice Johnson",
    amount: 1337,
    dueDate: "2024-02-20",
    status: "upcoming",
    installmentNumber: 2,
    totalInstallments: 12,
    branch: "Downtown Branch",
  },
  {
    id: "PAY-002",
    loanId: "LN-2024-001",
    borrower: "Alice Johnson",
    amount: 1337,
    dueDate: "2024-01-20",
    paidDate: "2024-01-20",
    status: "paid",
    installmentNumber: 1,
    totalInstallments: 12,
    branch: "Downtown Branch",
  },
  {
    id: "PAY-003",
    loanId: "LN-2024-006",
    borrower: "Frank Miller",
    amount: 2150,
    dueDate: "2024-01-18",
    status: "overdue",
    installmentNumber: 3,
    totalInstallments: 24,
    branch: "Westside Branch",
    daysOverdue: 7,
  },
  {
    id: "PAY-004",
    loanId: "LN-2024-007",
    borrower: "Grace Lee",
    amount: 890,
    dueDate: "2024-02-15",
    status: "upcoming",
    installmentNumber: 5,
    totalInstallments: 6,
    branch: "Eastside Branch",
  },
]

const statusConfig = {
  paid: {
    label: "Paid",
    color: "bg-success/10 text-success hover:bg-success/20",
    icon: CheckCircle,
  },
  upcoming: {
    label: "Upcoming",
    color: "bg-primary/10 text-primary hover:bg-primary/20",
    icon: Clock,
  },
  overdue: {
    label: "Overdue",
    color: "bg-destructive/10 text-destructive hover:bg-destructive/20",
    icon: AlertCircle,
  },
  partial: {
    label: "Partial",
    color: "bg-warning/10 text-warning hover:bg-warning/20",
    icon: Clock,
  },
}

interface RepaymentsListProps {
  role: "admin" | "manager" | "officer"
}

export function RepaymentsList({ role }: RepaymentsListProps) {
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredRepayments = mockRepayments.filter((payment) => {
    if (statusFilter === "all") return true
    return payment.status === statusFilter
  })

  const paidCount = mockRepayments.filter((p) => p.status === "paid").length
  const upcomingCount = mockRepayments.filter((p) => p.status === "upcoming").length
  const overdueCount = mockRepayments.filter((p) => p.status === "overdue").length
  const totalAmount = mockRepayments.reduce((sum, p) => sum + p.amount, 0)

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Amount</p>
              <p className="text-2xl font-bold">${totalAmount.toLocaleString()}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Paid</p>
              <p className="text-2xl font-bold">{paidCount}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10">
              <Clock className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming</p>
              <p className="text-2xl font-bold">{upcomingCount}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Overdue</p>
              <p className="text-2xl font-bold">{overdueCount}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search by borrower name or loan ID..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Record Payment
            </Button>
          </div>
        </div>
      </Card>

      {/* Repayments List */}
      <div className="space-y-4">
        {filteredRepayments.map((payment) => {
          const status = statusConfig[payment.status as keyof typeof statusConfig]
          const StatusIcon = status.icon

          return (
            <Card key={payment.id} className="p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{payment.borrower}</h3>
                        <Badge variant="secondary">{payment.loanId}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{payment.branch}</p>
                    </div>
                    <Badge className={status.color}>
                      <StatusIcon className="mr-1 h-3 w-3" />
                      {status.label}
                    </Badge>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Payment Amount</p>
                      <p className="mt-1 text-lg font-bold">${payment.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Due Date</p>
                      <p className="mt-1 font-semibold">{new Date(payment.dueDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Installment</p>
                      <p className="mt-1 font-semibold">
                        {payment.installmentNumber} of {payment.totalInstallments}
                      </p>
                    </div>
                    {payment.paidDate && (
                      <div>
                        <p className="text-xs text-muted-foreground">Paid Date</p>
                        <p className="mt-1 font-semibold">{new Date(payment.paidDate).toLocaleDateString()}</p>
                      </div>
                    )}
                    {payment.daysOverdue && (
                      <div>
                        <p className="text-xs text-muted-foreground">Days Overdue</p>
                        <p className="mt-1 font-semibold text-destructive">{payment.daysOverdue} days</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link href={`/${role}/loans/${payment.loanId}`}>
                    <Button variant="outline" className="bg-transparent">
                      View Loan
                    </Button>
                  </Link>
                  {payment.status !== "paid" && (
                    <Link href={`/${role}/repayments/${payment.id}/record`}>
                      <Button className="gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Record Payment
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
