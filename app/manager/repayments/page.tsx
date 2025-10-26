import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { RepaymentsList } from "@/components/repayments/repayments-list"

export default function ManagerRepaymentsPage() {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Branch Repayments</h1>
          <p className="mt-2 text-muted-foreground">Manage repayments for your branch loans</p>
        </div>

        <RepaymentsList role="manager" />
      </div>
    </DashboardLayout>
  )
}
