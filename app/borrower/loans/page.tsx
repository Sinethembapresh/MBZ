import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { BorrowerLoansList } from "@/components/loans/borrower-loans-list"

export default function BorrowerLoansPage() {
  return (
    <DashboardLayout role="borrower">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">My Loans</h1>
          <p className="mt-2 text-muted-foreground">View and manage your loan applications and active loans</p>
        </div>

        <BorrowerLoansList />
      </div>
    </DashboardLayout>
  )
}
