import { BranchForm } from "@/components/branches/branch-form"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

// Mock data - will be replaced with database queries
const branch = {
  id: "1",
  name: "Downtown Branch",
  code: "DTN-001",
  address: "123 Main Street, City Center",
  phone: "+1 (555) 123-4567",
  email: "downtown@loanflow.com",
  manager: "John Smith",
  managerEmail: "john.smith@loanflow.com",
  managerPhone: "+1 (555) 123-4568",
  status: "active",
}

export default function EditBranchPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Link href={`/admin/branches/${params.id}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Edit Branch</h1>
            <p className="mt-2 text-muted-foreground">Update branch information and settings</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <BranchForm initialData={branch} />
        </div>
      </div>
    </DashboardLayout>
  )
}
