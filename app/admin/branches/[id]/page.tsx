import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Edit, ArrowLeft, TrendingUp, DollarSign } from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

// Mock data - will be replaced with database queries
const branch = {
  id: "1",
  name: "Downtown Branch",
  code: "DTN-001",
  address: "123 Main Street, City Center",
  phone: "+1 (555) 123-4567",
  email: "downtown@loanflow.com",
  manager: "John Smith",
  managerEmail: "john.smith@loanflow.com",
  managerPhone: "+1 (555) 123-4568",
  status: "active",
  activeLoans: 45,
  totalDisbursed: 1250000,
  collectionRate: 94.5,
  openedDate: "2022-01-15",
  staff: 8,
}

const recentLoans = [
  { id: "LN-2024-001", borrower: "Alice Johnson", amount: 15000, status: "active", date: "2024-01-15" },
  { id: "LN-2024-002", borrower: "Bob Williams", amount: 25000, status: "pending", date: "2024-01-14" },
  { id: "LN-2024-003", borrower: "Carol Davis", amount: 10000, status: "active", date: "2024-01-13" },
]

export default function BranchDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/branches">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-foreground">{branch.name}</h1>
                <Badge variant="secondary">{branch.code}</Badge>
                <Badge className="bg-success/10 text-success hover:bg-success/20">Active</Badge>
              </div>
              <p className="mt-2 text-muted-foreground">Opened on {new Date(branch.openedDate).toLocaleDateString()}</p>
            </div>
          </div>
          <Link href={`/admin/branches/${branch.id}/edit`}>
            <Button size="lg" className="gap-2">
              <Edit className="h-5 w-5" />
              Edit Branch
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Branch Information */}
            <Card className="p-6">
              <h2 className="mb-6 text-xl font-semibold">Branch Information</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Branch Name</p>
                    <p className="mt-1 text-base font-medium">{branch.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Branch Code</p>
                    <p className="mt-1 text-base font-medium">{branch.code}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p className="mt-1 text-base">{branch.address}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p className="mt-1 text-base">{branch.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="mt-1 text-base">{branch.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Staff Count</p>
                    <p className="mt-1 text-base font-medium">{branch.staff} employees</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Manager Information */}
            <Card className="p-6">
              <h2 className="mb-6 text-xl font-semibold">Branch Manager</h2>
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{branch.manager}</h3>
                  <div className="mt-3 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Email:</span> {branch.managerEmail}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Phone:</span> {branch.managerPhone}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Loans */}
            <Card className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Loans</h2>
                <Link href={`/admin/loans?branch=${branch.id}`}>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {recentLoans.map((loan) => (
                  <div
                    key={loan.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium">{loan.id}</p>
                      <p className="text-sm text-muted-foreground">{loan.borrower}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${loan.amount.toLocaleString()}</p>
                      <Badge variant={loan.status === "active" ? "default" : "secondary"} className="mt-1">
                        {loan.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Disbursed</p>
                  <p className="text-2xl font-bold">${(branch.totalDisbursed / 1000).toFixed(0)}K</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <Building2 className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Loans</p>
                  <p className="text-2xl font-bold">{branch.activeLoans}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Collection Rate</p>
                  <p className="text-2xl font-bold">{branch.collectionRate}%</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                  <Users className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Staff Members</p>
                  <p className="text-2xl font-bold">{branch.staff}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
