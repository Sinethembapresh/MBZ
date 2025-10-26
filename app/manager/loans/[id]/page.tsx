import { LoanDetailsView } from "@/components/loans/loan-details-view"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

export default function ManagerLoanDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout role="manager">
      <LoanDetailsView loanId={params.id} role="manager" />
    </DashboardLayout>
  )
}
