import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { LoanApplicationsList } from "@/components/loans/loan-applications-list"

export default function AdminLoansPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">All Loan Applications</h1>
          <p className="mt-2 text-muted-foreground">View and manage all loan applications across all branches</p>
        </div>

        <LoanApplicationsList role="admin" />
      </div>
    </DashboardLayout>
  )
}
