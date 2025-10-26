import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { CollateralDetails } from "@/components/collateral/collateral-details"

export default function OfficerCollateralDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout role="officer">
      <CollateralDetails collateralId={params.id} role="officer" />
    </DashboardLayout>
  )
}
