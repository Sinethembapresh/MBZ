"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

const mockLoan = {
  id: "LN-2024-001",
  amount: 15000,
  term: 12,
  purpose: "Business",
  status: "active",
  disbursedDate: "2024-01-20",
  monthlyPayment: 1337,
  interestRate: 12.5,
  nextPaymentDate: "2024-02-20",
  remainingBalance: 14000,
  paidInstallments: 1,
  totalInstallments: 12,
  branch: "Downtown Branch",
}

const paymentHistory = [
  {
    id: 1,
    date: "2024-01-20",
    amount: 1337,
    principal: 1180,
    interest: 157,
    status: "paid",
  },
]

export function BorrowerLoanDetails({ loanId }: { loanId: string }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/borrower/loans">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">Loan Details</h1>
            <Badge variant="secondary">{mockLoan.id}</Badge>
            <Badge className="bg-success/10 text-success hover:bg-success/20">Active</Badge>
          </div>
          <p className="mt-2 text-muted-foreground">
            Disbursed on {new Date(mockLoan.disbursedDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Loan Summary */}
          <Card className="p-6">
            <h2 className="mb-6 text-xl font-semibold">Loan Summary</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Original Amount</p>
                <p className="mt-1 text-2xl font-bold">${mockLoan.amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Remaining Balance</p>
                <p className="mt-1 text-2xl font-bold text-primary">${mockLoan.remainingBalance.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Payment</p>
                <p className="mt-1 text-lg font-semibold">${mockLoan.monthlyPayment.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Interest Rate</p>
                <p className="mt-1 text-lg font-semibold">{mockLoan.interestRate}% per annum</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Loan Term</p>
                <p className="mt-1 text-base">{mockLoan.term} months</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Purpose</p>
                <p className="mt-1 text-base">{mockLoan.purpose}</p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-muted/30 p-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Repayment Progress: {mockLoan.paidInstallments} of {mockLoan.totalInstallments} payments
                </span>
                <span className="font-semibold">
                  {Math.round((mockLoan.paidInstallments / mockLoan.totalInstallments) * 100)}%
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${(mockLoan.paidInstallments / mockLoan.totalInstallments) * 100}%` }}
                />
              </div>
            </div>
          </Card>

          {/* Payment History */}
          <Card className="p-6">
            <h2 className="mb-6 text-xl font-semibold">Payment History</h2>
            <div className="space-y-4">
              {paymentHistory.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">Payment #{payment.id}</p>
                    <p className="text-sm text-muted-foreground">{new Date(payment.date).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${payment.amount.toLocaleString()}</p>
                    <Badge className="mt-1 bg-success/10 text-success hover:bg-success/20">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Paid
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Next Payment</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold">${mockLoan.monthlyPayment.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">
                Due on {new Date(mockLoan.nextPaymentDate).toLocaleDateString()}
              </p>
              <Button className="mt-4 w-full">Make Payment</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4 font-semibold">Payment Breakdown</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Principal</span>
                <span className="font-medium">$1,180</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Interest</span>
                <span className="font-medium">$157</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total</span>
                  <span className="text-lg font-bold">${mockLoan.monthlyPayment}</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4 font-semibold">Loan Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Loan ID</span>
                <span className="font-medium">{mockLoan.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Branch</span>
                <span className="font-medium">{mockLoan.branch}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Disbursed</span>
                <span className="font-medium">{new Date(mockLoan.disbursedDate).toLocaleDateString()}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
