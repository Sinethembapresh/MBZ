"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save, DollarSign, Calendar, CreditCard } from "lucide-react"
import Link from "next/link"

const mockPayment = {
  id: "PAY-001",
  loanId: "LN-2024-001",
  borrower: "Alice Johnson",
  amount: 1337,
  dueDate: "2024-02-20",
  installmentNumber: 2,
  totalInstallments: 12,
}

interface RecordPaymentFormProps {
  paymentId: string
  role: "admin" | "manager" | "officer"
}

export function RecordPaymentForm({ paymentId, role }: RecordPaymentFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    router.push(`/${role}/repayments`)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link href={`/${role}/repayments`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Record Payment</h1>
          <p className="mt-2 text-muted-foreground">Record a loan repayment for {mockPayment.borrower}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <Card className="p-8">
              <div className="space-y-8">
                {/* Payment Information */}
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">Payment Information</h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="paymentAmount">Payment Amount *</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="paymentAmount"
                          name="paymentAmount"
                          type="number"
                          defaultValue={mockPayment.amount}
                          className="pl-10"
                          required
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">Expected: ${mockPayment.amount.toLocaleString()}</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="paymentDate">Payment Date *</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="paymentDate"
                          name="paymentDate"
                          type="date"
                          defaultValue={new Date().toISOString().split("T")[0]}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="paymentMethod">Payment Method *</Label>
                      <Select name="paymentMethod" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cash">Cash</SelectItem>
                          <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                          <SelectItem value="check">Check</SelectItem>
                          <SelectItem value="mobile_money">Mobile Money</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referenceNumber">Reference Number</Label>
                      <Input id="referenceNumber" name="referenceNumber" placeholder="Transaction reference" />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Add any additional notes about this payment..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="mt-6 flex items-center justify-end gap-4">
              <Link href={`/${role}/repayments`}>
                <Button type="button" variant="outline" disabled={isSubmitting}>
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={isSubmitting} className="gap-2">
                <Save className="h-4 w-4" />
                {isSubmitting ? "Recording..." : "Record Payment"}
              </Button>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4 font-semibold">Payment Details</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Loan ID</span>
                <span className="font-medium">{mockPayment.loanId}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Borrower</span>
                <span className="font-medium">{mockPayment.borrower}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Installment</span>
                <span className="font-medium">
                  {mockPayment.installmentNumber} of {mockPayment.totalInstallments}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Due Date</span>
                <span className="font-medium">{new Date(mockPayment.dueDate).toLocaleDateString()}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Expected Amount</span>
                  <span className="text-lg font-bold text-primary">${mockPayment.amount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-3">
              <CreditCard className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold">Payment Methods</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Accept cash, bank transfers, checks, or mobile money payments
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-warning/5 p-6">
            <h3 className="mb-2 font-semibold">Important</h3>
            <p className="text-sm text-muted-foreground">
              Ensure you verify the payment before recording it in the system. Keep all payment receipts for
              record-keeping.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
