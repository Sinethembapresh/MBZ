import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { LoanApplicationsList } from "@/components/loans/loan-applications-list"

export default function ManagerLoansPage() {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Branch Loan Applications</h1>
          <p className="mt-2 text-muted-foreground">Review and approve loan applications for your branch</p>
        </div>

        <LoanApplicationsList role="manager" />
      </div>
    </DashboardLayout>
  )
}
