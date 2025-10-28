import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { BorrowerLoansList } from "@/components/loans/borrower-loans-list"
import { BorrowerRepayments } from "@/components/repayments/borrower-repayments"

export default function BorrowerDashboard() {
  return (
    <DashboardLayout role="borrower">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-muted-foreground">Overview of your loans and upcoming payments</p>
        </div>

        <StatsCards role="borrower" />

        <div className="grid gap-6 lg:grid-cols-2">
          <BorrowerLoansList />
          <BorrowerRepayments />
        </div>
      </div>
    </DashboardLayout>
  )
}