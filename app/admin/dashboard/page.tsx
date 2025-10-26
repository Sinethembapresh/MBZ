import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentLoans } from "@/components/dashboard/recent-loans"
import { BranchOverview } from "@/components/dashboard/branch-overview"

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Overview of all branches and loan operations</p>
        </div>

        <StatsCards role="admin" />

        <div className="grid gap-6 lg:grid-cols-2">
          <BranchOverview />
          <RecentLoans />
        </div>
      </div>
    </DashboardLayout>
  )
}
