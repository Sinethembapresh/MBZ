import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ApplicationSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-semibold">LoanFlow</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-12 w-12 text-success" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-foreground">Application Submitted!</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Thank you for applying for a loan with LoanFlow. Your application has been received and is being reviewed.
          </p>

          <Card className="mt-8 p-8 text-left">
            <h2 className="mb-4 text-xl font-semibold">What happens next?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  1
                </div>
                <div>
                  <p className="font-medium">Application Review</p>
                  <p className="text-sm text-muted-foreground">
                    Our loan officers will review your application within 24-48 hours.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  2
                </div>
                <div>
                  <p className="font-medium">Document Verification</p>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a call to schedule an in-person verification at your selected branch. Please bring
                    your National ID and Bank Card.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  3
                </div>
                <div>
                  <p className="font-medium">Final Approval</p>
                  <p className="text-sm text-muted-foreground">
                    Once verified, your loan will be processed for final approval and disbursement.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/apply">
              <Button variant="outline" size="lg">
                Submit Another Application
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" className="gap-2">
                Track Your Application
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <Card className="mt-8 bg-muted/30 p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Application Reference:</strong> LN-2024-
              {Math.floor(Math.random() * 10000)
                .toString()
                .padStart(4, "0")}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Please save this reference number for tracking your application.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
