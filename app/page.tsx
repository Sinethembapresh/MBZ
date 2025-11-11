"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShieldCheck, TrendingUp, Clock, MapPin, Star } from "lucide-react"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

import VideoPlayer from "@/components/VideoPlayer"


export default function HomePage() {
  const [loanAmount, setLoanAmount] = useState("")
  const [eligibilityMessage, setEligibilityMessage] = useState("")

  const checkEligibility = () => {
    if (!loanAmount) {
      setEligibilityMessage("Please enter a loan amount.")
    } else {
      setEligibilityMessage("You may qualify for this loan. Please log in to continue your application.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-900">MBZ Loan Company</h1>
          <nav className="flex items-center gap-4">
            <Link href="/" className="hover:text-blue-700 font-medium">Home</Link>
            <Link href="#how-it-works" className="hover:text-blue-700 font-medium">How It Works</Link>
            <Link href="#branches" className="hover:text-blue-700 font-medium">Branches</Link>
            <Link href="#contact" className="hover:text-blue-700 font-medium">Contact</Link>
            <Link href="/login">
              <Button variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-100 rounded-xl">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-xl">
                Register
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Quick, Secure, and Flexible Personal Loans</h2>
        <p className="text-lg mb-6 text-blue-50">
          Borrow cash easily. Register, log in, and apply at your nearest MBZ branch.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/login">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-2xl shadow-lg">
              Apply Now (Login Required)
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 rounded-2xl px-8 py-4">
              Sign Up First
            </Button>
          </Link>
        </div>
      </section>


      {/* 2. Video Section */}

      {/* Quick Loan Eligibility Checker */}

      <section className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-900">Learn About Our Personal Loans</h3>
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-xl">
            <VideoPlayer />
          </div>
          <p className="mt-6 text-gray-700">
            Discover how our personal loans can help you achieve your financial goals with flexible terms and competitive rates.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50 text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-900">Why Choose MBZ Loans?</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-white">
            <Clock className="mx-auto text-blue-800 w-10 h-10 mb-4" />
            <h4 className="font-semibold text-xl mb-2">Fast Approval</h4>
            <p className="text-gray-700">Get verified and approved quickly at your branch.</p>
          </div>
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-white">
            <TrendingUp className="mx-auto text-blue-800 w-10 h-10 mb-4" />
            <h4 className="font-semibold text-xl mb-2">Flexible Repayment</h4>
            <p className="text-gray-700">Personalized repayment plans available at each branch.</p>
          </div>
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-white">
            <ShieldCheck className="mx-auto text-blue-800 w-10 h-10 mb-4" />
            <h4 className="font-semibold text-xl mb-2">Trusted & Transparent</h4>
            <p className="text-gray-700">All loan details explained clearly during branch visit.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white text-gray-900 text-center">
        <h3 className="text-3xl font-bold mb-10 text-blue-900">How It Works</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl shadow bg-blue-50">
            <span className="text-3xl font-bold text-blue-700">1</span>
            <p className="mt-2 font-medium">Sign Up to create your borrower account</p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-blue-50">
            <span className="text-3xl font-bold text-blue-700">2</span>
            <p className="mt-2 font-medium">Login with your registered details</p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-blue-50">
            <span className="text-3xl font-bold text-blue-700">3</span>
            <p className="mt-2 font-medium">Apply for a loan and submit collateral at your branch</p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-blue-50">
            <span className="text-3xl font-bold text-blue-700">4</span>
            <p className="mt-2 font-medium">Receive funds and repay via branch, mobile, or bank</p>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section id="branches" className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10 text-blue-900">Our Branches</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Mankayane", "Bhunya", "Malkerns – Central", "Malkerns – North", "Malkerns – South"].map((branch, i) => (
            <div key={i} className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition">
              <MapPin className="mx-auto text-blue-800 w-8 h-8 mb-2" />
              <h4 className="font-semibold text-xl mb-1">{branch} Branch</h4>
              
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="#about" className="hover:underline">About</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
            <Link href="#faqs" className="hover:underline">FAQs</Link>
            <Link href="/login" className="hover:underline">Apply Now</Link>
          </div>
          <div className="flex justify-center gap-6 mb-4 text-sm opacity-80">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms & Conditions</Link>
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <a href="#"><Facebook className="w-5 h-5 hover:text-gray-300" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-gray-300" /></a>
            <a href="#"><Instagram className="w-5 h-5 hover:text-gray-300" /></a>
            <a href="#"><Linkedin className="w-5 h-5 hover:text-gray-300" /></a>
          </div>
          <p className="text-center text-xs opacity-70 mt-4">
            © {new Date().getFullYear()} MBZ Loan Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
 
