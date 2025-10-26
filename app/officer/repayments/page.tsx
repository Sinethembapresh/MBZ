import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { RepaymentsList } from "@/components/repayments/repayments-list"

export default function OfficerRepaymentsPage() {
  return (
    <DashboardLayout role="officer">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Loan Repayments</h1>
          <p className="mt-2 text-muted-foreground">Track repayments for your assigned loans</p>
        </div>

        <RepaymentsList role="officer" />
      </div>
    </DashboardLayout>
  )
}
