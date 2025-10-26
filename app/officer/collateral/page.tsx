import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { CollateralList } from "@/components/collateral/collateral-list"

export default function OfficerCollateralPage() {
  return (
    <DashboardLayout role="officer">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Collateral Tracking</h1>
          <p className="mt-2 text-muted-foreground">Track collateral for your assigned loans</p>
        </div>

        <CollateralList role="officer" />
      </div>
    </DashboardLayout>
  )
}
