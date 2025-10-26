import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2 } from "lucide-react"

export function BranchOverview() {
  // Mock data
  const branches = [
    { name: "Main Branch", loans: 312, amount: "$624K", rate: "95.2%" },
    { name: "North Branch", loans: 247, amount: "$480K", rate: "96.1%" },
    { name: "South Branch", loans: 289, amount: "$562K", rate: "93.8%" },
    { name: "East Branch", loans: 198, amount: "$385K", rate: "94.5%" },
    { name: "West Branch", loans: 188, amount: "$349K", rate: "92.7%" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Branch Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {branches.map((branch) => (
            <div key={branch.name} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{branch.name}</p>
                <p className="text-sm text-muted-foreground">{branch.loans} active loans</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{branch.amount}</p>
                <p className="text-sm text-muted-foreground">{branch.rate} collection</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
