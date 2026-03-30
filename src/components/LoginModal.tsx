import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, LogIn } from "lucide-react";
import { findStudent, Student } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

interface LoginModalProps {
  open: boolean;
  onLogin: (student: Student) => void;
}

const LoginModal = ({ open, onLogin }: LoginModalProps) => {
  const [indexNumber, setIndexNumber] = useState("");
  const [kcseYear, setKcseYear] = useState("");
  const [kcpeIndex, setKcpeIndex] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const student = findStudent(indexNumber.trim(), kcseYear.trim(), kcpeIndex.trim());
      if (student) {
        onLogin(student);
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Please check your KCSE Index Number, Year, and KCPE Index Number.",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md [&>button]:hidden" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader className="items-center gap-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 mb-2">
            <GraduationCap className="w-9 h-9 text-primary" />
          </div>
          <DialogTitle className="text-xl font-bold text-foreground text-center">
            KUCCPS Student Portal
          </DialogTitle>
          <p className="text-muted-foreground text-sm text-center">
            Enter your credentials to check course eligibility
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="indexNumber">KCSE Index Number</Label>
            <Input
              id="indexNumber"
              placeholder="e.g. 11200301001"
              value={indexNumber}
              onChange={(e) => setIndexNumber(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="kcseYear">KCSE Year</Label>
            <Input
              id="kcseYear"
              placeholder="e.g. 2024"
              value={kcseYear}
              onChange={(e) => setKcseYear(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="kcpeIndex">KCPE Index Number (Password)</Label>
            <Input
              id="kcpeIndex"
              type="password"
              placeholder="Enter your KCPE Index Number"
              value={kcpeIndex}
              onChange={(e) => setKcpeIndex(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Verifying...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Login
              </span>
            )}
          </Button>

          <div className="bg-muted rounded-lg p-3 text-xs text-muted-foreground space-y-1">
            <p className="font-semibold">Demo Credentials:</p>
            <p>Index: <code className="bg-background px-1 rounded">11200301001</code> | Year: <code className="bg-background px-1 rounded">2024</code> | KCPE: <code className="bg-background px-1 rounded">30100101</code></p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
