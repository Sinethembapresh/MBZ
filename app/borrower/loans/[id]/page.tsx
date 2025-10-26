import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { BorrowerLoanDetails } from "@/components/loans/borrower-loan-details"

export default function BorrowerLoanDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout role="borrower">
      <BorrowerLoanDetails loanId={params.id} />
    </DashboardLayout>
  )
}
