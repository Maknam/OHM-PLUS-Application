import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, HardDrive, AlertTriangle, CreditCard, Activity, CheckCircle2, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const revenueData = [
  { month: 'Jan', rev: 4200 },
  { month: 'Feb', rev: 4800 },
  { month: 'Mar', rev: 5100 },
  { month: 'Apr', rev: 6000 },
  { month: 'May', rev: 6800 },
  { month: 'Jun', rev: 8400 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-white tracking-wide">Platform Administration</h1>
        <p className="text-muted-foreground">Global overview of all active devices and customers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[#2E8B43] text-sm font-medium">+12%</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Total Customers</p>
            <h3 className="text-3xl font-display font-bold text-white tabular-nums tracking-wider mt-1">342</h3>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <HardDrive className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[#2E8B43] text-sm font-medium">+24</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Active Devices</p>
            <h3 className="text-3xl font-display font-bold text-white tabular-nums tracking-wider mt-1">1,240</h3>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-[#D71920]/40">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#D71920]/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#D71920]" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Network Alerts</p>
            <h3 className="text-3xl font-display font-bold text-[#D71920] tabular-nums tracking-wider mt-1">8</h3>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-[#2E8B43]/40">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#2E8B43]/20 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[#2E8B43]" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-medium">MRR</p>
            <h3 className="text-3xl font-display font-bold text-white tabular-nums tracking-wider mt-1">₦8.4M</h3>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 bg-card/50 border-primary/20 flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg font-display text-white">Recent Support Tickets</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-0 overflow-auto">
            <Table>
              <TableHeader className="bg-sidebar border-y border-border">
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-white">Ticket ID</TableHead>
                  <TableHead className="text-white">Customer</TableHead>
                  <TableHead className="text-white">Issue</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-right text-white">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-border">
                  <TableCell className="font-mono text-xs text-muted-foreground">FLT-849201</TableCell>
                  <TableCell className="text-white font-medium">Kwame Mensah</TableCell>
                  <TableCell className="text-muted-foreground">Voltage Drop / Fluctuations</TableCell>
                  <TableCell><Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/50">In Progress</Badge></TableCell>
                  <TableCell className="text-right"><Button size="sm" variant="outline" className="border-border">View</Button></TableCell>
                </TableRow>
                <TableRow className="border-border">
                  <TableCell className="font-mono text-xs text-muted-foreground">FLT-392810</TableCell>
                  <TableCell className="text-white font-medium">Adetutu Ojo</TableCell>
                  <TableCell className="text-muted-foreground">Meter Fault</TableCell>
                  <TableCell><Badge className="bg-[#E65516]/20 text-[#E65516] hover:bg-[#E65516]/20 border-[#E65516]/50">Open</Badge></TableCell>
                  <TableCell className="text-right"><Button size="sm" variant="outline" className="border-border">View</Button></TableCell>
                </TableRow>
                <TableRow className="border-border">
                  <TableCell className="font-mono text-xs text-muted-foreground">FLT-102938</TableCell>
                  <TableCell className="text-white font-medium">James Okafor</TableCell>
                  <TableCell className="text-muted-foreground">Power Surge</TableCell>
                  <TableCell><Badge className="bg-[#2E8B43]/20 text-[#2E8B43] hover:bg-[#2E8B43]/20 border-[#2E8B43]/50">Resolved</Badge></TableCell>
                  <TableCell className="text-right"><Button size="sm" variant="outline" className="border-border">View</Button></TableCell>
                </TableRow>
                <TableRow className="border-border">
                  <TableCell className="font-mono text-xs text-muted-foreground">FLT-584930</TableCell>
                  <TableCell className="text-white font-medium">Abena Osei</TableCell>
                  <TableCell className="text-muted-foreground">No Power / Total Outage</TableCell>
                  <TableCell><Badge className="bg-[#E65516]/20 text-[#E65516] hover:bg-[#E65516]/20 border-[#E65516]/50">Open</Badge></TableCell>
                  <TableCell className="text-right"><Button size="sm" variant="outline" className="border-border">View</Button></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-primary/20 flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg font-display text-white">Pending Installations</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-auto">
            <div className="divide-y divide-border">
              <div className="p-4 flex items-start justify-between hover:bg-white/5 transition-colors">
                <div>
                  <p className="font-bold text-white mb-1">Ikeja City Mall (Branch 3)</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                    <Clock className="w-3 h-3" /> Scheduled: Tomorrow, 10:00 AM
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">Commercial</Badge>
                    <Badge variant="outline" className="text-xs">Lagos</Badge>
                  </div>
                </div>
                <Button size="icon" variant="outline" className="h-8 w-8 rounded-full"><CheckCircle2 className="w-4 h-4 text-[#2E8B43]" /></Button>
              </div>
              <div className="p-4 flex items-start justify-between hover:bg-white/5 transition-colors">
                <div>
                  <p className="font-bold text-white mb-1">Osu Residential Complex</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                    <Clock className="w-3 h-3" /> Scheduled: Jan 15, 2:00 PM
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">Residential</Badge>
                    <Badge variant="outline" className="text-xs">Accra</Badge>
                  </div>
                </div>
                <Button size="icon" variant="outline" className="h-8 w-8 rounded-full"><CheckCircle2 className="w-4 h-4 text-[#2E8B43]" /></Button>
              </div>
              <div className="p-4 flex items-start justify-between hover:bg-white/5 transition-colors">
                <div>
                  <p className="font-bold text-white mb-1">Lekki Phase 1 Unit</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                    <Clock className="w-3 h-3" /> Scheduled: Jan 18, 9:00 AM
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">Residential</Badge>
                    <Badge variant="outline" className="text-xs">Lagos</Badge>
                  </div>
                </div>
                <Button size="icon" variant="outline" className="h-8 w-8 rounded-full"><CheckCircle2 className="w-4 h-4 text-[#2E8B43]" /></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-display text-white">Revenue Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2E8B43" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2E8B43" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#071B2C', borderColor: 'rgba(46,139,67,0.3)' }}
                  />
                  <Area type="monotone" dataKey="rev" stroke="#2E8B43" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-display text-white">System Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-white">API Health</span>
                <span className="text-sm text-[#2E8B43]">100%</span>
              </div>
              <div className="h-2 w-full bg-sidebar rounded-full overflow-hidden">
                <div className="h-full bg-[#2E8B43] w-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-white">MQTT Broker (Devices)</span>
                <span className="text-sm text-[#2E8B43]">99.8%</span>
              </div>
              <div className="h-2 w-full bg-sidebar rounded-full overflow-hidden">
                <div className="h-full bg-[#2E8B43] w-[99.8%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-white">Database Capacity</span>
                <span className="text-sm text-[#E65516]">78%</span>
              </div>
              <div className="h-2 w-full bg-sidebar rounded-full overflow-hidden">
                <div className="h-full bg-[#E65516] w-[78%]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
