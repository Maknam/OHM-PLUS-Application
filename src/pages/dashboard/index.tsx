import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Activity, AlertTriangle, Cloud, Power, Thermometer, AlertCircle, Wrench, Download, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
  LineChart, Line
} from 'recharts';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const dailyData = [
  { time: '00:00', usage: 0.5 },
  { time: '03:00', usage: 0.4 },
  { time: '06:00', usage: 2.1 },
  { time: '09:00', usage: 3.8 },
  { time: '12:00', usage: 2.0 },
  { time: '15:00', usage: 1.8 },
  { time: '18:00', usage: 4.5 },
  { time: '21:00', usage: 3.2 },
  { time: '24:00', usage: 0.8 },
];

const weeklyData = [
  { day: 'Mon', usage: 24 },
  { day: 'Tue', usage: 26 },
  { day: 'Wed', usage: 22 },
  { day: 'Thu', usage: 28 },
  { day: 'Fri', usage: 31 },
  { day: 'Sat', usage: 18 },
  { day: 'Sun', usage: 15 },
];

const monthlyData = [
  { month: 'Jan', usage: 850 },
  { month: 'Feb', usage: 820 },
  { month: 'Mar', usage: 900 },
  { month: 'Apr', usage: 940 },
  { month: 'May', usage: 890 },
  { month: 'Jun', usage: 810 },
  { month: 'Jul', usage: 600 },
  { month: 'Aug', usage: 550 },
  { month: 'Sep', usage: 580 },
  { month: 'Oct', usage: 720 },
  { month: 'Nov', usage: 860 },
  { month: 'Dec', usage: 880 },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-display font-bold text-white tracking-wide">Energy Command Center</h1>
            <Badge className="bg-[#2E8B43]/20 text-[#2E8B43] border-[#2E8B43]/50 gap-1 font-mono">
              <BadgeCheck className="w-3 h-3" /> Pilot Active
            </Badge>
          </div>
          <p className="text-muted-foreground">Real-time insights for your property.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 rounded-lg shadow-[0_0_15px_rgba(0,114,206,0.1)]">
          <div className="w-2 h-2 rounded-full bg-[#2E8B43] animate-pulse" />
          <span className="text-sm font-medium text-white">Live Data</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/services/report-fault">
          <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-white">
            <AlertCircle className="w-6 h-6 text-[#E65516]" />
            <span className="font-medium">Report Fault</span>
          </Button>
        </Link>
        <Link href="/services/new-connection">
          <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-white">
            <Wrench className="w-6 h-6 text-primary" />
            <span className="font-medium">Request Support</span>
          </Button>
        </Link>
        <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-white">
          <Download className="w-6 h-6 text-[#2E8B43]" />
          <span className="font-medium">Download Report</span>
        </Button>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Zap className="w-16 h-16" />
          </div>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground font-medium mb-1">Current Usage</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-4xl font-display font-bold text-white tabular-nums tracking-wider">4.7</h3>
              <span className="text-primary font-bold">kWh</span>
            </div>
            <p className="text-xs text-[#E65516] mt-2 flex items-center gap-1">
              <Activity className="w-3 h-3" />
              +12% vs last hour
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-primary/20 relative overflow-hidden">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground font-medium mb-1">Estimated Spend</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-4xl font-display font-bold text-white tabular-nums tracking-wider">₦47k</h3>
            </div>
            <p className="text-xs text-[#2E8B43] mt-2 flex items-center gap-1">
              <Activity className="w-3 h-3" />
              -5% vs last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-primary/20 relative overflow-hidden">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground font-medium mb-1">Safety Status</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2E8B43]/20 flex items-center justify-center border border-[#2E8B43]/50">
                <Power className="w-5 h-5 text-[#2E8B43]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Optimal</h3>
                <p className="text-xs text-muted-foreground">Voltage stable at 228V</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-[#D71920]/40 relative overflow-hidden bg-gradient-to-br from-[#D71920]/5 to-transparent">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground font-medium mb-1">Active Alerts</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D71920]/20 flex items-center justify-center border border-[#D71920]/50">
                <AlertTriangle className="w-5 h-5 text-[#D71920]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tabular-nums">2</h3>
                <p className="text-xs text-[#D71920]">Requires attention</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts & Recent Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-display text-white">24-Hour Power Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0072CE" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0072CE" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#071B2C', borderColor: 'rgba(0,114,206,0.3)' }}
                    itemStyle={{ color: '#0072CE' }}
                  />
                  <Area type="monotone" dataKey="usage" stroke="#0072CE" strokeWidth={3} fillOpacity={1} fill="url(#colorUsage)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-primary/20 flex flex-col">
          <CardHeader className="pb-3 border-b border-border/50">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-display text-white">Recent Alerts</CardTitle>
              <Link href="/dashboard/alerts" className="text-xs text-primary hover:underline">View All</Link>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-auto">
            <div className="divide-y divide-border/50">
              <div className="p-4 flex gap-3 hover:bg-white/5 transition-colors">
                <div className="mt-0.5"><AlertTriangle className="w-4 h-4 text-[#D71920]" /></div>
                <div>
                  <p className="text-sm font-medium text-white leading-none mb-1">Voltage Spike Detected</p>
                  <p className="text-xs text-muted-foreground">Main panel reached 255V. Protection active.</p>
                  <p className="text-[10px] text-muted-foreground mt-2">10 mins ago</p>
                </div>
              </div>
              <div className="p-4 flex gap-3 hover:bg-white/5 transition-colors">
                <div className="mt-0.5"><AlertTriangle className="w-4 h-4 text-yellow-500" /></div>
                <div>
                  <p className="text-sm font-medium text-white leading-none mb-1">High Consumption</p>
                  <p className="text-xs text-muted-foreground">AC Unit 2 is drawing more power than usual.</p>
                  <p className="text-[10px] text-muted-foreground mt-2">2 hours ago</p>
                </div>
              </div>
              <div className="p-4 flex gap-3 hover:bg-white/5 transition-colors">
                <div className="mt-0.5"><AlertTriangle className="w-4 h-4 text-yellow-500" /></div>
                <div>
                  <p className="text-sm font-medium text-white leading-none mb-1">Budget Warning</p>
                  <p className="text-xs text-muted-foreground">You have used 80% of your monthly estimate.</p>
                  <p className="text-[10px] text-muted-foreground mt-2">Yesterday</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-display text-white">Monthly Historic Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#071B2C', borderColor: 'rgba(0,114,206,0.3)' }}
                  />
                  <Line type="monotone" dataKey="usage" stroke="#0072CE" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-display text-white">Live Monitoring Modules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-sidebar rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <Thermometer className="text-primary w-5 h-5" />
                <span className="font-medium text-white">Device Temperature</span>
              </div>
              <span className="text-[#2E8B43] font-mono">42°C</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-sidebar rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <Cloud className="text-primary w-5 h-5" />
                <span className="font-medium text-white">Network Signal</span>
              </div>
              <span className="text-[#2E8B43] font-mono">-68 dBm (Good)</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-sidebar rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <Power className="text-primary w-5 h-5" />
                <span className="font-medium text-white">Power Factor</span>
              </div>
              <span className="text-white font-mono">0.98</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
