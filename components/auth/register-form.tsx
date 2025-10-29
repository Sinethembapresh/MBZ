"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    console.log("Registering user:", formData)
    // TODO: Call your backend API here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-800 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-800 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-800 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-800 focus:ring focus:ring-blue-200"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-800 hover:bg-blue-900 text-white rounded-lg px-6 py-3 mt-2"
      >
        Register
      </Button>
    </form>
  )
}
