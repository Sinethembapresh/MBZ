"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Phone, MapPin, DollarSign, Calendar, Building2, Send } from "lucide-react"

const branches = [
  { id: "1", name: "Downtown Branch" },
  { id: "2", name: "Westside Branch" },
  { id: "3", name: "Eastside Branch" },
  { id: "4", name: "Northgate Branch" },
  { id: "5", name: "Southpoint Branch" },
]

export function LoanApplicationForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to success page
    router.push("/apply/success")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="p-8">
        <div className="space-y-8">
          {/* Personal Information */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Personal Information</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" name="firstName" placeholder="John" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" name="lastName" placeholder="Doe" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="dateOfBirth" name="dateOfBirth" type="date" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationalId">National ID Number *</Label>
                <Input id="nationalId" name="nationalId" placeholder="ID-123456789" required />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address">Residential Address *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="123 Main Street, City, State, ZIP"
                    className="pl-10 min-h-[80px]"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Employment Information */}
          <div className="border-t pt-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Building2 className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-xl font-semibold">Employment Information</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="employer">Employer Name *</Label>
                <Input id="employer" name="employer" placeholder="ABC Company" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation *</Label>
                <Input id="occupation" name="occupation" placeholder="Software Engineer" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyIncome">Monthly Income *</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="monthlyIncome"
                    name="monthlyIncome"
                    type="number"
                    placeholder="5000"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="employmentLength">Years Employed *</Label>
                <Input id="employmentLength" name="employmentLength" type="number" placeholder="3" required />
              </div>
            </div>
          </div>

          {/* Loan Details */}
          <div className="border-t pt-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <DollarSign className="h-5 w-5 text-success" />
              </div>
              <h2 className="text-xl font-semibold">Loan Details</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="loanAmount">Requested Loan Amount *</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="loanAmount"
                    name="loanAmount"
                    type="number"
                    placeholder="10000"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanTerm">Loan Term (months) *</Label>
                <Select name="loanTerm" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6">6 months</SelectItem>
                    <SelectItem value="12">12 months</SelectItem>
                    <SelectItem value="18">18 months</SelectItem>
                    <SelectItem value="24">24 months</SelectItem>
                    <SelectItem value="36">36 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="branch">Preferred Branch *</Label>
                <Select name="branch" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select branch" />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map((branch) => (
                      <SelectItem key={branch.id} value={branch.id}>
                        {branch.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="purpose">Loan Purpose *</Label>
                <Select name="purpose" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="home">Home Improvement</SelectItem>
                    <SelectItem value="debt">Debt Consolidation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="purposeDetails">Purpose Details</Label>
                <Textarea
                  id="purposeDetails"
                  name="purposeDetails"
                  placeholder="Please provide additional details about how you plan to use the loan..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Submit Button */}
      <div className="mt-6 flex items-center justify-end gap-4">
        <p className="text-sm text-muted-foreground">* Required fields</p>
        <Button type="submit" size="lg" disabled={isSubmitting} className="gap-2">
          <Send className="h-5 w-5" />
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  )
}
