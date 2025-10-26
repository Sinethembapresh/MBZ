"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, MapPin, Phone, Mail, User, Save } from "lucide-react"

interface BranchFormProps {
  initialData?: {
    id: string
    name: string
    code: string
    address: string
    phone: string
    email: string
    manager: string
    managerEmail: string
    managerPhone: string
    status: string
  }
}

export function BranchForm({ initialData }: BranchFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect after save
    if (initialData) {
      router.push(`/admin/branches/${initialData.id}`)
    } else {
      router.push("/admin/branches")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="p-8">
        <div className="space-y-8">
          {/* Branch Information */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Branch Information</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Branch Name *</Label>
                <Input id="name" name="name" defaultValue={initialData?.name} placeholder="Downtown Branch" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="code">Branch Code *</Label>
                <Input id="code" name="code" defaultValue={initialData?.code} placeholder="DTN-001" required />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address">Address *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="address"
                    name="address"
                    defaultValue={initialData?.address}
                    placeholder="123 Main Street, City Center"
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
                    defaultValue={initialData?.phone}
                    placeholder="+1 (555) 123-4567"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={initialData?.email}
                    placeholder="branch@loanflow.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Manager Information */}
          <div className="border-t pt-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <User className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-xl font-semibold">Branch Manager</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="manager">Manager Name *</Label>
                <Input
                  id="manager"
                  name="manager"
                  defaultValue={initialData?.manager}
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="managerPhone">Manager Phone *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="managerPhone"
                    name="managerPhone"
                    type="tel"
                    defaultValue={initialData?.managerPhone}
                    placeholder="+1 (555) 123-4568"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="managerEmail">Manager Email *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="managerEmail"
                    name="managerEmail"
                    type="email"
                    defaultValue={initialData?.managerEmail}
                    placeholder="manager@loanflow.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting} className="gap-2">
          <Save className="h-4 w-4" />
          {isSubmitting ? "Saving..." : initialData ? "Update Branch" : "Create Branch"}
        </Button>
      </div>
    </form>
  )
}
