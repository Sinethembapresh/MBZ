import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { CollateralDetails } from "@/components/collateral/collateral-details"

export default function ManagerCollateralDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout role="manager">
      <CollateralDetails collateralId={params.id} role="manager" />
    </DashboardLayout>
  )
}
