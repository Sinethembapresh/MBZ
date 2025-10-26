import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { CollateralList } from "@/components/collateral/collateral-list"

export default function ManagerCollateralPage() {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Branch Collateral</h1>
          <p className="mt-2 text-muted-foreground">Manage collateral items for your branch</p>
        </div>

        <CollateralList role="manager" />
      </div>
    </DashboardLayout>
  )
}
