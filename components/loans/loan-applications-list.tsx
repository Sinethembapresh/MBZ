"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Eye, CheckCircle, XCircle, Clock, FileText } from "lucide-react"
import Link from "next/link"

// Mock data
const mockApplications = [
  {
    id: "LN-2024-001",
    borrower: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 (555) 123-4567",
    amount: 15000,
    term: 12,
    purpose: "Business",
    branch: "Downtown Branch",
    status: "pending_verification",
    submittedDate: "2024-01-15",
    officer: "John Smith",
  },
  {
    id: "LN-2024-002",
    borrower: "Bob Williams",
    email: "bob.williams@example.com",
    phone: "+1 (555) 234-5678",
    amount: 25000,
    term: 24,
    purpose: "Home Improvement",
    branch: "Westside Branch",
    status: "pending_approval",
    submittedDate: "2024-01-14",
    officer: "Sarah Johnson",
  },
  {
    id: "LN-2024-003",
    borrower: "Carol Davis",
    email: "carol.davis@example.com",
    phone: "+1 (555) 345-6789",
    amount: 10000,
    term: 6,
    purpose: "Education",
    branch: "Downtown Branch",
    status: "approved",
    submittedDate: "2024-01-13",
    officer: "John Smith",
  },
  {
    id: "LN-2024-004",
    borrower: "David Brown",
    email: "david.brown@example.com",
    phone: "+1 (555) 456-7890",
    amount: 20000,
    term: 18,
    purpose: "Medical",
    branch: "Eastside Branch",
    status: "rejected",
    submittedDate: "2024-01-12",
    officer: "Michael Chen",
  },
  {
    id: "LN-2024-005",
    borrower: "Emma Wilson",
    email: "emma.wilson@example.com",
    phone: "+1 (555) 567-8901",
    amount: 18000,
    term: 12,
    purpose: "Debt Consolidation",
    branch: "Northgate Branch",
    status: "pending_verification",
    submittedDate: "2024-01-11",
    officer: "Emily Davis",
  },
]

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

interface LoanApplicationsListProps {
  role: "admin" | "manager" | "officer"
}

export function LoanApplicationsList({ role }: LoanApplicationsListProps) {
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredApplications = mockApplications.filter((app) => {
    if (statusFilter === "all") return true
    return app.status === statusFilter
  })

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Applications</p>
              <p className="text-2xl font-bold">{mockApplications.length}</p>
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
              <p className="text-2xl font-bold">
                {mockApplications.filter((a) => a.status.includes("pending")).length}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Approved</p>
              <p className="text-2xl font-bold">{mockApplications.filter((a) => a.status === "approved").length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Amount</p>
              <p className="text-2xl font-bold">
                ${(mockApplications.reduce((sum, a) => sum + a.amount, 0) / 1000).toFixed(0)}K
              </p>
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
              <SelectItem value="pending_verification">Pending Verification</SelectItem>
              <SelectItem value="pending_approval">Pending Approval</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.map((application) => {
          const status = statusConfig[application.status as keyof typeof statusConfig]
          const StatusIcon = status.icon

          return (
            <Card key={application.id} className="p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{application.borrower}</h3>
                        <Badge variant="secondary">{application.id}</Badge>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>{application.email}</span>
                        <span>•</span>
                        <span>{application.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Loan Amount</p>
                      <p className="mt-1 font-semibold">${application.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Term</p>
                      <p className="mt-1 font-semibold">{application.term} months</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Purpose</p>
                      <p className="mt-1 font-semibold">{application.purpose}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Branch</p>
                      <p className="mt-1 font-semibold">{application.branch}</p>
                    </div>
                  </div>

                  {role !== "officer" && (
                    <div className="mt-3">
                      <p className="text-xs text-muted-foreground">
                        Assigned Officer: <span className="font-medium text-foreground">{application.officer}</span>
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 lg:flex-col lg:items-end">
                  <Badge className={status.color}>
                    <StatusIcon className="mr-1 h-3 w-3" />
                    {status.label}
                  </Badge>
                  <Link href={`/${role}/loans/${application.id}`}>
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
