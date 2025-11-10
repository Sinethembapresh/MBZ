"use client"

import { RegisterForm } from "@/components/auth/register-form"
import { Building2 } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-blue-100 to-white text-gray-900">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-800 p-12 flex-col justify-between text-white">
        <div className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-yellow-400" />
          <span className="text-2xl font-semibold">MBZ Loan Company</span>
        </div>

        <div className="space-y-4 mt-10">
          <h1 className="text-4xl font-bold text-yellow-300">Join LoanFlow Today</h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Create your account to start applying for loans, manage repayments, 
            and track your loan portfolio across all branches.
          </p>
        </div>

        <div className="text-sm text-white/80 mt-auto">
          © {new Date().getFullYear()} MBZ Loan Company. All rights reserved.
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 bg-white rounded-2xl shadow-lg p-10">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-blue-900">Create your account</h2>
            <p className="text-gray-600">Fill in the details to get started</p>
          </div>

          {/* RegisterForm should accept styling props for consistent buttons and inputs */}
          <RegisterForm
            className="space-y-4"
            buttonClassName="bg-blue-800 hover:bg-blue-900 text-white rounded-lg px-6 py-3 w-full"
            inputClassName="px-4 py-3 rounded-lg border border-gray-300 w-full focus:border-blue-800 focus:ring focus:ring-blue-200"
          />

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-blue-800 hover:underline">
              Sign in
            </Link>
          </div>

          {/* Subtle copyright */}
          <div className="text-center text-gray-500 text-sm mt-6">
            © 2025 LoanFlow. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
