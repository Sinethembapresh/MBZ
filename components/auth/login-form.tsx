"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // TODO: Implement actual authentication
    setTimeout(() => {
      if (email && password) {
        if (email.includes("admin")) {
          window.location.href = "/admin/dashboard"
        } else if (email.includes("manager")) {
          window.location.href = "/manager/dashboard"
        } else if (email.includes("officer")) {
          window.location.href = "/officer/dashboard"
        } else {
          window.location.href = "/borrower/dashboard"
        }
      } else {
        setError("Please enter valid credentials")
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive" className="flex items-center gap-2 px-4 py-3 rounded-lg">
          <AlertCircle className="h-5 w-5" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-3 rounded-lg border border-gray-300 w-full focus:border-blue-800 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
          <a href="#" className="text-sm text-blue-800 hover:underline">Forgot password?</a>
        </div>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-4 py-3 rounded-lg border border-gray-300 w-full focus:border-blue-800 focus:ring focus:ring-blue-200"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-800 hover:bg-blue-900 text-white rounded-lg px-6 py-3"
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>

      {/* Register Section */}
      <div className="text-center text-sm text-gray-600 mt-2">
        Don’t have an account?{" "}
        <Link href="/register">
          <Button
            type="button"
            className="ml-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg"
          >
            Register
          </Button>
        </Link>
      </div>

      <div className="text-center text-sm text-gray-600 mt-4">
        <p>Demo accounts:</p>
        <p className="mt-1 text-gray-700">
          admin@loanflow.com | manager@loanflow.com | officer@loanflow.com | borrower@loanflow.com
        </p>
      </div>
    </form>
  )
}
