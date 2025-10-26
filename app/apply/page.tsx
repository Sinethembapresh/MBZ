import { LoanApplicationForm } from "@/components/loans/loan-application-form"
import { Building2, Shield, Clock, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-semibold">LoanFlow</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold text-foreground">Apply for a Personal Loan</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Quick and easy application process. Get approved in as little as 24 hours.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Application Form */}
          <div className="lg:col-span-2">
            <LoanApplicationForm />
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Application Process</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Submit Application</p>
                    <p className="text-sm text-muted-foreground">Fill out the online form</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Document Verification</p>
                    <p className="text-sm text-muted-foreground">Visit branch with required documents</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Approval</p>
                    <p className="text-sm text-muted-foreground">Loan officer reviews your application</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success/10">
                    <span className="font-semibold text-success">4</span>
                  </div>
                  <div>
                    <p className="font-medium">Get Funded</p>
                    <p className="text-sm text-muted-foreground">Receive your loan amount</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Required Documents</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Valid National ID
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Bank Card (for collateral)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Proof of Income
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Proof of Address
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Secure & Confidential</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Your information is encrypted and protected</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Quick Processing</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Most applications reviewed within 24-48 hours</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
