import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Smartphone, Shield, ArrowRight } from "lucide-react";
import kuccpsLogo from "@/assets/kuccps-logo.png";

interface PaymentGateProps {
  open: boolean;
  onPaymentComplete: () => void;
  studentName?: string;
}

const PaymentGate = ({ open, onPaymentComplete }: PaymentGateProps) => {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<"info" | "processing" | "confirm">("info");
  const [mpesaCode, setMpesaCode] = useState("");

  const handleInitiatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
    // Simulate STK push delay
    setTimeout(() => {
      setStep("confirm");
    }, 3000);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (mpesaCode.trim().length >= 8) {
      onPaymentComplete();
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md [&>button]:hidden" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader className="items-center gap-2">
          <img
            src={kuccpsLogo}
            alt="KUCCPS Logo"
            width={80}
            height={80}
            className="object-contain animate-scale-fade-in"
          />
          <DialogTitle className="text-lg font-bold text-foreground text-center leading-tight">
            KUCCPS Course Checker Access
          </DialogTitle>
          <p className="text-muted-foreground text-xs text-center">
            Pay <span className="font-bold text-secondary text-sm">KES 100</span> to access your course eligibility results
          </p>
        </DialogHeader>

        {step === "info" && (
          <form onSubmit={handleInitiatePayment} className="space-y-4 mt-2 animate-fade-in-up">
            <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-secondary" />
                M-Pesa Payment Instructions
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-xs">
                <li>Go to M-Pesa on your phone</li>
                <li>Select <strong>Send Money</strong></li>
                <li>Enter number: <code className="bg-card px-1.5 py-0.5 rounded font-bold text-secondary">0780911606</code></li>
                <li>Amount: <strong>KES 100</strong></li>
                <li>Enter your M-Pesa PIN and send</li>
                <li>Enter the M-Pesa confirmation code below</li>
              </ol>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Your M-Pesa Phone Number</Label>
              <Input
                id="phone"
                placeholder="e.g. 0712345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-2 rounded">
              <Shield className="w-4 h-4 text-success shrink-0" />
              <span>Secure payment. Your details are protected.</span>
            </div>

            <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <ArrowRight className="w-4 h-4 mr-1" />
              I've Sent the Payment
            </Button>
          </form>
        )}

        {step === "processing" && (
          <div className="flex flex-col items-center gap-4 py-8 animate-scale-fade-in">
            <div className="w-12 h-12 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin" />
            <p className="text-muted-foreground text-sm">Waiting for payment confirmation...</p>
            <p className="text-xs text-muted-foreground">Please complete the payment on your phone</p>
          </div>
        )}

        {step === "confirm" && (
          <form onSubmit={handleConfirm} className="space-y-4 mt-2 animate-fade-in-up">
            <div className="space-y-2">
              <Label htmlFor="mpesaCode">Enter M-Pesa Confirmation Code</Label>
              <Input
                id="mpesaCode"
                placeholder="e.g. SLK4H7TXYR"
                value={mpesaCode}
                onChange={(e) => setMpesaCode(e.target.value.toUpperCase())}
                className="font-mono tracking-wider text-center text-lg"
                required
              />
              <p className="text-xs text-muted-foreground">
                Enter the code from the M-Pesa confirmation SMS you received
              </p>
            </div>

            <Button type="submit" className="w-full bg-success hover:bg-success/90 text-success-foreground" disabled={mpesaCode.trim().length < 8}>
              <CheckCircle className="w-4 h-4 mr-1" />
              Confirm Payment & Access Portal
            </Button>
          </form>
        )}

        <p className="text-center text-[10px] text-muted-foreground mt-2">
          © {new Date().getFullYear()} Kenya Universities and Colleges Central Placement Service. All rights reserved.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentGate;
