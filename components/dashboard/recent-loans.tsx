import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RecentLoans() {
  // Mock data
  const loans = [
    { id: "LN-2024-001", borrower: "John Doe", amount: "$5,000", status: "approved", branch: "Main Branch" },
    { id: "LN-2024-002", borrower: "Jane Smith", amount: "$3,500", status: "pending", branch: "North Branch" },
    { id: "LN-2024-003", borrower: "Mike Johnson", amount: "$7,200", status: "disbursed", branch: "South Branch" },
    { id: "LN-2024-004", borrower: "Sarah Williams", amount: "$4,800", status: "approved", branch: "East Branch" },
    { id: "LN-2024-005", borrower: "Tom Brown", amount: "$6,100", status: "pending", branch: "West Branch" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Loan Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {loans.map((loan) => (
            <div key={loan.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="space-y-1">
                <p className="font-medium">{loan.borrower}</p>
                <p className="text-sm text-muted-foreground">
                  {loan.id} • {loan.branch}
                </p>
              </div>
              <div className="text-right space-y-1">
                <p className="font-semibold">{loan.amount}</p>
                <Badge
                  variant={
                    loan.status === "approved" ? "default" : loan.status === "disbursed" ? "secondary" : "outline"
                  }
                >
                  {loan.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
