import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentLoans } from "@/components/dashboard/recent-loans"
import { BranchOverview } from "@/components/dashboard/branch-overview"

export default function OfficerDashboard() {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Officer Dashboard</h1>
          <p className="text-muted-foreground">Overview of branch performance and loan activity</p>
        </div>

        <StatsCards role="officer" />

        <div className="grid gap-6 lg:grid-cols-2">
          <BranchOverview />
          <RecentLoans />
        </div>
      </div>
    </DashboardLayout>
  )
}
