"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Clock, CheckCircle, Eye, Plus } from "lucide-react"
import Link from "next/link"

const mockLoans = [
  {
    id: "LN-2024-001",
    amount: 15000,
    term: 12,
    purpose: "Business",
    status: "active",
    disbursedDate: "2024-01-20",
    monthlyPayment: 1337,
    nextPaymentDate: "2024-02-20",
    remainingBalance: 14000,
    paidInstallments: 1,
    totalInstallments: 12,
  },
  {
    id: "LN-2023-045",
    amount: 10000,
    term: 6,
    purpose: "Education",
    status: "pending_approval",
    submittedDate: "2024-01-15",
  },
]

const statusConfig = {
  active: { label: "Active", color: "bg-success/10 text-success hover:bg-success/20" },
  pending_verification: { label: "Pending Verification", color: "bg-warning/10 text-warning hover:bg-warning/20" },
  pending_approval: { label: "Pending Approval", color: "bg-accent/10 text-accent hover:bg-accent/20" },
  approved: { label: "Approved", color: "bg-primary/10 text-primary hover:bg-primary/20" },
  completed: { label: "Completed", color: "bg-muted/50 text-muted-foreground" },
  rejected: { label: "Rejected", color: "bg-destructive/10 text-destructive hover:bg-destructive/20" },
}

export function BorrowerLoansList() {
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
              <p className="text-sm text-muted-foreground">Total Borrowed</p>
              <p className="text-2xl font-bold">$25,000</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Loans</p>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10">
              <Clock className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Apply Button */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Need a new loan?</h3>
            <p className="text-sm text-muted-foreground">Apply for a personal loan in minutes</p>
          </div>
          <Link href="/apply">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Apply Now
            </Button>
          </Link>
        </div>
      </Card>

      {/* Loans List */}
      <div className="space-y-4">
        {mockLoans.map((loan) => {
          const status = statusConfig[loan.status as keyof typeof statusConfig]

          return (
            <Card key={loan.id} className="p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{loan.id}</h3>
                    <Badge className={status.color}>{status.label}</Badge>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Loan Amount</p>
                      <p className="mt-1 font-semibold">${loan.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Term</p>
                      <p className="mt-1 font-semibold">{loan.term} months</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Purpose</p>
                      <p className="mt-1 font-semibold">{loan.purpose}</p>
                    </div>
                    {loan.status === "active" && (
                      <div>
                        <p className="text-xs text-muted-foreground">Next Payment</p>
                        <p className="mt-1 font-semibold">{new Date(loan.nextPaymentDate!).toLocaleDateString()}</p>
                      </div>
                    )}
                  </div>

                  {loan.status === "active" && (
                    <div className="mt-4 rounded-lg bg-muted/30 p-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Progress: {loan.paidInstallments} of {loan.totalInstallments} payments
                        </span>
                        <span className="font-semibold">
                          {Math.round((loan.paidInstallments! / loan.totalInstallments!) * 100)}%
                        </span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${(loan.paidInstallments! / loan.totalInstallments!) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Link href={`/borrower/loans/${loan.id}`}>
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
