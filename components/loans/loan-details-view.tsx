"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, User, Building2, DollarSign, CheckCircle, XCircle, Clock, CreditCard } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Mock data
const mockLoan = {
  id: "LN-2024-001",
  borrower: {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    nationalId: "ID-123456789",
    address: "123 Main Street, City Center, State 12345",
  },
  employment: {
    employer: "Tech Corp",
    occupation: "Software Engineer",
    monthlyIncome: 5000,
    employmentLength: 3,
  },
  loan: {
    amount: 15000,
    term: 12,
    purpose: "Business",
    purposeDetails: "Starting a small online retail business",
    interestRate: 12.5,
    monthlyPayment: 1337,
  },
  branch: {
    id: "1",
    name: "Downtown Branch",
    code: "DTN-001",
  },
  officer: {
    name: "John Smith",
    email: "john.smith@loanflow.com",
  },
  status: "pending_verification",
  submittedDate: "2024-01-15T10:30:00",
  timeline: [
    {
      status: "submitted",
      date: "2024-01-15T10:30:00",
      user: "Alice Johnson",
      note: "Application submitted online",
    },
    {
      status: "assigned",
      date: "2024-01-15T11:00:00",
      user: "System",
      note: "Assigned to John Smith",
    },
  ],
}

const statusConfig = {
  pending_verification: {
    label: "Pending Verification",
    color: "bg-warning/10 text-warning hover:bg-warning/20",
    icon: Clock,
  },
  pending_approval: {
    label: "Pending Approval",
    color: "bg-accent/10 text-accent hover:bg-accent/20",
    icon: Clock,
  },
  approved: {
    label: "Approved",
    color: "bg-success/10 text-success hover:bg-success/20",
    icon: CheckCircle,
  },
  rejected: {
    label: "Rejected",
    color: "bg-destructive/10 text-destructive hover:bg-destructive/20",
    icon: XCircle,
  },
  disbursed: {
    label: "Disbursed",
    color: "bg-primary/10 text-primary hover:bg-primary/20",
    icon: CheckCircle,
  },
}

interface LoanDetailsViewProps {
  loanId: string
  role: "admin" | "manager" | "officer"
}

