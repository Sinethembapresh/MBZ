import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { RepaymentsList } from "@/components/repayments/repayments-list"

export default function AdminRepaymentsPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Repayment Management</h1>
          <p className="mt-2 text-muted-foreground">Track and manage loan repayments across all branches</p>
        </div>

        <RepaymentsList role="admin" />
      </div>
    </DashboardLayout>
  )
}
