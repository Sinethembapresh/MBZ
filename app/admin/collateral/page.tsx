import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { CollateralList } from "@/components/collateral/collateral-list"

export default function AdminCollateralPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Collateral Management</h1>
          <p className="mt-2 text-muted-foreground">Track and manage all collateral items across all branches</p>
        </div>

        <CollateralList role="admin" />
      </div>
    </DashboardLayout>
  )
}
