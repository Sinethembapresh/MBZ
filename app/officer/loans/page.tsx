import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { LoanApplicationsList } from "@/components/loans/loan-applications-list"

export default function OfficerLoansPage() {
  return (
    <DashboardLayout role="officer">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Loan Applications</h1>
          <p className="mt-2 text-muted-foreground">Review and process loan applications assigned to you</p>
        </div>

        <LoanApplicationsList role="officer" />
      </div>
    </DashboardLayout>
  )
}
