import { AlertTriangle, Zap, ThermometerSnowflake, PowerOff, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardAlerts() {
  const alerts = [
    {
      id: 1,
      type: 'critical',
      title: 'Under-voltage Detected',
      message: 'Grid voltage dropped to 175V. Device automatically disconnected main load to protect appliances.',
      time: '10 mins ago',
      icon: Zap,
      device: 'OMH-001'
    },
    {
      id: 2,
      type: 'warning',
      title: 'High Consumption Anomaly',
      message: 'Unusual power draw detected at 02:00 AM (3.5kWh). Suggest checking for appliances left on.',
      time: '2 hours ago',
      icon: AlertTriangle,
      device: 'OMH-001'
    },
    {
      id: 3,
      type: 'info',
      title: 'Power Restored',
      message: 'Grid power restored and stabilized at 228V. Load reconnected successfully.',
      time: '4 hours ago',
      icon: PowerOff,
      device: 'OMH-001'
    },
    {
      id: 4,
      type: 'success',
      title: 'Weekly Report Ready',
      message: 'Your energy consumption report for the week is ready. You saved 12% compared to last week.',
      time: '1 day ago',
      icon: CheckCircle2,
      device: 'System'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold text-white tracking-wide">System Alerts</h1>
        <p className="text-muted-foreground">Notifications and anomaly detections.</p>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className={`bg-card/50 border-l-4 ${
            alert.type === 'critical' ? 'border-l-[#D71920] border-y-border border-r-border' :
            alert.type === 'warning' ? 'border-l-[#E65516] border-y-border border-r-border' :
            alert.type === 'success' ? 'border-l-[#2E8B43] border-y-border border-r-border' :
            'border-l-primary border-y-border border-r-border'
          }`}>
            <CardContent className="p-6 flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                alert.type === 'critical' ? 'bg-[#D71920]/20 text-[#D71920]' :
                alert.type === 'warning' ? 'bg-[#E65516]/20 text-[#E65516]' :
                alert.type === 'success' ? 'bg-[#2E8B43]/20 text-[#2E8B43]' :
                'bg-primary/20 text-primary'
              }`}>
                <alert.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-white text-lg">{alert.title}</h3>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{alert.message}</p>
                <Badge variant="outline" className="bg-sidebar border-border text-muted-foreground">
                  {alert.device}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
