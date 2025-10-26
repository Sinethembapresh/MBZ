import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { RecordPaymentForm } from "@/components/repayments/record-payment-form"

export default function RecordPaymentPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout role="manager">
      <RecordPaymentForm paymentId={params.id} role="manager" />
    </DashboardLayout>
  )
}
