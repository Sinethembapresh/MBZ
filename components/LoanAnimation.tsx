"use client"

import Lottie from "lottie-react"
import loanAnimation from "@/public/animations/loan-animation.json"

export default function LoanAnimation() {
  return (
    <div className="w-full h-full">
      <Lottie
        animationData={loanAnimation}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
