import { LoanDetailsView } from "@/components/loans/loan-details-view"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

export default function OfficerLoanDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout role="officer">
      <LoanDetailsView loanId={params.id} role="officer" />
    </DashboardLayout>
  )
}
