"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Calendar, CheckCircle, Clock, AlertCircle, CreditCard } from "lucide-react"

const mockPaymentSchedule = [
  {
    id: "PAY-001",
    loanId: "LN-2024-001",
    installmentNumber: 1,
    amount: 1337,
    dueDate: "2024-01-20",
    paidDate: "2024-01-20",
    status: "paid",
  },
  {
    id: "PAY-002",
    loanId: "LN-2024-001",
    installmentNumber: 2,
    amount: 1337,
    dueDate: "2024-02-20",
    status: "upcoming",
  },
  {
    id: "PAY-003",
    loanId: "LN-2024-001",
    installmentNumber: 3,
    amount: 1337,
    dueDate: "2024-03-20",
    status: "scheduled",
  },
  {
    id: "PAY-004",
    loanId: "LN-2024-001",
    installmentNumber: 4,
    amount: 1337,
    dueDate: "2024-04-20",
    status: "scheduled",
  },
]

const statusConfig = {
  paid: {
    label: "Paid",
    color: "bg-success/10 text-success hover:bg-success/20",
    icon: CheckCircle,
  },
  upcoming: {
    label: "Due Soon",
    color: "bg-warning/10 text-warning hover:bg-warning/20",
    icon: Clock,
  },
  scheduled: {
    label: "Scheduled",
    color: "bg-muted/50 text-muted-foreground",
    icon: Calendar,
  },
  overdue: {
    label: "Overdue",
    color: "bg-destructive/10 text-destructive hover:bg-destructive/20",
    icon: AlertCircle,
  },
}

export function BorrowerRepayments() {
  const nextPayment = mockPaymentSchedule.find((p) => p.status === "upcoming")
  const paidCount = mockPaymentSchedule.filter((p) => p.status === "paid").length
  const totalPayments = mockPaymentSchedule.length

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Payment</p>
              <p className="text-2xl font-bold">${nextPayment?.amount.toLocaleString()}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Payments Made</p>
              <p className="text-2xl font-bold">
                {paidCount} / {totalPayments}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Calendar className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Due Date</p>
              <p className="text-lg font-bold">{new Date(nextPayment?.dueDate || "").toLocaleDateString()}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Next Payment Card */}
      {nextPayment && (
        <Card className="border-primary/20 bg-primary/5 p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Payment Due Soon</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Your next payment of ${nextPayment.amount.toLocaleString()} is due on{" "}
                {new Date(nextPayment.dueDate).toLocaleDateString()}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Payment Amount</p>
                  <p className="text-2xl font-bold text-primary">${nextPayment.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Installment</p>
                  <p className="text-lg font-semibold">
                    {nextPayment.installmentNumber} of {totalPayments}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button size="lg" className="gap-2">
                <CreditCard className="h-5 w-5" />
                Make Payment
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent">
                Set Up Auto-Pay
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Payment Schedule */}
      <Card className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Payment Schedule</h2>
        <div className="space-y-4">
          {mockPaymentSchedule.map((payment) => {
            const status = statusConfig[payment.status as keyof typeof statusConfig]
            const StatusIcon = status.icon

            return (
              <div key={payment.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <span className="font-semibold">{payment.installmentNumber}</span>
                  </div>
                  <div>
                    <p className="font-medium">Payment #{payment.installmentNumber}</p>
                    <p className="text-sm text-muted-foreground">
                      Due: {new Date(payment.dueDate).toLocaleDateString()}
                    </p>
                    {payment.paidDate && (
                      <p className="text-sm text-success">Paid: {new Date(payment.paidDate).toLocaleDateString()}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-lg font-bold">${payment.amount.toLocaleString()}</p>
                    <Badge className={status.color}>
                      <StatusIcon className="mr-1 h-3 w-3" />
                      {status.label}
                    </Badge>
                  </div>
                  {payment.status === "upcoming" && (
                    <Button size="sm" className="gap-2">
                      <CreditCard className="h-4 w-4" />
                      Pay Now
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Payment Methods */}
      <Card className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Payment Methods</h2>
        <div className="space-y-4">
          <div className="rounded-lg border bg-muted/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Bank Transfer</p>
                  <p className="text-sm text-muted-foreground">Transfer to branch account</p>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent">
                View Details
              </Button>
            </div>
          </div>
          <div className="rounded-lg border bg-muted/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <DollarSign className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">In-Person Payment</p>
                  <p className="text-sm text-muted-foreground">Pay at branch location</p>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent">
                Find Branch
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
