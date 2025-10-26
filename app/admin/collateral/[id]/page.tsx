import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { CollateralDetails } from "@/components/collateral/collateral-details"

export default function AdminCollateralDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout role="admin">
      <CollateralDetails collateralId={params.id} role="admin" />
    </DashboardLayout>
  )
}
