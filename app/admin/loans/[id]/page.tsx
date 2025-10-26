import { LoanDetailsView } from "@/components/loans/loan-details-view"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

export default function AdminLoanDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout role="admin">
      <LoanDetailsView loanId={params.id} role="admin" />
    </DashboardLayout>
  )
}
