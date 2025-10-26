import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ReportsOverview } from "@/components/reports/reports-overview"

export default function AdminReportsPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="mt-2 text-muted-foreground">
            Comprehensive insights and performance metrics across all branches
          </p>
        </div>

        <ReportsOverview role="admin" />
      </div>
    </DashboardLayout>
  )
}
