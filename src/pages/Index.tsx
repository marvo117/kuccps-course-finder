import { useState } from "react";
import { Student } from "@/data/mockData";
import LoginModal from "@/components/LoginModal";
import PaymentGate from "@/components/PaymentGate";
import StudentDashboard from "@/components/StudentDashboard";

const Index = () => {
  const [student, setStudent] = useState<Student | null>(null);
  const [paid, setPaid] = useState(false);

  const handleLogin = (s: Student) => setStudent(s);
  const handleLogout = () => { setStudent(null); setPaid(false); };
  const handlePaymentComplete = () => setPaid(true);

  // Step 1: Login
  if (!student) {
    return (
      <>
        <LoginModal open={true} onLogin={handleLogin} />
        <div className="min-h-screen bg-background" />
      </>
    );
  }

  // Step 2: Payment (after login, before dashboard)
  if (!paid) {
    return (
      <>
        <PaymentGate open={true} onPaymentComplete={handlePaymentComplete} studentName={student.fullName} />
        <div className="min-h-screen bg-background" />
      </>
    );
  }

  // Step 3: Dashboard
  return <StudentDashboard student={student} onLogout={handleLogout} />;
};

export default Index;
