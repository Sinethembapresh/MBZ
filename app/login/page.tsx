"use client" 

import { LoginForm } from "@/components/auth/login-form"
import { Building2 } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-between text-primary-foreground">
        <div className="flex items-center gap-2">
          <Building2 className="h-8 w-8" />
          <span className="text-2xl font-semibold">LoanFlow</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-balance">Manage loans with confidence</h1>
          <p className="text-lg text-primary-foreground/90 text-pretty leading-relaxed">
            Access your dashboard to track applications, manage repayments, and view your loan portfolio across all
            branches.
          </p>
        </div>
        <div className="text-sm text-primary-foreground/80">© 2025 LoanFlow. All rights reserved.</div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>
          <LoginForm />
          <div className="text-center text-sm text-muted-foreground">
            Need to apply for a loan?{" "}
            <Link href="/apply" className="font-medium text-primary hover:underline">
              Start application
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
