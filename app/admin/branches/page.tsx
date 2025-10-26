import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Phone, Users, Plus, Search, Edit, Eye } from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

// Mock data - will be replaced with database queries
const branches = [
  {
    id: "1",
    name: "Downtown Branch",
    code: "DTN-001",
    address: "123 Main Street, City Center",
    phone: "+1 (555) 123-4567",
    manager: "John Smith",
    status: "active",
    activeLoans: 45,
    totalDisbursed: 1250000,
  },
  {
    id: "2",
    name: "Westside Branch",
    code: "WST-002",
    address: "456 West Avenue, Westside District",
    phone: "+1 (555) 234-5678",
    manager: "Sarah Johnson",
    status: "active",
    activeLoans: 32,
    totalDisbursed: 890000,
  },
  {
    id: "3",
    name: "Eastside Branch",
    code: "EST-003",
    address: "789 East Boulevard, Eastside",
    phone: "+1 (555) 345-6789",
    manager: "Michael Chen",
    status: "active",
    activeLoans: 28,
    totalDisbursed: 720000,
  },
  {
    id: "4",
    name: "Northgate Branch",
    code: "NTH-004",
    address: "321 North Road, Northgate",
    phone: "+1 (555) 456-7890",
    manager: "Emily Davis",
    status: "active",
    activeLoans: 38,
    totalDisbursed: 1050000,
  },
  {
    id: "5",
    name: "Southpoint Branch",
    code: "STH-005",
    address: "654 South Street, Southpoint",
    phone: "+1 (555) 567-8901",
    manager: "David Wilson",
    status: "active",
    activeLoans: 41,
    totalDisbursed: 1180000,
  },
]

export default function BranchesPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Branch Management</h1>
            <p className="mt-2 text-muted-foreground">Manage all branch locations and their operations</p>
          </div>
          <Link href="/admin/branches/new">
            <Button size="lg" className="gap-2">
              <Plus className="h-5 w-5" />
              Add New Branch
            </Button>
          </Link>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Branches</p>
                <p className="text-2xl font-bold">{branches.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                <Users className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Loans</p>
                <p className="text-2xl font-bold">{branches.reduce((sum, b) => sum + b.activeLoans, 0)}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Disbursed</p>
                <p className="text-2xl font-bold">
                  ${(branches.reduce((sum, b) => sum + b.totalDisbursed, 0) / 1000000).toFixed(1)}M
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10">
                <MapPin className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg per Branch</p>
                <p className="text-2xl font-bold">
                  {Math.round(branches.reduce((sum, b) => sum + b.activeLoans, 0) / branches.length)}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search branches by name, code, or location..." className="pl-10" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </Card>

        {/* Branches Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <Card key={branch.id} className="overflow-hidden">
              <div className="border-b bg-muted/30 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{branch.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {branch.code}
                      </Badge>
                    </div>
                    <Badge className="mt-2 bg-success/10 text-success hover:bg-success/20">Active</Badge>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{branch.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{branch.phone}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Manager: {branch.manager}</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Active Loans</p>
                      <p className="text-xl font-bold text-foreground">{branch.activeLoans}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Disbursed</p>
                      <p className="text-xl font-bold text-foreground">${(branch.totalDisbursed / 1000).toFixed(0)}K</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-2">
                  <Link href={`/admin/branches/${branch.id}`} className="flex-1">
                    <Button variant="outline" className="w-full gap-2 bg-transparent">
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                  <Link href={`/admin/branches/${branch.id}/edit`}>
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
