import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, AlertCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function DashboardBilling() {
  const bills = [
    { month: 'Oct 2023', actual: 42500, estimated: 65000, difference: 22500, status: 'Disputed' },
    { month: 'Sep 2023', actual: 41200, estimated: 65000, difference: 23800, status: 'Resolved' },
    { month: 'Aug 2023', actual: 39800, estimated: 42000, difference: 2200, status: 'Paid' },
    { month: 'Jul 2023', actual: 35000, estimated: 38000, difference: 3000, status: 'Paid' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-wide">Billing Evidence</h1>
          <p className="text-muted-foreground">Use hard data to dispute estimated bills.</p>
        </div>
        <Button className="bg-primary text-white gap-2">
          <Download className="w-4 h-4" />
          Export All Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/50 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-muted-foreground text-sm mb-2">Total Savings Discovered</h3>
            <p className="text-3xl font-display font-bold text-[#2E8B43]">₦46,300</p>
            <p className="text-xs text-muted-foreground mt-2">Overcharged amount in last 3 months</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-primary/20 col-span-1 md:col-span-2 flex flex-col justify-center">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">How to use this data</h3>
                <p className="text-sm text-muted-foreground">
                  Download the certified PDF reports and submit them to your distribution company (DisCo) representative to contest estimated billing amounts based on your actual consumption profile recorded by the Omhero device.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg font-display text-white">Historical Comparisons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-border">
            <Table>
              <TableHeader className="bg-sidebar">
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-muted-foreground">Billing Month</TableHead>
                  <TableHead className="text-muted-foreground">Actual Usage (Omhero)</TableHead>
                  <TableHead className="text-muted-foreground">DisCo Estimated</TableHead>
                  <TableHead className="text-muted-foreground">Difference</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-right text-muted-foreground">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bills.map((bill) => (
                  <TableRow key={bill.month} className="border-border hover:bg-sidebar/50">
                    <TableCell className="font-medium text-white">{bill.month}</TableCell>
                    <TableCell className="text-white">₦{bill.actual.toLocaleString()}</TableCell>
                    <TableCell className="text-muted-foreground">₦{bill.estimated.toLocaleString()}</TableCell>
                    <TableCell className={bill.difference > 10000 ? "text-[#E65516]" : "text-[#2E8B43]"}>
                      ₦{bill.difference.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        bill.status === 'Disputed' ? 'bg-[#E65516]/20 text-[#E65516]' :
                        bill.status === 'Resolved' ? 'bg-primary/20 text-primary' :
                        'bg-[#2E8B43]/20 text-[#2E8B43]'
                      }`}>
                        {bill.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                        <FileText className="w-4 h-4 mr-2" /> PDF
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
