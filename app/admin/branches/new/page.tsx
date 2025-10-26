import { BranchForm } from "@/components/branches/branch-form"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

export default function NewBranchPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/branches">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Add New Branch</h1>
            <p className="mt-2 text-muted-foreground">Create a new branch location for your lending operations</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <BranchForm />
        </div>
      </div>
    </DashboardLayout>
  )
}
