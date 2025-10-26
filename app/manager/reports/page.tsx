import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ReportsOverview } from "@/components/reports/reports-overview"

export default function ManagerReportsPage() {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Branch Reports</h1>
          <p className="mt-2 text-muted-foreground">Performance metrics and analytics for your branch</p>
        </div>

        <ReportsOverview role="manager" />
      </div>
    </DashboardLayout>
  )
}
