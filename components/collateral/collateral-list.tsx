"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, CreditCard, Award as IdCard, Eye, CheckCircle, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

// Mock data
const mockCollateral = [
  {
    id: "COL-001",
    loanId: "LN-2024-001",
    borrower: "Alice Johnson",
    nationalId: {
      number: "ID-123456789",
      status: "in_custody",
      collectedDate: "2024-01-16",
      collectedBy: "John Smith",
      location: "Safe A-12",
    },
    bankCard: {
      number: "**** **** **** 1234",
      bank: "First National Bank",
      status: "in_custody",
      collectedDate: "2024-01-16",
      collectedBy: "John Smith",
      location: "Safe A-12",
    },
    branch: "Downtown Branch",
    loanStatus: "active",
  },
  {
    id: "COL-002",
    loanId: "LN-2024-003",
    borrower: "Carol Davis",
    nationalId: {
      number: "ID-987654321",
      status: "returned",
      collectedDate: "2024-01-10",
      collectedBy: "John Smith",
      returnedDate: "2024-01-25",
      returnedBy: "John Smith",
      location: "Returned",
    },
    bankCard: {
      number: "**** **** **** 5678",
      bank: "City Bank",
      status: "returned",
      collectedDate: "2024-01-10",
      collectedBy: "John Smith",
      returnedDate: "2024-01-25",
      returnedBy: "John Smith",
      location: "Returned",
    },
    branch: "Downtown Branch",
    loanStatus: "completed",
  },
  {
    id: "COL-003",
    loanId: "LN-2024-005",
    borrower: "Emma Wilson",
    nationalId: {
      number: "ID-456789123",
      status: "in_custody",
      collectedDate: "2024-01-12",
      collectedBy: "Emily Davis",
      location: "Safe B-05",
    },
    bankCard: {
      number: "**** **** **** 9012",
      bank: "Metro Bank",
      status: "in_custody",
      collectedDate: "2024-01-12",
      collectedBy: "Emily Davis",
      location: "Safe B-05",
    },
    branch: "Northgate Branch",
    loanStatus: "active",
  },
]

const statusConfig = {
  in_custody: {
    label: "In Custody",
    color: "bg-primary/10 text-primary hover:bg-primary/20",
    icon: Clock,
  },
  returned: {
    label: "Returned",
    color: "bg-success/10 text-success hover:bg-success/20",
    icon: CheckCircle,
  },
  missing: {
    label: "Missing",
    color: "bg-destructive/10 text-destructive hover:bg-destructive/20",
    icon: AlertCircle,
  },
}

interface CollateralListProps {
  role: "admin" | "manager" | "officer"
}

export function CollateralList({ role }: CollateralListProps) {
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredCollateral = mockCollateral.filter((item) => {
    if (statusFilter === "all") return true
    return item.nationalId.status === statusFilter
  })

  const inCustodyCount = mockCollateral.filter((c) => c.nationalId.status === "in_custody").length
  const returnedCount = mockCollateral.filter((c) => c.nationalId.status === "returned").length

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Items</p>
              <p className="text-2xl font-bold">{mockCollateral.length * 2}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10">
              <Clock className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">In Custody</p>
              <p className="text-2xl font-bold">{inCustodyCount * 2}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Returned</p>
              <p className="text-2xl font-bold">{returnedCount * 2}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <IdCard className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Loans</p>
              <p className="text-2xl font-bold">{mockCollateral.filter((c) => c.loanStatus === "active").length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search by borrower name or loan ID..." className="pl-10" />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="in_custody">In Custody</SelectItem>
              <SelectItem value="returned">Returned</SelectItem>
              <SelectItem value="missing">Missing</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Collateral List */}
      <div className="space-y-4">
        {filteredCollateral.map((item) => {
          const status = statusConfig[item.nationalId.status as keyof typeof statusConfig]
          const StatusIcon = status.icon

          return (
            <Card key={item.id} className="p-6">
              <div className="flex flex-col gap-6 lg:flex-row">
                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{item.borrower}</h3>
                        <Badge variant="secondary">{item.loanId}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{item.branch}</p>
                    </div>
                    <Badge className={status.color}>
                      <StatusIcon className="mr-1 h-3 w-3" />
                      {status.label}
                    </Badge>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {/* National ID */}
                    <div className="rounded-lg border bg-muted/30 p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <IdCard className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold">National ID</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">ID Number:</span>
                          <span className="font-medium">{item.nationalId.number}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Location:</span>
                          <span className="font-medium">{item.nationalId.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Collected:</span>
                          <span className="font-medium">
                            {new Date(item.nationalId.collectedDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">By:</span>
                          <span className="font-medium">{item.nationalId.collectedBy}</span>
                        </div>
                        {item.nationalId.returnedDate && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Returned:</span>
                              <span className="font-medium">
                                {new Date(item.nationalId.returnedDate).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">By:</span>
                              <span className="font-medium">{item.nationalId.returnedBy}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Bank Card */}
                    <div className="rounded-lg border bg-muted/30 p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-accent" />
                        <h4 className="font-semibold">Bank Card</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Card Number:</span>
                          <span className="font-medium">{item.bankCard.number}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bank:</span>
                          <span className="font-medium">{item.bankCard.bank}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Location:</span>
                          <span className="font-medium">{item.bankCard.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Collected:</span>
                          <span className="font-medium">
                            {new Date(item.bankCard.collectedDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">By:</span>
                          <span className="font-medium">{item.bankCard.collectedBy}</span>
                        </div>
                        {item.bankCard.returnedDate && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Returned:</span>
                              <span className="font-medium">
                                {new Date(item.bankCard.returnedDate).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">By:</span>
                              <span className="font-medium">{item.bankCard.returnedBy}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-start gap-2 lg:flex-col">
                  <Link href={`/${role}/collateral/${item.id}`} className="flex-1 lg:flex-none">
                    <Button variant="outline" className="w-full gap-2 bg-transparent">
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                  {item.nationalId.status === "in_custody" && (
                    <Link href={`/${role}/collateral/${item.id}/return`} className="flex-1 lg:flex-none">
                      <Button className="w-full gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Return Items
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
