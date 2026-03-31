import KuccpsHeader from "@/components/KuccpsHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, CreditCard, Search, Download } from "lucide-react";
import kuccpsLogo from "@/assets/kuccps-logo.png";

const steps = [
  { icon: LogIn, title: "Step 1: Login", desc: "Enter your KCSE Index Number, KCSE Year, and KCPE Index Number (password) to access your student portal. Your KCSE results will be displayed immediately." },
  { icon: Search, title: "Step 2: View Your Results", desc: "After logging in, you will see your full KCSE results including individual subject grades, points, mean grade, and aggregate score." },
  { icon: CreditCard, title: "Step 3: Pay to Unlock Courses", desc: "Tap 'Check Courses I Qualify For' and complete a one-time payment of KES 100 via M-Pesa (Send Money to 0780911606). Enter the confirmation code to unlock." },
  { icon: Download, title: "Step 4: View & Download", desc: "Browse all degree and diploma courses you qualify for, with cutoff point comparisons. Download PDF reports for your records." },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <KuccpsHeader />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="text-center space-y-3 animate-fade-in-up">
          <img src={kuccpsLogo} alt="KUCCPS Logo" width={80} height={80} className="mx-auto object-contain" />
          <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
          <p className="text-muted-foreground text-sm">Follow these simple steps to check the courses you qualify for.</p>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <Card key={i} className={`animate-fade-in-up animate-delay-${(i + 1) * 100}`}>
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="text-center py-6 text-muted-foreground text-xs mt-8 border-t">
        <p>© {new Date().getFullYear()} Kenya Universities and Colleges Central Placement Service (KUCCPS). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HowItWorks;
