"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Award as IdCard, CreditCard, Clock, CheckCircle, User, Building2 } from "lucide-react"
import Link from "next/link"

const mockCollateral = {
  id: "COL-001",
  loanId: "LN-2024-001",
  borrower: {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 (555) 123-4567",
    nationalId: "ID-123456789",
  },
  nationalId: {
    number: "ID-123456789",
    status: "in_custody",
    collectedDate: "2024-01-16T14:30:00",
    collectedBy: "John Smith",
    location: "Safe A-12",
    notes: "Original ID card in good condition. Verified against borrower.",
  },
  bankCard: {
    number: "**** **** **** 1234",
    bank: "First National Bank",
    cardType: "Debit Card",
    status: "in_custody",
    collectedDate: "2024-01-16T14:30:00",
    collectedBy: "John Smith",
    location: "Safe A-12",
    notes: "Card verified and stored securely.",
  },
  branch: {
    name: "Downtown Branch",
    code: "DTN-001",
  },
  loanStatus: "active",
  loanAmount: 15000,
  timeline: [
    {
      action: "collected",
      date: "2024-01-16T14:30:00",
      user: "John Smith",
      items: ["National ID", "Bank Card"],
      notes: "Items collected during in-person verification",
    },
  ],
}

interface CollateralDetailsProps {
  collateralId: string
  role: "admin" | "manager" | "officer"
}

export function CollateralDetails({ collateralId, role }: CollateralDetailsProps) {
  const isInCustody = mockCollateral.nationalId.status === "in_custody"

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/${role}/collateral`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">Collateral Details</h1>
              <Badge variant="secondary">{mockCollateral.id}</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                <Clock className="mr-1 h-3 w-3" />
                In Custody
              </Badge>
            </div>
            <p className="mt-2 text-muted-foreground">Loan ID: {mockCollateral.loanId}</p>
          </div>
        </div>
        {isInCustody && (
          <Link href={`/${role}/collateral/${collateralId}/return`}>
            <Button size="lg" className="gap-2">
              <CheckCircle className="h-5 w-5" />
              Return Collateral
            </Button>
          </Link>
        )}
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
                <p className="mt-1 text-base font-medium">{mockCollateral.borrower.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">National ID</p>
                <p className="mt-1 text-base font-medium">{mockCollateral.borrower.nationalId}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p className="mt-1 text-base">{mockCollateral.borrower.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <p className="mt-1 text-base">{mockCollateral.borrower.phone}</p>
              </div>
            </div>
          </Card>

          {/* National ID Details */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <IdCard className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-xl font-semibold">National ID</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">ID Number</p>
                <p className="mt-1 text-base font-medium">{mockCollateral.nationalId.number}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Status</p>
                <Badge className="mt-1 bg-primary/10 text-primary hover:bg-primary/20">
                  {mockCollateral.nationalId.status.replace("_", " ").toUpperCase()}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Storage Location</p>
                <p className="mt-1 text-base font-medium">{mockCollateral.nationalId.location}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Collected Date</p>
                <p className="mt-1 text-base">{new Date(mockCollateral.nationalId.collectedDate).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Collected By</p>
                <p className="mt-1 text-base">{mockCollateral.nationalId.collectedBy}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Notes</p>
                <p className="mt-1 text-base">{mockCollateral.nationalId.notes}</p>
              </div>
            </div>
          </Card>

          {/* Bank Card Details */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <CreditCard className="h-5 w-5 text-success" />
              </div>
              <h2 className="text-xl font-semibold">Bank Card</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Card Number</p>
                <p className="mt-1 text-base font-medium">{mockCollateral.bankCard.number}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Bank</p>
                <p className="mt-1 text-base font-medium">{mockCollateral.bankCard.bank}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Card Type</p>
                <p className="mt-1 text-base">{mockCollateral.bankCard.cardType}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Status</p>
                <Badge className="mt-1 bg-primary/10 text-primary hover:bg-primary/20">
                  {mockCollateral.bankCard.status.replace("_", " ").toUpperCase()}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Storage Location</p>
                <p className="mt-1 text-base font-medium">{mockCollateral.bankCard.location}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Collected Date</p>
                <p className="mt-1 text-base">{new Date(mockCollateral.bankCard.collectedDate).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Collected By</p>
                <p className="mt-1 text-base">{mockCollateral.bankCard.collectedBy}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Notes</p>
                <p className="mt-1 text-base">{mockCollateral.bankCard.notes}</p>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <h2 className="text-xl font-semibold">Custody Timeline</h2>
            </div>

            <div className="space-y-4">
              {mockCollateral.timeline.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    {index < mockCollateral.timeline.length - 1 && <div className="w-0.5 flex-1 bg-border" />}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-medium capitalize">{event.action}</p>
                    <p className="text-sm text-muted-foreground">
                      Items: {event.items.join(", ")} • {event.notes}
                    </p>
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
          {/* Loan Info */}
          <Card className="p-6">
            <h3 className="mb-4 font-semibold">Associated Loan</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Loan ID</span>
                <span className="font-medium">{mockCollateral.loanId}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-medium">${mockCollateral.loanAmount.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <Badge className="bg-success/10 text-success hover:bg-success/20">
                  {mockCollateral.loanStatus.toUpperCase()}
                </Badge>
              </div>
              <Link href={`/${role}/loans/${mockCollateral.loanId}`}>
                <Button variant="outline" className="mt-4 w-full bg-transparent">
                  View Loan Details
                </Button>
              </Link>
            </div>
          </Card>

          {/* Branch Info */}
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <Building2 className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Branch</h3>
            </div>
            <div className="space-y-2">
              <p className="font-medium">{mockCollateral.branch.name}</p>
              <p className="text-sm text-muted-foreground">{mockCollateral.branch.code}</p>
            </div>
          </Card>

          {/* Quick Actions */}
          {isInCustody && (
            <Card className="bg-warning/5 p-6">
              <h3 className="mb-2 font-semibold">Important</h3>
              <p className="text-sm text-muted-foreground">
                Collateral items must be returned to the borrower upon full loan repayment.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
