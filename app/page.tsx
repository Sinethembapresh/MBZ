import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Shield, TrendingUp, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">LoanFlow</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Sign in
            </Link>
            <Button asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Trusted by thousands of borrowers</span>
          </div>
          <h1 className="text-balance text-5xl font-bold tracking-tight lg:text-6xl">Personal Loans Made Simple</h1>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Fast approval, competitive rates, and transparent terms. Manage your loan application and repayments all in
            one secure platform across our five branch locations.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/apply">Start Your Application</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/login">Access Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Quick Approval</h3>
            <p className="text-muted-foreground leading-relaxed">
              Submit your application online and get initial approval within 24 hours. Complete verification at any of
              our five branches.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Secure & Transparent</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your documents are safely stored with bank-grade security. Track your collateral and loan status in
              real-time.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Personal Support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dedicated loan officers at each branch ready to help you through every step of your loan journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
