import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { BorrowerRepayments } from "@/components/repayments/borrower-repayments"

export default function BorrowerRepaymentsPage() {
  return (
    <DashboardLayout role="borrower">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">My Repayments</h1>
          <p className="mt-2 text-muted-foreground">View your payment schedule and make payments</p>
        </div>

        <BorrowerRepayments />
      </div>
    </DashboardLayout>
  )
}