export function LoanDetailsView({ loanId, role }: LoanDetailsViewProps) {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [notes, setNotes] = useState("")

  const status = statusConfig[mockLoan.status as keyof typeof statusConfig]
  const StatusIcon = status.icon

  const handleVerify = async () => {
    setIsProcessing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push(`/${role}/loans`)
  }

  const handleApprove = async () => {
    setIsProcessing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push(`/${role}/loans`)
  }

  const handleReject = async () => {
    if (!notes.trim()) {
      alert("Please provide a reason for rejection")
      return
    }
    setIsProcessing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push(`/${role}/loans`)
  }

  const canVerify = role === "officer" && mockLoan.status === "pending_verification"
  const canApprove = (role === "manager" || role === "admin") && mockLoan.status === "pending_approval"

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/${role}/loans`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">Loan Application</h1>
              <Badge variant="secondary">{mockLoan.id}</Badge>
              <Badge className={status.color}>
                <StatusIcon className="mr-1 h-3 w-3" />
                {status.label}
              </Badge>
            </div>
            <p className="mt-2 text-muted-foreground">
              Submitted on {new Date(mockLoan.submittedDate).toLocaleDateString()} at{" "}
              {new Date(mockLoan.submittedDate).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Borrower Information */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Borrower Information</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                <p className="mt-1 text-base font-medium">
                  {mockLoan.borrower.firstName} {mockLoan.borrower.lastName}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
                <p className="mt-1 text-base">{new Date(mockLoan.borrower.dateOfBirth).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p className="mt-1 text-base">{mockLoan.borrower.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <p className="mt-1 text-base">{mockLoan.borrower.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">National ID</p>
                <p className="mt-1 text-base font-medium">{mockLoan.borrower.nationalId}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Address</p>
                <p className="mt-1 text-base">{mockLoan.borrower.address}</p>
              </div>
            </div>
          </Card>

          {/* Employment Information */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Building2 className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-xl font-semibold">Employment Information</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Employer</p>
                <p className="mt-1 text-base font-medium">{mockLoan.employment.employer}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Occupation</p>
                <p className="mt-1 text-base">{mockLoan.employment.occupation}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Income</p>
                <p className="mt-1 text-base font-semibold">${mockLoan.employment.monthlyIncome.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Years Employed</p>
                <p className="mt-1 text-base">{mockLoan.employment.employmentLength} years</p>
              </div>
            </div>
          </Card>

          {/* Loan Details */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <DollarSign className="h-5 w-5 text-success" />
              </div>
              <h2 className="text-xl font-semibold">Loan Details</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Requested Amount</p>
                <p className="mt-1 text-2xl font-bold text-primary">${mockLoan.loan.amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Loan Term</p>
                <p className="mt-1 text-2xl font-bold">{mockLoan.loan.term} months</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Interest Rate</p>
                <p className="mt-1 text-base font-semibold">{mockLoan.loan.interestRate}% per annum</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Payment</p>
                <p className="mt-1 text-base font-semibold">${mockLoan.loan.monthlyPayment.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Purpose</p>
                <p className="mt-1 text-base font-medium">{mockLoan.loan.purpose}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Branch</p>
                <p className="mt-1 text-base">{mockLoan.branch.name}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Purpose Details</p>
                <p className="mt-1 text-base">{mockLoan.loan.purposeDetails}</p>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <h2 className="text-xl font-semibold">Application Timeline</h2>
            </div>

            <div className="space-y-4">
              {mockLoan.timeline.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    {index < mockLoan.timeline.length - 1 && <div className="w-0.5 flex-1 bg-border" />}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-medium capitalize">{event.status.replace("_", " ")}</p>
                    <p className="text-sm text-muted-foreground">{event.note}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {new Date(event.date).toLocaleString()} • {event.user}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card className="p-6">
            <h3 className="mb-4 font-semibold">Loan Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Principal</span>
                <span className="font-semibold">${mockLoan.loan.amount.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Interest</span>
                <span className="font-semibold">{mockLoan.loan.interestRate}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Term</span>
                <span className="font-semibold">{mockLoan.loan.term} months</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Monthly Payment</span>
                  <span className="text-lg font-bold text-primary">${mockLoan.loan.monthlyPayment}</span>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total Repayment</span>
                  <span className="text-lg font-bold">
                    ${(mockLoan.loan.monthlyPayment * mockLoan.loan.term).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Assigned Officer */}
          <Card className="p-6">
            <h3 className="mb-4 font-semibold">Assigned Officer</h3>
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">{mockLoan.officer.name}</p>
                <p className="text-sm text-muted-foreground">{mockLoan.officer.email}</p>
              </div>
            </div>
          </Card>

          {/* Actions */}
          {(canVerify || canApprove) && (
            <Card className="p-6">
              <h3 className="mb-4 font-semibold">Actions</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes / Comments</Label>
                  <Textarea
                    id="notes"
                    placeholder="Add notes about this application..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                {canVerify && (
                  <>
                    <Button onClick={handleVerify} disabled={isProcessing} className="w-full gap-2">
                      <CheckCircle className="h-4 w-4" />
                      {isProcessing ? "Processing..." : "Mark as Verified"}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Verify that all documents have been checked and collateral has been collected
                    </p>
                  </>
                )}

                {canApprove && (
                  <>
                    <Button onClick={handleApprove} disabled={isProcessing} className="w-full gap-2">
                      <CheckCircle className="h-4 w-4" />
                      {isProcessing ? "Processing..." : "Approve Loan"}
                    </Button>
                    <Button
                      onClick={handleReject}
                      disabled={isProcessing}
                      variant="destructive"
                      className="w-full gap-2"
                    >
                      <XCircle className="h-4 w-4" />
                      {isProcessing ? "Processing..." : "Reject Loan"}
                    </Button>
                  </>
                )}
              </div>
            </Card>
          )}

          {/* Collateral Info */}
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Required Collateral</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">National ID</span>
                <Badge variant="secondary">Required</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Bank Card</span>
                <Badge variant="secondary">Required</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
